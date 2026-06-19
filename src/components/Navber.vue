<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { X, Menu } from 'lucide-vue-next'
import type { InterfaceNavberItem } from '../interfaces/index'
import logo from '@/assets/logo.svg'

defineProps<{
    menuItems: InterfaceNavberItem[]
}>()

const router = useRouter()
const isScrolled = ref(false)
const mobileOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLElement | null>(null)
const itemRefs = ref<HTMLElement[]>([])

function setItemRef(el: HTMLElement | null) {
    if (el) itemRefs.value.push(el)
}

function handleScroll() {
    isScrolled.value = window.scrollY > 20
}

function navigate(route: string) {
    mobileOpen.value = false
    const hash = route.includes('#') ? route.split('#')[1] : null
    if (hash) {
        const el = document.getElementById(hash)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        } else {
            // navigate to home first then scroll
            router.push('/').then(() => {
                setTimeout(() => {
                    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            })
        }
    } else {
        router.push(route)
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(navRef.value, { y: -40, opacity: 0, duration: 0.5 })
        .from(logoRef.value, { x: -16, opacity: 0, duration: 0.4 }, '-=0.2')
        .from(itemRefs.value, { opacity: 0, y: -10, stagger: 0.08, duration: 0.4 }, '-=0.25')
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <header ref="navRef" class="fixed top-0 z-50 w-full transition-all duration-300 border-b" :class="isScrolled
        ? 'bg-zinc-950/80 backdrop-blur-md border-white/10 shadow-lg shadow-black/30 py-1'
        : 'bg-transparent border-transparent py-3'">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">

                <!-- Logo -->
                <div ref="logoRef"
                    class="flex-shrink-0 flex items-center gap-3 font-bold text-xl tracking-tight text-white cursor-pointer"
                    @click="navigate('/')">
                    <img :src="logo" class="w-10" alt="Panha Dev logo" />
                    <span>Panha Dev</span>
                </div>

                <!-- Desktop nav -->
                <nav class="hidden md:block" aria-label="Main navigation">
                    <ul class="flex items-center space-x-1">
                        <li v-for="item in menuItems" :key="item.id" :ref="setItemRef" class="relative group">
                            <button @click="navigate(item.route)"
                                class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200">
                                <component :is="item.icon" class="w-4 h-4" />
                                {{ item.title }}
                            </button>

                            <!-- Dropdown -->
                            <div v-if="item.children?.length"
                                class="absolute left-0 mt-1 w-48 rounded-xl shadow-xl bg-zinc-900 border border-zinc-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-left">
                                <div class="py-1.5 px-1.5">
                                    <button v-for="child in item.children" :key="child.id"
                                        @click="navigate(child.route)"
                                        class="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors duration-150">
                                        <component :is="child.icon" class="w-4 h-4" />
                                        {{ child.title }}
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>

                <!-- Mobile menu button -->
                <button
                    class="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                    aria-label="Open menu" @click="mobileOpen = true">
                    <Menu class="w-5 h-5" />
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile drawer -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="mobileOpen" class="fixed inset-0 z-50 md:hidden">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="mobileOpen = false" />

            <!-- Drawer -->
            <Transition enter-active-class="transition-transform duration-300 ease-out"
                enter-from-class="-translate-x-full" enter-to-class="translate-x-0"
                leave-active-class="transition-transform duration-200 ease-in" leave-from-class="translate-x-0"
                leave-to-class="-translate-x-full">
                <div v-if="mobileOpen"
                    class="absolute left-0 top-0 bottom-0 w-72 bg-zinc-950 border-r border-zinc-800 flex flex-col">
                    <!-- Drawer header -->
                    <div class="flex items-center justify-between px-5 py-5 border-b border-zinc-800">
                        <div class="flex items-center gap-3 font-bold text-lg text-white">
                            <img :src="logo" class="w-8" alt="Panha Dev logo" />
                            <span>Panha Dev</span>
                        </div>
                        <button @click="mobileOpen = false"
                            class="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                            <X class="w-4 h-4" />
                        </button>
                    </div>

                    <!-- Drawer nav -->
                    <nav class="flex-1 overflow-y-auto px-3 py-4">
                        <ul class="space-y-1">
                            <li v-for="item in menuItems" :key="item.id">
                                <button @click="navigate(item.route)"
                                    class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-150">
                                    <component :is="item.icon" class="w-4 h-4 flex-shrink-0" />
                                    {{ item.title }}
                                </button>

                                <!-- Mobile children -->
                                <ul v-if="item.children?.length"
                                    class="mt-1 ml-4 space-y-1 border-l border-zinc-800 pl-3">
                                    <li v-for="child in item.children" :key="child.id">
                                        <button @click="navigate(child.route)"
                                            class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-500 hover:text-white hover:bg-white/5 transition-all duration-150">
                                            <component :is="child.icon" class="w-4 h-4 flex-shrink-0" />
                                            {{ child.title }}
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Transition>
        </div>
    </Transition>
</template>
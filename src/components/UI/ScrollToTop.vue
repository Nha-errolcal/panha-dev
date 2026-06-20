<template>
    <button v-show="isVisible" @click="scrollToTop" class="scroll-to-top" aria-label="Scroll to top">
        <ArrowUp class="icon" />
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUp } from 'lucide-vue-next';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const isVisible = ref(false);

const toggleVisibility = () => {
    isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
    gsap.to(window, {
        duration: 0.6,
        scrollTo: 0,
        ease: "power2.inOut"
    });
};

onMounted(() => {
    window.addEventListener('scroll', toggleVisibility);
});

onUnmounted(() => {
    window.removeEventListener('scroll', toggleVisibility);
});
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: background-color 0.3s ease, transform 0.2s ease;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll-to-top:hover {
    background-color: #1d4ed8;
    transform: translateY(-3px);
}

.icon {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
}
</style>
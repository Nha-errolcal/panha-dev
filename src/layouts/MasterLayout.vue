<script setup lang="ts">
import Navber from "../components/Navber.vue";
import menuNavItem from "../constants/menuNavItem";
</script>

<template>
    <div class="min-h-screen bg-zinc-950 flex flex-col w-full">
        <Navber :menu-items="menuNavItem" />
        <main class="flex-1 w-full">
            <slot />
        </main>

        <footer class="footer">
            © {{ new Date().getFullYear() }} Panha dev
        </footer>
    </div>
</template>

<style scoped>
.footer {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem 1.5rem;
    border-top: 1px solid #ffffff08;
    font-size: 13px;
    color: #52525b;
}
</style>
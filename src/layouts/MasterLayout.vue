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
    </div>
</template>
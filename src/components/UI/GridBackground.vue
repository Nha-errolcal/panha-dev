<script setup lang="ts">
withDefaults(defineProps<{
    particleCount?: number
    glowColor?: string
}>(), {
    particleCount: 20,
    glowColor: 'rgba(59,130,246,0.15)',
})
</script>

<template>
    <div class="grid-bg-root">
        <!-- Grid lines -->
        <div class="grid-lines" aria-hidden="true" />

        <!-- Breathing glow blob -->
        <div class="glow-blob"
            :style="{ background: `radial-gradient(ellipse at center, ${glowColor} 0%, transparent 70%)` }"
            aria-hidden="true" />

        <!-- Ambient particles -->
        <div class="particles" aria-hidden="true">
            <span v-for="n in particleCount" :key="n" class="particle" :style="{
                left: ((n * 17) % 97) + '%',
                animationDuration: 4 + ((n * 3) % 7) + 's',
                animationDelay: ((n * 0.4) % 9) + 's',
                width: 1 + (n % 2) + 'px',
                height: 1 + (n % 2) + 'px',
            }" />
        </div>

        <slot />
    </div>
</template>

<style scoped>
.grid-bg-root {
    position: relative;
    min-height: 100vh;
    width: 100%;
    background: #09090b;
    overflow: hidden;
}

.grid-lines {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(to right, #ffffff08 1px, transparent 1px),
        linear-gradient(to bottom, #ffffff08 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 70%, transparent 100%);
    pointer-events: none;
}

.glow-blob {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 400px;
    border-radius: 50%;
    pointer-events: none;
    animation: breath 8s ease-in-out infinite;
}

@keyframes breath {

    0%,
    100% {
        opacity: 0.6;
        transform: translateX(-50%) scale(0.95);
    }

    50% {
        opacity: 1;
        transform: translateX(-50%) scale(1.05);
    }
}

.particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.particle {
    position: absolute;
    bottom: -4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    animation: floatUp linear infinite;
}

@keyframes floatUp {
    from {
        transform: translateY(0);
        opacity: 0.4;
    }

    to {
        transform: translateY(-100vh);
        opacity: 0;
    }
}
</style>
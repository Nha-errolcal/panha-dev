<script setup lang="ts">
import { ref } from 'vue'
import hero from '../../../assets/hero.png'

const cardWrap = ref<HTMLElement | null>(null)
const card3d = ref<HTMLElement | null>(null)

function onMouseMove(e: MouseEvent) {
    if (!cardWrap.value || !card3d.value) return
    const rect = cardWrap.value.getBoundingClientRect()
    const rotX = ((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * -10
    const rotY = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * 10
    card3d.value.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`
}

function onMouseLeave() {
    if (card3d.value)
        card3d.value.style.transform = 'rotateX(0deg) rotateY(0deg)'
}
</script>

<template>
    <section class="hero-inner">
        <!-- Left: text -->
        <div class="hero-left">
            <span class="badge animate-badge">
                <span class="dot" />
                Developer &amp; Performer
            </span>

            <h1 class="h1-gray animate-up-1">Code everyday.</h1>
            <h1 class="h1-blue  animate-up-2">Coding last night.</h1>

            <p class="desc animate-up-3">
                I build web and mobile applications using Vue, Next.js, Nuxt.js, React, Angular,
                and Flutter and deliver memorable laughs on stage with my team.
            </p>

            <div class="btn-row animate-up-4">
                <a href="#projects" class="btn-primary">View my Work</a>
                <a href="#contact" class="btn-secondary">Get in touch</a>
            </div>

            <div class="chips animate-up-5">
                <span class="chip"><b class="chip-num">1+</b> year exp</span>
                <span class="chip"><b class="chip-num">20+</b> projects</span>
                <span class="chip"><b class="chip-num">6</b> stacks</span>
            </div>
        </div>

        <!-- Right: 3D card -->
        <div class="hero-right animate-card">
            <div class="card-wrap" ref="cardWrap" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
                <div class="card-3d" ref="card3d">
                    <div class="card-overlay" />
                    <div class="card-fade" />
                    <img :src="hero" alt="Panha profile photo" class="card-img" />
                    <span class="live-ping-outer" />
                    <span class="live-ping-inner" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-inner {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    min-height: 100vh;
    padding: 7rem 1.5rem 3rem;
    max-width: 1200px;
    margin: 0 auto;
}

@media (min-width: 1024px) {
    .hero-inner {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 2rem;
    }
}

/* ── Left ── */
.hero-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 480px;
}

@media (min-width: 1024px) {
    .hero-left {
        align-items: flex-start;
        text-align: left;
    }
}

.badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 4px 16px;
    margin-bottom: 20px;
    border-radius: 999px;
    background: white;
    color: #2563eb;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .3);
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: .5;
        transform: scale(.8);
    }
}

.h1-gray {
    font-size: clamp(2rem, 5vw, 3.75rem);
    font-weight: 800;
    color: #71717a;
    letter-spacing: -.02em;
    line-height: 1.1;
    margin: 0 0 4px;
}

.h1-blue {
    font-size: clamp(2rem, 5vw, 3.75rem);
    font-weight: 800;
    color: #3b82f6;
    letter-spacing: -.02em;
    line-height: 1.1;
    margin: 0 0 20px;
}

.desc {
    font-size: 1rem;
    color: #71717a;
    line-height: 1.7;
    max-width: 420px;
    margin-bottom: 2rem;
}

.btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.btn-primary,
.btn-secondary {
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: transform .2s, background .2s;
    cursor: pointer;
    display: inline-block;
}

.btn-primary {
    background: #2563eb;
    color: white;
}

.btn-primary:hover {
    background: #3b82f6;
    transform: translateY(-2px);
}

.btn-secondary {
    background: white;
    color: #18181b;
}

.btn-secondary:hover {
    background: #f4f4f5;
    transform: translateY(-2px);
}

.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
}

.chip {
    padding: 6px 14px;
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 999px;
    font-size: 13px;
    color: #a1a1aa;
    transition: border-color .2s, color .2s;
}

.chip:hover {
    border-color: #3b82f6;
    color: white;
}

.chip-num {
    color: #3b82f6;
    font-weight: 700;
}

/* ── Right / Card ── */
.hero-right {
    flex: 1;
    display: flex;
    justify-content: center;
}

@media (min-width: 1024px) {
    .hero-right {
        justify-content: flex-end;
    }
}

.card-wrap {
    width: min(320px, 90vw);
    aspect-ratio: 4/5;
    perspective: 900px;
    cursor: default;
}

.card-3d {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    overflow: hidden;
    background: #27272a;
    border: 4px solid white;
    box-shadow: 0 30px 70px -10px rgba(0, 0, 0, .7);
    transform-style: preserve-3d;
    transition: transform .3s ease-out;
    position: relative;
    animation: floatCard 4s ease-in-out infinite;
}

.card-3d:hover {
    animation-play-state: paused;
}

@keyframes floatCard {

    0%,
    100% {
        translate: 0 0;
    }

    50% {
        translate: 0 -12px;
    }
}

.card-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(135deg, rgba(59, 130, 246, .5), rgba(168, 85, 247, .4), rgba(6, 182, 212, .5));
    background-size: 200% 200%;
    mix-blend-mode: color;
    animation: panGrad 6s ease-in-out infinite;
}

@keyframes panGrad {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

.card-fade {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(to top, rgba(9, 9, 11, .75), transparent);
}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.live-ping-outer,
.live-ping-inner {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 10;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #22c55e;
}

.live-ping-outer {
    animation: ping 1.5s cubic-bezier(0, 0, .2, 1) infinite;
    opacity: .75;
}

@keyframes ping {

    75%,
    100% {
        transform: scale(2);
        opacity: 0;
    }
}

/* ── Entrance animations ── */
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(28px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes badgePop {
    from {
        opacity: 0;
        transform: scale(.8) translateY(10px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@keyframes cardIn {
    from {
        opacity: 0;
        transform: translateX(36px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-badge {
    animation: badgePop .6s cubic-bezier(.34, 1.56, .64, 1) .2s both;
}

.animate-up-1 {
    animation: slideUp .7s cubic-bezier(.16, 1, .3, 1) .35s both;
}

.animate-up-2 {
    animation: slideUp .7s cubic-bezier(.16, 1, .3, 1) .48s both;
}

.animate-up-3 {
    animation: slideUp .7s cubic-bezier(.16, 1, .3, 1) .60s both;
}

.animate-up-4 {
    animation: slideUp .7s cubic-bezier(.16, 1, .3, 1) .72s both;
}

.animate-up-5 {
    animation: slideUp .7s cubic-bezier(.16, 1, .3, 1) .84s both;
}

.animate-card {
    animation: cardIn .8s cubic-bezier(.16, 1, .3, 1) .40s both;
}
</style>
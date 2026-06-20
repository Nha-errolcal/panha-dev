<script setup lang="ts">
import { ref } from 'vue'
import hero from '../../../assets/hero.png'
import { useScrollReveal } from '../../../composables/useScrollReveal'

const stats = [
    { num: '1+', label: 'Years Experience' },
    { num: '20+', label: 'Projects Shipped' },
    { num: '6', label: 'Tech Stacks' },
    { num: '∞', label: 'Laughs on Stage' },
]

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
</script>

<template>
    <section id="about" class="about-section" ref="sectionRef">
        <div class="section-inner">
            <p class="section-eyebrow reveal">Who I am</p>
            <h2 class="section-title reveal">Developer <span class="text-blue">&</span> Performer</h2>
            <p class="section-sub reveal">
                CS student at Western University Cambodia, intern at MoEYS, and Flutter dev with a published app.
            </p>

            <div class="about-grid">
                <!-- Photo -->
                <div class="about-img-col reveal">
                    <div class="about-img-frame">
                        <img :src="hero" alt="Panha" class="about-img" />
                        <div class="about-img-glow" />
                        <div class="about-badge-float">
                            <span class="about-dot" /> Open to work
                        </div>
                    </div>
                </div>

                <!-- Text -->
                <div class="about-text-col reveal">
                    <p class="about-body">
                        I'm <strong style="color:#e4e4e7">Tho Panha</strong>, a junior Full-Stack &amp; Flutter
                        Developer
                        based in Cambodia, currently studying Computer Science at Western University
                        (class of 2026) while interning at the Ministry of Education, Youth and Sports.
                    </p>
                    <p class="about-body">
                        My day job involves building bilingual Khmer/English web apps with Angular, NestJS,
                        and MongoDB — but I'm equally at home in Next.js, Vue, Laravel, or Dart.
                        I published <strong style="color:#e4e4e7">WU Mobile</strong> on both the App Store
                        and Google Play, and I've shipped everything from POS systems to hotel management ERDs.
                    </p>
                    <p class="about-body">
                        Off-screen I perform comedy on stage. I believe the same instinct — reading the room,
                        timing, clarity — makes both better code and better laughs.
                    </p>

                    <div class="about-stats">
                        <div v-for="s in stats" :key="s.label" class="about-stat">
                            <span class="about-stat-num">{{ s.num }}</span>
                            <span class="about-stat-label">{{ s.label }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.reveal {
    will-change: transform, opacity;
}

.about-section {
    position: relative;
    z-index: 10;
    padding: 5rem 1.5rem;
    border-top: 1px solid #ffffff08;
}

.section-inner {
    max-width: 1200px;
    margin: 0 auto;
}

.section-eyebrow {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: #3b82f6;
    margin-bottom: 12px;
}

.section-title {
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 800;
    color: #f4f4f5;
    line-height: 1.15;
    letter-spacing: -.02em;
    margin-bottom: 16px;
}

.section-sub {
    font-size: 1rem;
    color: #71717a;
    line-height: 1.7;
    margin-bottom: 3rem;
}

.text-blue {
    color: #3b82f6;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
}

@media (min-width: 1024px) {
    .about-grid {
        grid-template-columns: 1fr 1fr;
    }
}

.about-img-col {
    display: flex;
    justify-content: center;
}

.about-img-frame {
    position: relative;
    width: min(320px, 90vw);
    aspect-ratio: 4/5;
    border-radius: 2rem;
    overflow: hidden;
    border: 3px solid #27272a;
}

.about-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.about-img-glow {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, .3), rgba(168, 85, 247, .2));
    mix-blend-mode: color;
    pointer-events: none;
}

.about-badge-float {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background: rgba(9, 9, 11, .85);
    border: 1px solid #27272a;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    color: #e4e4e7;
    white-space: nowrap;
    backdrop-filter: blur(8px);
}

.about-dot {
    display: inline-block;
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

.about-text-col {
    display: flex;
    flex-direction: column;
}

.about-body {
    font-size: 1rem;
    color: #a1a1aa;
    line-height: 1.8;
    margin-bottom: 1.25rem;
}

.about-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 2rem;
}

@media (min-width: 640px) {
    .about-stats {
        grid-template-columns: repeat(4, 1fr);
    }
}

.about-stat {
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 12px;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    transition: border-color .2s;
}

.about-stat:hover {
    border-color: #3b82f6;
}

.about-stat-num {
    font-size: 1.5rem;
    font-weight: 800;
    color: #3b82f6;
    line-height: 1;
}

.about-stat-label {
    font-size: 11px;
    color: #71717a;
    text-align: center;
}
</style>
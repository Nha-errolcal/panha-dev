<script setup lang="ts">
import { ref } from 'vue'
import { experienceList } from '../../../data/education'
import { useScrollReveal } from '../../../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 24, stagger: 0.15 })
</script>

<template>
    <section id="experience" class="exp-section" ref="sectionRef">
        <div class="section-inner">
            <p class="section-eyebrow reveal">Experience</p>
            <h2 class="section-title reveal">Work <span class="text-blue">History</span></h2>

            <div class="timeline">
                <div v-for="(exp, i) in experienceList" :key="i" class="timeline-item reveal">
                    <div class="timeline-track">
                        <div class="timeline-icon-wrap">
                            <img :src="exp.icon" :alt="exp.role" class="timeline-icon" loading="lazy" />
                        </div>
                        <div class="timeline-line" v-if="i < experienceList.length - 1" />
                    </div>
                    <div class="timeline-body">
                        <p class="timeline-title">{{ exp.role }}</p>
                        <p class="timeline-sub">{{ exp.company }}</p>
                        <p class="timeline-desc">{{ exp.description }}</p>
                        <div class="timeline-tags">
                            <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
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

.exp-section {
    position: relative;
    z-index: 10;
    padding: 5rem 1.5rem;
    border-top: 1px solid #ffffff08;
}

.section-inner {
    max-width: 600px;
    margin: 0 auto;
}

.section-eyebrow {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: #f59e0b;
    margin-bottom: 10px;
}

.section-title {
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-weight: 800;
    color: #f4f4f5;
    line-height: 1.2;
    letter-spacing: -.02em;
    margin-bottom: 2rem;
}

.text-blue {
    color: #3b82f6
}

.timeline {
    display: flex;
    flex-direction: column;
}

.timeline-item {
    display: flex;
    gap: 14px;
}

.timeline-track {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
}

.timeline-icon-wrap {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: #27272a;
    border: 1px solid #3f3f46;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    z-index: 1;
}

.timeline-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
}

.timeline-line {
    width: 2px;
    flex: 1;
    background: #27272a;
    margin-top: 6px;
    min-height: 20px;
}

.timeline-body {
    padding-bottom: 28px;
    padding-top: 4px;
}

.timeline-title {
    font-size: 14px;
    font-weight: 700;
    color: #e4e4e7;
    margin-bottom: 3px;
}

.timeline-sub {
    font-size: 12px;
    color: #71717a;
    margin-bottom: 6px;
}

.timeline-desc {
    font-size: 12px;
    color: #52525b;
    line-height: 1.6;
    margin-bottom: 8px;
}

.timeline-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag {
    font-size: 11px;
    font-weight: 600;
    color: #3b82f6;
    background: #3b82f610;
    border: 1px solid #3b82f620;
    border-radius: 999px;
    padding: 2px 10px;
    letter-spacing: .03em;
}
</style>
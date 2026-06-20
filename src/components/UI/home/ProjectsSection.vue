<script setup lang="ts">
import { ref } from 'vue'
import projects from '../../../data/project';
import { useScrollReveal } from '../../../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
</script>

<template>
    <section id="projects" class="projects-section" ref="sectionRef">
        <div class="section-inner">
            <p class="section-eyebrow reveal">What I've built</p>
            <h2 class="section-title reveal">Featured <span class="text-blue">Projects</span></h2>
            <p class="section-sub reveal">
                A selection of real products I've designed, built, and shipped.
            </p>

            <div class="projects-grid">
                <article v-for="project in projects" :key="project.title" class="project-card reveal">
                    <div class="project-accent" :style="{ background: project.color }" />
                    <div class="project-body">
                        <h3 class="project-title">{{ project.title }}</h3>
                        <p class="project-desc">{{ project.desc }}</p>
                        <div class="project-tags">
                            <span v-for="tag in project.tags" :key="tag" class="project-tag" :style="{
                                color: project.color,
                                borderColor: project.color + '50',
                                background: project.color + '10',
                            }">{{ tag }}</span>
                        </div>
                        <div class="project-links">
                            <a :href="project.link" class="project-link" :style="{ color: project.color }">
                                View Project →
                            </a>
                            <a v-if="project.github" :href="project.github" class="project-link-gh" target="_blank"
                                rel="noopener">
                                GitHub
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.reveal {
    will-change: transform, opacity;
}

.projects-section {
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

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.project-card {
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 16px;
    overflow: hidden;
    transition: border-color .2s, transform .25s;
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    border-color: #3b82f650;
    transform: translateY(-4px);
}

.project-accent {
    height: 4px;
    width: 100%;
    opacity: .85;
}

.project-body {
    padding: 20px 24px 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.project-title {
    font-size: 16px;
    font-weight: 700;
    color: #f4f4f5;
    margin-bottom: 10px;
}

.project-desc {
    font-size: 13px;
    color: #71717a;
    line-height: 1.7;
    flex: 1;
    margin-bottom: 16px;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
}

.project-tag {
    font-size: 11px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid;
}

.project-links {
    display: flex;
    align-items: center;
    gap: 16px;
}

.project-link {
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    transition: letter-spacing .2s;
}

.project-link:hover {
    letter-spacing: .02em;
}

.project-link-gh {
    font-size: 13px;
    font-weight: 500;
    color: #52525b;
    text-decoration: none;
    transition: color .2s;
}

.project-link-gh:hover {
    color: #a1a1aa;
}
</style>
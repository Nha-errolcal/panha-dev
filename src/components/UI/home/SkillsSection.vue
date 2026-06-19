<script setup lang="ts">
import skillGroups from '../../../data/skills'
</script>

<template>
    <section id="skills" class="skills-section">
        <div class="section-inner">
            <p class="section-eyebrow center">What I use</p>
            <h2 class="section-title center">Tech <span class="text-blue">Stack</span></h2>
            <p class="section-sub center">
                Tools and technologies I reach for to build fast, reliable products.
            </p>

            <div class="skill-groups">
                <div v-for="group in skillGroups" :key="group.category" class="skill-group">
                    <div class="skill-group-header">
                        <span class="skill-group-dot" :style="{ background: group.color }" />
                        <span class="skill-group-title">{{ group.category }}</span>
                    </div>

                    <div class="skill-rows">
                        <div v-for="skill in group.skills" :key="skill.name" class="skill-item">
                            <div class="skill-logo-wrap">
                                <img :src="skill.logo" :alt="skill.name" class="skill-logo" loading="lazy"
                                    @error="(e) => ((e.target as HTMLImageElement).style.display = 'none')" />
                            </div>
                            <span class="skill-name">{{ skill.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.skills-section {
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

.section-eyebrow.center {
    text-align: center
}

.section-title {
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 800;
    color: #f4f4f5;
    line-height: 1.15;
    letter-spacing: -.02em;
    margin-bottom: 16px;
}

.section-title.center {
    text-align: center
}

.section-sub {
    font-size: 1rem;
    color: #71717a;
    line-height: 1.7;
    margin-bottom: 3rem;
}

.section-sub.center {
    text-align: center
}

.text-blue {
    color: #3b82f6
}

.skill-groups {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
}

.skill-group {
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 16px;
    padding: 24px;
    transition: border-color .2s;
}

.skill-group:hover {
    border-color: #3b82f640
}

.skill-group-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid #27272a;
}

.skill-group-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
}

.skill-group-title {
    font-size: 13px;
    font-weight: 700;
    color: #e4e4e7;
    letter-spacing: .04em;
    text-transform: uppercase;
}

.skill-rows {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.skill-logo-wrap {
    width: 30px;
    height: 30px;
    border-radius: 6px;
    background: #27272a;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
}

.skill-logo {
    width: 20px;
    height: 20px;
    object-fit: contain;
}

.skill-name {
    font-size: 13px;
    font-weight: 500;
    color: #d4d4d8;
}
</style>
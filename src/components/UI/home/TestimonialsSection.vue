<script setup lang="ts">
import testimonials from '../../../data/testimonials';

</script>

<template>
    <section id="testimonials" class="testi-section">
        <div class="section-inner">
            <p class="section-eyebrow center">What people say</p>
            <h2 class="section-title center">Kind <span class="text-blue">Words</span></h2>
            <p class="section-sub center">From collaborators and clients I've had the pleasure to work with.</p>

            <div class="testi-grid">
                <article v-for="t in testimonials" :key="t.name" class="testi-card">
                    <div class="testi-stars">
                        <span v-for="i in t.stars" :key="i" class="star">★</span>
                    </div>
                    <p class="testi-text">"{{ t.quote }}"</p>
                    <div class="testi-author">
                        <div class="testi-avatar" :style="{ background: t.avatarBg + '30', color: t.avatarBg }">{{
                            t.initials }}</div>
                        <div>
                            <p class="testi-name">{{ t.name }}</p>
                            <p class="testi-role">{{ t.role }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testi-section {
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
    text-align: center;
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
    text-align: center;
}

.section-sub {
    font-size: 1rem;
    color: #71717a;
    line-height: 1.7;
    margin-bottom: 3rem;
}

.section-sub.center {
    text-align: center;
}

.text-blue {
    color: #3b82f6;
}

.testi-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.testi-card {
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: border-color .2s, transform .2s;
}

.testi-card:hover {
    border-color: #3b82f640;
    transform: translateY(-2px);
}

.testi-stars {
    display: flex;
    gap: 2px;
}

.star {
    color: #f59e0b;
    font-size: 14px;
}

.testi-text {
    font-size: 14px;
    color: #a1a1aa;
    line-height: 1.75;
    flex: 1;
    font-style: italic;
}

.testi-author {
    display: flex;
    align-items: center;
    gap: 12px;
}

.testi-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    flex-shrink: 0;
}

.testi-name {
    font-size: 14px;
    font-weight: 600;
    color: #e4e4e7;
    margin: 0;
}

.testi-role {
    font-size: 12px;
    color: #71717a;
    margin: 0;
}
</style>
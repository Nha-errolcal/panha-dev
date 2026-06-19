<script setup lang="ts">
// Replace with your real email / GitHub
const email = 'panha@example.com'
const github = 'https://github.com/Nha-errolcal'
const portfolio = 'https://panha-teamyearng.vercel.app'
</script>

<template>
    <section id="contact" class="contact-section">
        <div class="section-inner">
            <div class="cta-box">
                <div class="cta-glow" />
                <p class="section-eyebrow center">Let's connect</p>
                <h2 class="section-title center">Ready to <span class="text-blue">build</span> something?</h2>
                <p class="section-sub center" style="max-width:480px;margin-left:auto;margin-right:auto;">
                    I'm open to freelance projects, internship extensions, and full-time roles.
                    Drop me a message and let's make it happen.
                </p>
                <div class="cta-btns">
                    <a :href="`mailto:${email}`" class="btn-primary">Send an email</a>
                    <a :href="github" target="_blank" rel="noopener" class="btn-secondary">GitHub</a>
                    <a :href="portfolio" target="_blank" rel="noopener" class="btn-outline">Portfolio</a>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        © {{ new Date().getFullYear() }} Tho Panha · Built with Vue 3 + TypeScript
    </footer>
</template>

<style scoped>
.contact-section {
    position: relative;
    z-index: 10;
    padding: 5rem 1.5rem;
    border-top: 1px solid #ffffff08;
}

.section-inner {
    max-width: 1200px;
    margin: 0 auto;
}

.cta-box {
    position: relative;
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 24px;
    padding: 4rem 2rem;
    text-align: center;
    overflow: hidden;
}

.cta-glow {
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(59, 130, 246, .12) 0%, transparent 70%);
    pointer-events: none;
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

.cta-btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
}

.btn-primary,
.btn-secondary,
.btn-outline {
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: transform .2s, background .2s;
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

.btn-outline {
    background: transparent;
    color: #a1a1aa;
    border: 1px solid #27272a;
}

.btn-outline:hover {
    border-color: #3b82f6;
    color: white;
    transform: translateY(-2px);
}

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
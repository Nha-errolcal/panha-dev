<script setup lang="ts">
import { reactive, ref } from 'vue'
import gsap from 'gsap'
import { useScrollReveal } from '../../../composables/useScrollReveal'

const email = 'thopanha123@gmail.com'
const github = 'https://github.com/Nha-errolcal'
const portfolio = 'https://www.linkedin.com/in/tho-panha-893259284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
const CONTACT_ENDPOINT = '/api/contact'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)

const form = reactive({ name: '', email: '', message: '' })
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const statusBox = ref<HTMLElement | null>(null)

function animateStatus() {
    if (!statusBox.value) return
    gsap.fromTo(
        statusBox.value,
        { opacity: 0, y: -8, scale: .96 },
        { opacity: 1, y: 0, scale: 1, duration: .4, ease: 'back.out(1.7)' },
    )
}

async function onSubmit() {
    if (!form.name || !form.email || !form.message) return
    status.value = 'sending'

    try {
        const res = await fetch(CONTACT_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Request failed')

        status.value = 'success'
        form.name = ''
        form.email = ''
        form.message = ''
    } catch {
        status.value = 'error'
    } finally {
        await new Promise((r) => setTimeout(r, 0))
        animateStatus()
    }
}

function resetForm() {
    status.value = 'idle'
}

const copied = ref(false)
async function copyEmail() {
    try {
        await navigator.clipboard.writeText(email)
        copied.value = true
        setTimeout(() => (copied.value = false), 1800)
    } catch {
    }
}

const btnRef = ref<HTMLElement | null>(null)
let moveX: gsap.QuickToFunc | null = null
let moveY: gsap.QuickToFunc | null = null

function ensureQuickTo() {
    if (!btnRef.value) return
    if (!moveX) moveX = gsap.quickTo(btnRef.value, 'x', { duration: .4, ease: 'power3' })
    if (!moveY) moveY = gsap.quickTo(btnRef.value, 'y', { duration: .4, ease: 'power3' })
}

function onBtnMove(e: MouseEvent) {
    if (!btnRef.value) return
    ensureQuickTo()
    const rect = btnRef.value.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    moveX?.(relX * .35)
    moveY?.(relY * .35)
}

function onBtnLeave() {
    moveX?.(0)
    moveY?.(0)
}

function onCardMove(e: MouseEvent) {
    const card = e.currentTarget as HTMLElement
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    card.style.setProperty('--my', `${e.clientY - rect.top}px`)
}
</script>

<template>
    <section id="contact" class="contact-section" ref="sectionRef">
        <div class="section-inner">
            <p class="section-eyebrow center reveal">Let's connect</p>
            <h2 class="section-title center reveal">Ready to <span class="text-blue">build</span> something?</h2>
            <p class="section-sub center reveal" style="max-width:480px;margin-left:auto;margin-right:auto;">
                I'm open to freelance projects, internship extensions, and full-time roles.
                Drop me a message and let's make it happen.
            </p>

            <div class="contact-grid">
                <!-- Left: info -->
                <div class="info-card reveal" @mousemove="onCardMove">
                    <div class="info-spotlight" />
                    <span class="status-pill">
                        <span class="status-dot" /> Available for work
                    </span>

                    <h3 class="info-title">Let's talk</h3>
                    <p class="info-desc">
                        Whether it's a freelance build, an internship, or a full-time role
                        I'm always happy to hear about what you're working on.
                    </p>

                    <div class="info-links">
                        <button type="button" class="info-link" @click="copyEmail">
                            <span class="info-link-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16v16H4z" opacity="0" />
                                    <path d="M3 7l9 6 9-6" />
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                </svg>
                            </span>
                            <span class="info-link-text">
                                <span class="info-link-label">Email</span>
                                <span class="info-link-value">{{ email }}</span>
                            </span>
                            <span class="info-link-action" :class="{ copied }">
                                <svg v-if="!copied" viewBox="0 0 24 24" width="14" height="14" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <rect x="9" y="9" width="11" height="11" rx="2" />
                                    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                                </svg>
                                <svg v-else viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                                    stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                            </span>
                        </button>

                        <a :href="github" target="_blank" rel="noopener" class="info-link">
                            <span class="info-link-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                    <path
                                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .31.2.66.79.55C20.71 21.39 24 17.08 24 12 24 5.65 18.85.5 12 .5Z" />
                                </svg>
                            </span>
                            <span class="info-link-text">
                                <span class="info-link-label">GitHub</span>
                                <span class="info-link-value">Nha-errolcal</span>
                            </span>
                            <span class="info-link-action">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 17 17 7M7 7h10v10" />
                                </svg>
                            </span>
                        </a>

                        <a :href="portfolio" target="_blank" rel="noopener" class="info-link">
                            <span class="info-link-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                                </svg>
                            </span>
                            <span class="info-link-text">
                                <span class="info-link-label">Portfolio</span>
                                <span class="info-link-value">View live site</span>
                            </span>
                            <span class="info-link-action">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 17 17 7M7 7h10v10" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <p class="info-note">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 3" />
                        </svg>
                        Usually replies within 24h
                    </p>
                </div>

                <div class="form-card reveal" @mousemove="onCardMove">
                    <div class="info-spotlight" />

                    <form v-if="status !== 'success'" class="contact-form" @submit.prevent="onSubmit">
                        <div class="field">
                            <input id="cf-name" v-model="form.name" type="text" placeholder=" " required
                                :disabled="status === 'sending'" />
                            <label for="cf-name">Your name</label>
                        </div>

                        <div class="field">
                            <input id="cf-email" v-model="form.email" type="email" placeholder=" " required
                                :disabled="status === 'sending'" />
                            <label for="cf-email">Your email</label>
                        </div>

                        <div class="field">
                            <textarea id="cf-message" v-model="form.message" rows="5" placeholder=" " required
                                :disabled="status === 'sending'" />
                            <label for="cf-message">Message</label>
                        </div>

                        <button ref="btnRef" type="submit" class="submit-btn" :disabled="status === 'sending'"
                            @mousemove="onBtnMove" @mouseleave="onBtnLeave">
                            <span v-if="status !== 'sending'" class="submit-btn-inner">
                                Send message
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                                </svg>
                            </span>
                            <span v-else class="submit-btn-inner">
                                <span class="spinner" />
                                Sending…
                            </span>
                        </button>

                        <p v-if="status === 'error'" ref="statusBox" class="form-status error">
                            Something went wrong — try again, or just email me directly.
                        </p>
                    </form>

                    <div v-else ref="statusBox" class="form-success">
                        <span class="form-success-icon">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
                                stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                        </span>
                        <p class="form-success-title">Message sent</p>
                        <p class="form-success-sub">Thanks for reaching out — I'll get back to you within 24h.</p>
                        <button type="button" class="btn-outline" @click="resetForm">Send another</button>
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

.contact-section {
    position: relative;
    z-index: 10;
    padding: 5rem 1.5rem;
    border-top: 1px solid #ffffff08;
}

.section-inner {
    max-width: 1100px;
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

/* ── grid ── */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 900px) {
    .contact-grid {
        grid-template-columns: 0.85fr 1.15fr;
        align-items: stretch;
    }
}

.info-card,
.form-card {
    position: relative;
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 20px;
    padding: 2rem;
    overflow: hidden;
    --mx: 50%;
    --my: 50%;
}

.info-spotlight {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: radial-gradient(280px circle at var(--mx) var(--my), rgba(59, 130, 246, .10), transparent 70%);
    opacity: 0;
    transition: opacity .3s;
    pointer-events: none;
}

.info-card:hover .info-spotlight,
.form-card:hover .info-spotlight {
    opacity: 1;
}

/* ── info card ── */
.status-pill {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 14px;
    border-radius: 999px;
    background: #22c55e14;
    border: 1px solid #22c55e30;
    color: #4ade80;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.status-dot {
    width: 7px;
    height: 7px;
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

.info-title {
    position: relative;
    z-index: 1;
    font-size: 1.4rem;
    font-weight: 800;
    color: #f4f4f5;
    margin-bottom: 10px;
}

.info-desc {
    position: relative;
    z-index: 1;
    font-size: 14px;
    color: #71717a;
    line-height: 1.7;
    margin-bottom: 2rem;
}

.info-links {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 1.75rem;
}

.info-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    background: #09090b;
    border: 1px solid #27272a;
    border-radius: 12px;
    text-decoration: none;
    cursor: pointer;
    font: inherit;
    color: inherit;
    text-align: left;
    transition: border-color .2s, transform .2s, background .2s;
}

.info-link:hover {
    border-color: #3b82f650;
    background: #131316;
    transform: translateX(4px);
}

.info-link-icon {
    flex-shrink: 0;
    width: 34px;
    height: 34px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #18181b;
    color: #3b82f6;
}

.info-link-text {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
}

.info-link-label {
    font-size: 11px;
    color: #52525b;
    text-transform: uppercase;
    letter-spacing: .04em;
}

.info-link-value {
    font-size: 13px;
    font-weight: 600;
    color: #d4d4d8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.info-link-action {
    margin-left: auto;
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #71717a;
    transition: color .2s;
}

.info-link-action.copied {
    color: #4ade80;
}

.info-note {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #52525b;
}

/* ── form card ── */
.contact-form {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.field {
    position: relative;
}

.field input,
.field textarea {
    width: 100%;
    background: #09090b;
    border: 1px solid #27272a;
    border-radius: 12px;
    padding: 18px 14px 8px;
    font-size: 14px;
    font-family: inherit;
    color: #f4f4f5;
    outline: none;
    resize: none;
    transition: border-color .2s;
}

.field textarea {
    padding-top: 20px;
    min-height: 120px;
}

.field input:focus,
.field textarea:focus {
    border-color: #3b82f6;
}

.field label {
    position: absolute;
    left: 14px;
    top: 16px;
    font-size: 14px;
    color: #71717a;
    pointer-events: none;
    transform-origin: left top;
    transition: transform .15s ease, color .15s ease, top .15s ease;
}

.field input:focus+label,
.field input:not(:placeholder-shown)+label,
.field textarea:focus+label,
.field textarea:not(:placeholder-shown)+label {
    top: 7px;
    transform: scale(.78);
    color: #3b82f6;
}

.submit-btn {
    display: inline-flex;
    align-self: flex-start;
    border: none;
    border-radius: 12px;
    background: #2563eb;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
}

.submit-btn:disabled {
    opacity: .7;
    cursor: default;
}

.submit-btn-inner {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 13px 26px;
}

.spinner {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid #ffffff50;
    border-top-color: #fff;
    animation: spin .7s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.form-status {
    font-size: 13px;
    margin: 0;
}

.form-status.error {
    color: #f87171;
}

.form-success {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 1rem 0;
}

.form-success-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #22c55e18;
    color: #4ade80;
    margin-bottom: 8px;
}

.form-success-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #f4f4f5;
    margin: 0;
}

.form-success-sub {
    font-size: 13px;
    color: #71717a;
    margin: 0 0 1rem;
    line-height: 1.6;
}

.btn-outline {
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    background: transparent;
    color: #a1a1aa;
    border: 1px solid #27272a;
    cursor: pointer;
    transition: border-color .2s, color .2s, transform .2s;
}

.btn-outline:hover {
    border-color: #3b82f6;
    color: white;
    transform: translateY(-2px);
}
</style>
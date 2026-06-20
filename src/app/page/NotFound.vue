<template>
    <div class="error-layout">
        <div class="error-content" ref="contentRef">
            <div class="icon-wrapper">
                <component :is="icon" class="error-icon" />
            </div>
            <h1 class="error-code">404</h1>
            <h2 class="error-title">Page Not Found</h2>
            <p class="error-message">Sorry, we couldn't find the page you're looking for.</p>
            <div class="actions">
                <button @click="goBack" class="btn btn-secondary">Go Back</button>
                <button @click="goHome" class="btn btn-primary">Back to Home</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { gsap } from 'gsap';
import { FileQuestion } from 'lucide-vue-next';

const router = useRouter();
const contentRef = ref(null);
const icon = computed(() => FileQuestion);

const goBack = () => router.back();
const goHome = () => router.push('/');

onMounted(() => {
    gsap.fromTo(contentRef.value.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
});
</script>

<style scoped>
.error-layout {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #09090b;
    color: #fafafa;
    padding: 2rem;
    font-family: system-ui, -apple-system, sans-serif;
}

.error-content {
    text-align: center;
    max-width: 28rem;
    width: 100%;
}

.icon-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.error-icon {
    width: 64px;
    height: 64px;
    color: #2563eb;
    stroke-width: 1.5;
}

.error-code {
    font-size: 6rem;
    font-weight: 800;
    line-height: 1;
    margin: 0;
    background: linear-gradient(to right, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.error-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem;
}

.error-message {
    color: #a1a1aa;
    margin-bottom: 2.5rem;
    line-height: 1.6;
}

.actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    font-size: 0.95rem;
}

.btn-primary {
    background-color: #2563eb;
    color: white;
}

.btn-primary:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
}

.btn-secondary {
    background-color: transparent;
    color: #fafafa;
    border: 1px solid #27272a;
}

.btn-secondary:hover {
    background-color: #27272a;
}

@media (max-width: 480px) {
    .actions {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }
}
</style>
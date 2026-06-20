import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

interface RevealOptions {
    /** px the element travels in on enter */
    y?: number
    duration?: number
    /** delay between each .reveal child */
    stagger?: number
    /** viewport line that triggers the animation, e.g. 'top 85%' */
    start?: string
    ease?: string
    /** css selector for children to animate (default '.reveal') */
    selector?: string
}

/**
 * Fades + slides up any `.reveal` children of rootRef when scrolled into
 * view, and reverses the animation when scrolled back up past the trigger
 * point — so it replays every time the section re-enters the viewport.
 *
 * Usage:
 *   const sectionRef = ref<HTMLElement | null>(null)
 *   useScrollReveal(sectionRef)
 *   <section ref="sectionRef"> <p class="reveal">...</p> </section>
 */
export function useScrollReveal(
    rootRef: { value: HTMLElement | null },
    options: RevealOptions = {},
) {
    const {
        y = 40,
        duration = 0.8,
        stagger = 0.12,
        start = 'top 85%',
        ease = 'power3.out',
        selector = '.reveal',
    } = options

    let ctx: gsap.Context | undefined

    onMounted(() => {
        if (!rootRef.value) return

        ctx = gsap.context(() => {
            const targets = gsap.utils.toArray<HTMLElement>(selector, rootRef.value!)
            if (!targets.length) return

            gsap.from(targets, {
                opacity: 0,
                y,
                duration,
                ease,
                stagger,
                scrollTrigger: {
                    trigger: rootRef.value,
                    start,
                    toggleActions: 'play none none reverse',
                },
            })
        }, rootRef.value)
    })

    onBeforeUnmount(() => ctx?.revert())
}
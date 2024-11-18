import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const vSectionHeadingAnimation = {
    mounted(el, binding) {
        const firstChild = el.querySelector(':first-child')
        const lastChild = el.querySelector(':last-child')

        const options = {
            duration: binding.value?.duration || 1,
            ease: binding.value?.ease || 'back.out(1.4)',
            scrollTrigger: {
                trigger: el,
                start: binding.value?.start || 'top 75%'
            }
        }

        gsap.from(firstChild, {
            ...options,
            x: binding.value?.xFrom || -100,
            opacity: 0
        })

        gsap.from(lastChild, {
            ...options,
            x: binding.value?.xTo || 100,
            opacity: 0
        })
    }
}

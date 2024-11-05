import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const vTextReveal = {
    mounted(el, binding) {
        gsap.from(el, {
            text: '',
            duration: binding.value?.duration || 1,
            delay: binding.value?.delay || 0,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%'
            }
        })
    }
}

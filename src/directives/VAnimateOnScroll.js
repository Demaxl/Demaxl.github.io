import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function isObject(variable) {
    if (typeof variable === 'object' && variable !== null && !Array.isArray(variable)) {
        return true
    }
    return false
}

export const vAnimateOnScroll = {
    mounted(el, binding) {
        gsap.from(el, {
            opacity: 0,
            delay: binding.value?.delay || 0,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%'
            },
            onStart() {
                el.classList.add(
                    'animate__animated',
                    isObject(binding.value) ? binding.value?.animation : binding.value
                )
            }
        })
    }
}

import { gsap } from 'gsap'

export const vHoverAnimation = {
    mounted(el, binding) {
        let tween

        const onHover = () => {
            tween = gsap.to(el, {
                scale: binding.value?.scale || 1.05,
                y: binding.value?.y || -5,
                duration: binding.value?.duration || 0.3,
                ease: binding.value?.ease || 'power2.out',
                boxShadow: binding.value?.boxShadow || '0 10px 20px rgba(0,0,0,0.1)'
            })
        }

        const onHoverOut = () => {
            tween.reverse()
        }

        el.addEventListener('mouseenter', onHover)
        el.addEventListener('mouseleave', onHoverOut)
    }
}

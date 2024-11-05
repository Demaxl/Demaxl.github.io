import { gsap } from 'gsap'

function isElementAnimating(element) {
    // Get all active tweens associated with the element
    const tweens = gsap.getTweensOf(element)
    // Check if any of the tweens are active
    return tweens.some((tween) => tween.isActive())
}

export { isElementAnimating }

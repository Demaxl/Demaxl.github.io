<template>
    <div class="w-100 container mx-auto mt-5">
        <h1 v-section-heading-animation class="section-heading">
            <span>My</span><span>Skills</span>
        </h1>
        <div
            class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-8 lg:mb-40 xl:grid-cols-5 xl:gap-10 2xl:grid-cols-6"
        >
            <SkillCard v-for="(skill, index) in skills" :key="index" v-bind="skill" />
        </div>
        <!-- Dummy tag so classes added in svg get applied -->
        <div class="fill-path-white hidden group-hover:fill-black"></div>
    </div>
</template>

<script setup>
import SkillCard from '@/components/SkillCard.vue'
import { gsap } from 'gsap'
import { onMounted, onUnmounted } from 'vue'

const skills = []

// Use import.meta.glob to load all SVGs from a directory
const svgModules = import.meta.glob('@/assets/icons/skills/*.svg', { eager: true })

// Iterate over the imported files and store their name and component that
// was rendered by vite-svg-loader
for (const path in svgModules) {
    skills.push({
        title: path.split('/').pop().replace('.svg', ''), // get the filename
        svgComponent: svgModules[path].default // the component
    })
}

// Custom order of skills
const order = [
    'Python',
    'Javascript',
    'Django',
    'Vue',
    'Nuxt',
    'Solidity',
    'Foundry',
    'Docker',
    'Kubernetes'
]

skills.sort((a, b) => {
    const indexA = order.indexOf(a.title)
    const indexB = order.indexOf(b.title)

    if (indexA === -1) return 1
    if (indexB === -1) return -1

    return indexA - indexB
})

let ctx
onMounted(() => {
    ctx = gsap.context(() => {
        gsap.from('.grid > div', {
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.grid',
                start: 'top 75%'
            }
        })
    })
})

onUnmounted(() => ctx.revert())
</script>

<template>
    <div class="container mt-5">
        <h1 class="mb-10 text-center text-[28px] leading-8 tracking-tight">
            <span>My</span><span class="ml-4 font-extrabold">Skills</span>
        </h1>
        <div class="mb-40 grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard v-for="(skill, index) in skills" :key="index" v-bind="skill" />
        </div>
        <!-- <DjangoSvg /> -->
    </div>
</template>

<script setup>
import SkillCard from '@/components/SkillCard.vue'
// import DjangoSvg from '@/assets/icons/Django.svg'

const skills = []

// Use import.meta.glob to load all SVGs from a directory
const svgModules = import.meta.glob('@/assets/icons/*.svg', { eager: true })

// Iterate over the imported files and store their name and component that
// was rendered by vite-svg-loader
for (const path in svgModules) {
    skills.push({
        title: path.split('/').pop().replace('.svg', ''), // get the filename
        svgComponent: svgModules[path].default // the component
    })
}
</script>

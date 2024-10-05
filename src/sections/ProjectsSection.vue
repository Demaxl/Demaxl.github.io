<template>
    <div class="dark-section py-10 lg:py-20">
        <h1 class="section-heading text-white"><span>My</span><span>Projects</span></h1>

        <div class="container grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-28 lg:py-6">
            <template v-for="(project, index) in projects" :key="index">
                <ProjectCard v-bind="project" :index="index + 1" />
            </template>
        </div>
    </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'

const projects = [
    {
        title: 'Crypto Screener Application',
        description: `I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to specimen book.`,
        imagePath: '/images/projects/project1.jpeg',
        projectLink: 'https://www.example.com'
    },
    {
        title: 'Euphoria - Ecommerce (Apparels) Website Template',
        description: `I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to specimen book.`,
        imagePath: '/images/projects/project2.jpeg',
        projectLink: 'https://www.example.com'
    },
    {
        title: 'Blog Website Template',
        description: `I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to specimen book.`,
        imagePath: '/images/projects/project3.jpeg',
        projectLink: 'https://www.example.com'
    }
]
</script>

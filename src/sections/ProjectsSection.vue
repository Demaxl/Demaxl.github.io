<template>
    <div class="dark-section overflow-hidden py-10 lg:py-20">
        <h1 v-section-heading-animation class="section-heading text-white">
            <span>My</span><span>Projects</span>
        </h1>

        <div class="container mx-auto grid grid-cols-1 gap-7 lg:gap-28 lg:py-6">
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
        title: 'Foralink - Marketplace for software development agencies',
        description: `I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to specimen book.`,
        imagePath: '/images/projects/foralink.png',
        projectLink: 'https://www.foralink.io/'
    },
    {
        title: 'BringoExpress - Shipment Tracking Web Application System',
        description: `I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to specimen book.`,
        imagePath: '/images/projects/bringo.png',
        projectLink: 'https://www.bringoexpress.com/'
    },
    {
        title: 'College Soccer Pathway - College Soccer Recruitment App',
        description: `I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to specimen book.`,
        imagePath: '/images/projects/csp.webp',
        projectLink: 'https://www.collegesoccerpathway.com/'
    }
]
</script>

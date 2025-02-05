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
    // {
    //     title: 'Foralink - Marketplace for software development agencies',
    //     description: `  Foralink is an innovative online marketplace designed to connect businesses with top software development agencies. This platform allows businesses to post their projects, while pre-vetted agencies can apply, ensuring a seamless outsourcing process. With a focus on quality and efficiency, Foralink bridges the gap between companies seeking expertise and agencies delivering exceptional results.`,
    //     imagePath: '/images/projects/foralink.png',
    //     projectLink: 'https://www.foralink.io/'
    // },
    {
        title: 'BringoExpress - Shipment Tracking Web Application System',
        description: `I developed a custom web application for BringoExpress, a logistics and shipment company, to optimize its operations. The application enables seamless tracking of shipments, manages payments and inventory, automates SMS alerts, and facilitates invoice generation. This solution was tailored to meet the company’s needs, ensuring efficiency and a better customer experience.`,
        imagePath: '/images/projects/bringo.png',
        projectLink: 'https://www.bringoexpress.com/'
    }
    // {
    //     title: 'College Soccer Pathway - College Soccer Recruitment App',
    //     description: `I developed the backend API for the College Soccer Pathway mobile application, a platform that empowers high school and elite soccer players to proactively manage their college recruitment journey.
    //         The API supports features such as searching and filtering collegiate soccer programs nationwide, providing comprehensive information on coaches' contact details, team performance records, player rosters, and academic data. This robust backend ensures seamless data management and user interactions, facilitating athletes in making informed decisions and connecting directly with their desired college programs.`,
    //     imagePath: '/images/projects/csp.webp',
    //     projectLink: 'https://www.collegesoccerpathway.com/'
    // }
]
</script>

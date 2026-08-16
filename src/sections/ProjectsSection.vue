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
        title: 'Incognito - Anonymous Messaging Platform',
        description: `
        I built Incognito, a full-stack anonymous messaging platform that allows users to receive text, image, video, and voice messages without revealing the sender’s identity.
        <br>
        Built with Nuxt, Django, PostgreSQL, and Cloudflare R2, with the frontend deployed on Vercel and backend on Render. I developed the platform end-to-end, including authentication, messaging, media uploads, APIs, and deployment.
        <br>
        Incognito is designed for privacy and simplicity, enabling open communication without compromising user identity.`,
        imagePath: '/images/projects/incognito/image1.png',
        projectLink: 'https://www.incgto.xyz'
    },
    {
        title: 'BringoExpress - Shipment Tracking Web Application System',
        description: `I developed a custom web application for BringoExpress, a logistics and shipment company, to optimize its operations. The application enables seamless tracking of shipments, manages payments and inventory, automates SMS alerts, and facilitates invoice generation. This solution was tailored to meet the company’s needs, ensuring efficiency and a better customer experience.`,
        imagePath: '/images/projects/bringo.png',
        projectLink: 'https://www.bringoexpress.com/'
    },
    {
        title: 'Path Finding Algorithm Visualizer',
        description: `I developed an application showcasing various search algorithms' 
            operations in finding optimal maze navigation paths, aimed at assisting novices 
            in understanding these algorithmic concepts through interactive visualization`,
        imagePath: '/images/projects/path_finder.gif',
        projectLink: 'https://github.com/Demaxl/Path-Finding-Visualiser'
    },
    {
        title: 'Aegis - Decentralized Onchain Escrow System ',
        description: `I built Aegis, a decentralized onchain escrow system that allows users to create, fund, and manage escrow agreements directly through their crypto wallets.
        The platform combines smart contracts with a modern web interface, enabling trustless transactions without relying on a traditional intermediary. I built the application end-to-end, including the escrow workflow, wallet integration, and frontend.`,
        imagePath: '/images/projects/aegis.png',
        projectLink: 'https://aegis-escrow.vercel.app/'
    }
]
</script>

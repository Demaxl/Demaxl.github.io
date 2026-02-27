<template>
    <div class="dark-section overflow-hidden py-10 lg:py-20">
        <h1 v-section-heading-animation class="section-heading text-white">
            <span>My</span> <span>Experience</span>
        </h1>
        <div class="mb-5 space-y-5 lg:space-y-8">
            <ExperienceCard
                v-for="(experience, index) in experiences"
                :key="index"
                v-bind="experience"
                :index="index"
            />
        </div>
    </div>
</template>

<script setup>
import ExperienceCard from '@/components/ExperienceCard.vue'

const experiences = [
    {
        title: 'Freelance Software Engineer',
        date: 'August 2021 - Present',
        company: 'Freelance',
        description: `As a Freelance Software Engineer. I provide custom software development and automation
            services to clients worldwide. Specialized in Python, Javascript, Django, and Vue.js,
            delivering solutions such as web scraping tools, dynamic web applications, and process
            automation workflows. Successfully completed 50+ projects, helping clients optimize
            their workflows and achieve measurable results. Known for delivering projects on time
            while maintaining high-quality standards resulting in a five-star rating on
            <a class="hover:text-white" href="https://www.freelancer.com/u/demaxl" target="_blank">
                Freelancer.com
            </a>`,
        link: 'https://www.freelancer.com/u/demaxl'
    }
]
</script>

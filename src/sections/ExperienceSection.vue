<template>
    <div class="dark-section overflow-hidden py-10 lg:py-20">
        <h1 v-section-heading-animation class="section-heading text-white">
            <span>My</span> <span>Experience</span>
        </h1>
        <div class="mb-5">
            <div
                v-aos="'animate__fadeInUp'"
                class="experience-card rounded-[10px] border border-zinc-500 px-6 py-[30px] transition-colors duration-300 hover:border-zinc-800 hover:bg-zinc-800"
            >
                <div
                    class="mb-7 flex flex-col space-y-[30px] md:flex-row md:items-center md:justify-between md:space-y-0"
                >
                    <div class="flex space-x-[30px]">
                        <a href="https://www.freelancer.com/u/demaxl" target="_blank">
                            <FreelancerIcon
                                data-tooltip-target="exp-tooltip-freelancer"
                                class="h-8 w-8 fill-[#28ACF6] transition-colors hover:fill-white"
                            />
                            <VToolTip
                                id="exp-tooltip-freelancer"
                                content="View freelancer profile"
                                class="bg-white !text-black"
                            />
                        </a>
                        <h2
                            ref="experience-title"
                            v-text-reveal="{ delay: 0.8 }"
                            class="text-xl font-semibold leading-6 tracking-tight text-white lg:text-2xl lg:leading-7"
                        >
                            Freelance Software Engineer
                        </h2>
                    </div>
                    <span class="text-base font-semibold leading-5 tracking-tight text-zinc-300"
                        >August 2021 - Present</span
                    >
                </div>
                <div
                    v-aos="{ delay: 1.3, animation: 'animate__fadeIn' }"
                    class="text-base tracking-wide text-zinc-300"
                >
                    As a Freelance Software Engineer. I provide custom software development and
                    automation services to clients worldwide. Specialized in Python, Javascript,
                    Django, and Vue.js, delivering solutions such as web scraping tools, dynamic web
                    applications, and process automation workflows. Successfully completed 50+
                    projects, helping clients optimize their workflows and achieve measurable
                    results. Known for delivering projects on time while maintaining high-quality
                    standards resulting in a five-star rating on
                    <a
                        class="hover:text-white"
                        href="https://www.freelancer.com/u/demaxl"
                        target="_blank"
                    >
                        Freelancer.com
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import FreelancerIcon from '@/components/icons/FreelancerIcon.vue'
import VToolTip from '@/components/VToolTip.vue'
</script>

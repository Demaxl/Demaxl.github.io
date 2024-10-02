<template>
    <div class="dark-section py-10 lg:py-20">
        <h1 class="section-heading text-white"><span>My</span> <span>Experience</span></h1>
        <div class="mb-5">
            <div
                class="rounded-[10px] border border-zinc-500 px-6 py-[30px] transition-colors hover:border-zinc-800 hover:bg-zinc-800"
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
                            class="text-xl font-semibold leading-6 tracking-tight text-white lg:text-2xl lg:leading-7"
                        >
                            Freelance Software Engineer
                        </h2>
                    </div>
                    <span class="text-base font-semibold leading-5 tracking-tight text-zinc-300"
                        >August 2021 - Present</span
                    >
                </div>
                <div class="text-base tracking-wide text-zinc-300">
                    As a Senior Software Engineer at Google, I played a pivotal role in developing
                    innovative solutions for Google's core search algorithms. Collaborating with a
                    dynamic team of engineers, I contributed to the enhancement of search accuracy
                    and efficiency, optimizing user experiences for millions of users worldwide.
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import FreelancerIcon from '@/components/icons/FreelancerIcon.vue'
import VToolTip from '@/components/VToolTip.vue'
</script>

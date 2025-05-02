<template>
    <div
        v-aos="'animate__fadeInUp'"
        class="experience-card rounded-[10px] border border-zinc-500 px-6 py-[30px] transition-colors duration-300 hover:border-zinc-800 hover:bg-zinc-800"
        :class="index % 2 === 0 ? 'border-zinc-800 bg-zinc-800' : ''"
    >
        <div
            class="mb-7 flex flex-col space-y-[30px] md:flex-row md:items-center md:justify-between md:space-y-0"
        >
            <div class="flex space-x-[30px]">
                <a :href="link" target="_blank">
                    <FreelancerIcon
                        v-if="company === 'Freelance'"
                        data-tooltip-target="exp-tooltip-freelance"
                        class="h-8 w-8 fill-[#28ACF6] transition-colors hover:fill-white"
                    />
                    <VastuileIcon
                        v-if="company === 'Vastuile'"
                        data-tooltip-target="exp-tooltip-vastuile"
                        class="h-8 w-8 transition-colors hover:fill-white"
                    />
                    <VToolTip
                        :id="`exp-tooltip-${company.toLowerCase()}`"
                        :content="`View ${company} profile`"
                        class="bg-white !text-black"
                    />
                </a>
                <h2
                    ref="experience-title"
                    v-text-reveal="{ delay: 0.8 }"
                    class="text-xl font-semibold leading-6 tracking-tight text-white lg:text-2xl lg:leading-7"
                >
                    {{ title }}
                </h2>
            </div>
            <span class="text-base font-semibold leading-5 tracking-tight text-zinc-300">{{
                date
            }}</span>
        </div>
        <div
            v-aos="{ delay: 1.3, animation: 'animate__fadeIn' }"
            class="text-base tracking-wide text-zinc-300"
            v-html="description"
        />
    </div>
</template>

<script setup>
import FreelancerIcon from '@/components/icons/FreelancerIcon.vue'
import VToolTip from '@/components/VToolTip.vue'
import VastuileIcon from '@/components/icons/VastuileIcon.vue'

defineProps({
    index: Number,
    title: String,
    date: String,
    company: String,
    description: String,
    link: {
        type: String,
        default: '#'
    }
})
</script>

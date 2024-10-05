<template>
    <div class="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-28 xl:items-center">
        <img
            :class="{ 'lg:order-last': index % 2 === 0 }"
            class="rounded-[19px] shadow-[0px_8px_18px_-6px_rgba(24,39,75,0.12),0px_12px_42px_-4px_rgba(24,39,75,0.12)]"
            :src="imagePath"
            :alt="`${title} project image`"
        />
        <div class="flex flex-col space-y-7 tracking-tight text-white">
            <h3 class="text-2xl font-extrabold leading-7 lg:text-5xl lg:leading-[56px]">
                {{ index.toString().padStart(2, '0') }}
            </h3>
            <h2 class="text-xl font-bold leading-6 lg:text-[32px] lg:leading-10">
                {{ title }}
            </h2>
            <p class="font-normal tracking-wide text-zinc-400">
                {{ description }}
            </p>
            <a :href="projectLink" target="_blank">
                <ExportSVG
                    class="h-5 w-5 cursor-pointer stroke-white stroke-2 transition-colors hover:stroke-neutral"
                />
            </a>
        </div>
    </div>
</template>

<script setup>
import ExportSVG from '@/assets/icons/export.svg'

const { index } = defineProps({
    index: Number,
    title: String,
    description: String,
    imagePath: String,
    projectLink: String
})
console.log(index)
</script>

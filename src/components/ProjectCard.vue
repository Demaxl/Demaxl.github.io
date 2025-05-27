<template>
    <div class="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-28 xl:items-center">
        <div
            class="relative mx-auto flex w-full max-w-2xl justify-center overflow-hidden lg:block lg:justify-normal"
            :class="{ 'lg:order-last': alternate }"
            :ref="`projectImageContainer${index}`"
        >
            <img
                v-hover-animation
                class="mx-auto block rounded-[19px] shadow-[0px_8px_18px_-6px_rgba(24,39,75,0.12),0px_12px_42px_-4px_rgba(24,39,75,0.12)]"
                :src="
                    'https://cdn.statically.io/gh/Demaxl/Demaxl.github.io/main/public' + imagePath
                "
                :alt="`${title} project image`"
                :ref="`projectImage${index}`"
            />
            <div
                :class="{ 'origin-top': alternate }"
                class="absolute inset-0 bg-black"
                :ref="`mask${index}`"
            ></div>
        </div>
        <div
            :ref="`textContainer${index}`"
            class="flex flex-col space-y-7 tracking-tight text-white"
        >
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
import gsap from 'gsap'
import { onMounted, useTemplateRef, computed } from 'vue'

const { index } = defineProps({
    index: Number,
    title: String,
    description: String,
    imagePath: String,
    projectLink: String
})

const alternate = computed(() => index % 2 === 0)

const image = useTemplateRef(`projectImage${index}`)
const container = useTemplateRef(`projectImageContainer${index}`)
const textContainer = useTemplateRef(`textContainer${index}`)
const mask = useTemplateRef(`mask${index}`)

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.value,
            start: 'top 90%'
            // toggleActions: 'play none play reset'
        }
    })

    if (alternate.value) {
        tl.set(mask.value, {
            height: '100%',
            top: 0,
            bottom: 'auto'
        }).to(mask.value, {
            height: '0%',
            duration: 1,
            ease: 'sine.out'
        })
    } else {
        tl.set(mask.value, {
            width: '100%',
            right: 0,
            left: 'auto'
        }).to(mask.value, {
            width: '0%',
            duration: 1,
            ease: 'sine.out'
        })
    }
    tl.from(
        image.value,
        {
            scale: 1.2,
            duration: 1.5,
            ease: 'power2.out'
        },
        0
    )

    tl.from(
        textContainer.value.children,
        {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        },
        '-=75%'
    )
})
</script>

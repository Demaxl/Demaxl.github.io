<template>
    <div class="flex justify-center">
        <div
            class="flex flex-col space-y-12 space-y-reverse md:flex-row md:items-center md:justify-center md:px-4"
        >
            <div class="order-last flex flex-col space-y-8 md:order-first md:my-14">
                <div
                    class="flex flex-col space-y-3 text-[28px] font-extrabold leading-8 tracking-tight lg:text-5xl lg:leading-[56px]"
                >
                    <div class="space-x-3">
                        <span class="font-normal">Hello I am</span>
                        <span>Aweroro A. Ayomide</span>
                    </div>
                    <div class="space-x-3">
                        <span class="first-title"></span>
                        <span class="text-outline second-title"></span>
                    </div>
                    <div class="space-x-3">
                        <span class="font-normal">Based In</span>
                        <span>Nigeria.</span>
                    </div>
                </div>
                <div class="inline-block text-base tracking-wide text-zinc-500">
                    I'm Aweroro Ayomide Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to specimen book.
                </div>
                <div class="self-start pb-10">
                    <SocialsLink section="hero" />
                </div>
            </div>

            <PersonIcon
                class="mx-auto max-h-[330px] max-w-xl md:h-auto md:max-h-none md:min-w-[330px] md:grow md:self-center lg:min-w-[450px] 2xl:self-start"
            />
        </div>
    </div>
</template>
<script setup>
import PersonIcon from '@/components/icons/PersonIcon.vue'

import SocialsLink from '@/components/SocialsLink.vue'
import { gsap } from 'gsap'
import { onMounted, onUnmounted } from 'vue'

let ctx
const titles = ['Software Engineer', 'Fullstack Developer', 'Freelancer Developer']

onMounted(() => {
    ctx = gsap.context(() => {
        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: 'none', duration: 1 }
        })
        titles.forEach((title, index) => {
            tl.to('.first-title', {
                text: title.split(' ')[0]
            })
            tl.to(
                '.second-title',
                {
                    text: title.split(' ')[1]
                },
                '-=0.1'
            )

            // if (index === titles.length - 1) return
            tl.to(
                '.second-title',
                {
                    text: {
                        value: '',
                        rtl: true
                    }
                },
                '+=2'
            )
            tl.to('.first-title', {
                text: {
                    value: '',
                    rtl: true
                }
            })
        })
    })
})

onUnmounted(() => {
    ctx.revert()
})
</script>

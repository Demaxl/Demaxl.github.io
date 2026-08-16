<template>
    <div class="flex justify-center">
        <div class="flex flex-col space-y-12 space-y-reverse md:flex-row md:items-center md:justify-center md:px-4">
            <div ref="textContainer"
                class="order-last flex basis-[55%] flex-col space-y-8 md:order-first md:my-14 lg:min-w-[470px]">
                <div
                    class="flex flex-col space-y-3 text-[28px] font-extrabold leading-8 tracking-tight lg:text-5xl lg:leading-[56px]">
                    <div class="space-x-3">
                        <span class="font-normal">Hello I am</span>
                        <span>Aweroro A. Ayomide</span>
                    </div>
                    <div class="inline-block max-w-[300px] space-x-3 text-nowrap lg:max-w-[2000px]">
                        <span class="first-title"></span>
                        <span class="text-outline second-title"></span>
                    </div>
                    <div class="space-x-3">
                        <span class="font-normal">Based In</span>
                        <span>Nigeria.</span>
                    </div>
                </div>
                <div class="inline-block text-base tracking-wide text-zinc-500">
                    Hi, I'm Aweroro Ayomide Abdullahi.
                    <br>
                    I'm a software engineer from Lagos, Nigeria, specializing in <strong>Software Development,
                        Automation, Smart
                        Contract Development/Security and Web Scraping</strong>. I build reliable web applications,
                    APIs
                    and automation systems that solve problems for businesses and individuals.
                    <br>
                    I'm currently focused on building great products, taking on freelance projects, and exploring
                    opportunities to work with teams remotely.
                </div>
                <div class="self-start pb-10">
                    <SocialsLink section="hero" />
                </div>
            </div>

            <PersonIcon
                class="mx-auto max-h-[330px] max-w-xl md:h-auto md:max-h-none md:min-w-[330px] md:grow md:self-center lg:min-w-[450px] 2xl:self-start" />
        </div>
    </div>
</template>
<script setup>
import PersonIcon from '@/components/icons/PersonIcon.vue'

import SocialsLink from '@/components/SocialsLink.vue'
import { gsap } from 'gsap'
import { onMounted, onUnmounted, useTemplateRef } from 'vue'

const textContainer = useTemplateRef('textContainer')

let ctx
const titles = [
    'Software Engineer',
    'Fullstack Developer',
    'Freelance Developer'
    //'First-class Student'
]

onMounted(() => {
    ctx = gsap.context(() => {
        // Title
        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: 'none', duration: 1 }
        })
        titles.forEach((title) => {
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

        // Text
        gsap.from(textContainer.value.children, {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        })
    })
})

onUnmounted(() => {
    ctx.revert()
})
</script>

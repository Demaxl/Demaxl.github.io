<template>
    <div class="py-16">
        <h1 v-section-heading-animation class="section-heading">
            <span>Contact</span><span>Me</span>
        </h1>
        <div class="flex flex-col space-y-11 lg:flex-row lg:justify-center lg:space-x-24">
            <form ref="contact-form" class="flex basis-1/2 flex-col space-y-5" action="#">
                <input
                    class="rounded-[4px] border-[1.4px] border-black px-6 py-4 leading-5 tracking-tight transition-colors placeholder:text-zinc-500 hover:bg-zinc-100 focus:border-black focus:shadow-md focus:shadow-gray-400/10 focus:ring-black"
                    type="text"
                    placeholder="Your name"
                />
                <input
                    class="rounded-[4px] border-[1.4px] border-black px-6 py-4 leading-5 tracking-tight transition-colors placeholder:text-zinc-500 hover:bg-zinc-100 focus:border-black focus:shadow-md focus:shadow-gray-400/10 focus:ring-black"
                    type="text"
                    placeholder="Email"
                />
                <input
                    class="rounded-[4px] border-[1.4px] border-black px-6 py-4 leading-5 tracking-tight transition-colors placeholder:text-zinc-500 hover:bg-zinc-100 focus:border-black focus:shadow-md focus:shadow-gray-400/10 focus:ring-black"
                    type="text"
                    placeholder="Your company (optional)"
                />
                <textarea
                    class="h-36 rounded-[4px] border-[1.4px] border-black px-6 py-4 leading-5 tracking-tight transition-colors placeholder:text-zinc-500 hover:bg-zinc-100 focus:border-black focus:shadow-md focus:shadow-gray-400/10 focus:ring-black"
                    type="text"
                    placeholder="How can I help?"
                ></textarea>
                <div
                    class="flex flex-col space-y-5 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0"
                >
                    <input
                        class="inline-block h-12 w-min cursor-pointer rounded bg-black px-4 py-3 font-semibold leading-5 tracking-wide text-white transition-colors hover:bg-neutral focus:border-2 focus:border-black focus:bg-white focus:text-black focus:outline-none lg:h-14 lg:text-xl lg:leading-6"
                        type="submit"
                        value="Get In Touch"
                    />
                    <SocialsLink section="contact" />
                </div>
            </form>
            <div class="flex flex-col space-y-8" ref="text-contact-container">
                <div
                    class="flex flex-col space-y-3 text-[28px] font-extrabold leading-8 tracking-tight lg:text-5xl lg:leading-[56px]"
                >
                    <div>
                        Lets <span ref="contact-outline-text" class="text-outline">talk</span> for
                    </div>
                    <div>Something special</div>
                </div>
                <p class="tracking-wide text-zinc-500 lg:!mt-5 lg:leading-6">
                    I seek to push the limits of creativity to create high-engaging, user-friendly,
                    and memorable interactive experiences.
                </p>
                <div
                    class="flex flex-col space-y-3 text-xl font-bold leading-6 tracking-tight lg:text-[28px] lg:leading-8"
                >
                    <div>aweabdullahi@gmail.com</div>
                    <div>+2347032286388</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import SocialsLink from '@/components/SocialsLink.vue'

import gsap from 'gsap'
import { onMounted, useTemplateRef } from 'vue'

const contactForm = useTemplateRef('contact-form')
const textContactContainer = useTemplateRef('text-contact-container')
const contactOutlineText = useTemplateRef('contact-outline-text')

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: contactForm.value,
            start: 'top 80%',
            toggleActions: 'play none play reset'
        }
    })

    tl.from(contactForm.value.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.1
    })
    tl.from(
        textContactContainer.value.children,
        {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'back.out(1.7)',
            stagger: 0.1
        },
        0
    )
})
</script>

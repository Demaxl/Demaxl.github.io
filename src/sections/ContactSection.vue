<template>
    <div class="py-16">
        <h1 v-section-heading-animation class="section-heading">
            <span>Contact</span><span>Me</span>
        </h1>
        <div class="flex flex-col space-y-11 lg:flex-row lg:justify-center lg:space-x-24">
            <form
                @submit.prevent="sendEmail"
                ref="contact-form"
                class="flex basis-1/2 flex-col space-y-5"
            >
                <input
                    class="rounded-[4px] border-[1.4px] border-black px-6 py-4 leading-5 tracking-tight transition-colors placeholder:text-zinc-500 hover:bg-zinc-100 focus:border-black focus:shadow-md focus:shadow-gray-400/10 focus:ring-black"
                    type="text"
                    v-model="name"
                    placeholder="Your name"
                    required
                />
                <input
                    class="rounded-[4px] border-[1.4px] border-black px-6 py-4 leading-5 tracking-tight transition-colors placeholder:text-zinc-500 hover:bg-zinc-100 focus:border-black focus:shadow-md focus:shadow-gray-400/10 focus:ring-black"
                    type="text"
                    v-model="email"
                    placeholder="Email"
                    required
                />
                <input
                    class="rounded-[4px] border-[1.4px] border-black px-6 py-4 leading-5 tracking-tight transition-colors placeholder:text-zinc-500 hover:bg-zinc-100 focus:border-black focus:shadow-md focus:shadow-gray-400/10 focus:ring-black"
                    type="text"
                    v-model="company"
                    placeholder="Your company (optional)"
                />
                <textarea
                    class="h-36 rounded-[4px] border-[1.4px] border-black px-6 py-4 leading-5 tracking-tight transition-colors placeholder:text-zinc-500 hover:bg-zinc-100 focus:border-black focus:shadow-md focus:shadow-gray-400/10 focus:ring-black"
                    type="text"
                    v-model="message"
                    placeholder="How can I help?"
                    required
                ></textarea>
                <div
                    v-show="submitted"
                    class="mt-3 text-base leading-5 tracking-tight text-green-500"
                >
                    Message received! I will respond as soon as possible
                </div>
                <div
                    class="flex flex-col space-y-5 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0"
                >
                    <input
                        class="inline-block h-12 w-min cursor-pointer rounded bg-black px-4 py-3 font-semibold leading-5 tracking-wide text-white transition-colors hover:bg-neutral focus:border-2 focus:border-black focus:bg-white focus:text-black focus:outline-none disabled:cursor-not-allowed disabled:bg-zinc-300 lg:h-14 lg:text-xl lg:leading-6"
                        type="submit"
                        :disabled="submitting"
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
                    Got an idea or project in mind? Let’s bring it to life together! I specialize in
                    creating innovative solutions tailored to your needs. Whether it's a website,
                    automation tools, or cutting-edge software, I'm here to help. Feel free to reach
                    out—I’d love to discuss how we can work together!
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
import { ref, onMounted, useTemplateRef } from 'vue'

const name = ref(null)
const email = ref(null)
const company = ref(null)
const message = ref(null)

const submitting = ref(false)
const submitted = ref(false)

const contactForm = useTemplateRef('contact-form')
const textContactContainer = useTemplateRef('text-contact-container')

async function sendEmail() {
    submitting.value = true
    await fetch('https://formsubmit.co/ajax/aweabdullahi@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            company: company.value,
            message: message.value
        })
    })
    name.value = null
    email.value = null
    company.value = null
    message.value = null

    submitting.value = false
    submitted.value = true
}

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: contactForm.value,
            start: 'top 75%'
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
            stagger: {
                each: 0.1
            }
        },
        '-=0.5'
    )
})
</script>

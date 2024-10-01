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
                        <span>Aweroro Ayomide.</span>
                    </div>
                    <div class="space-x-3">
                        <span>Software</span>
                        <span class="text-outline">Engineer</span>
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
                    <div class="flex space-x-[24px]">
                        <!-- Freelancer -->
                        <a
                            target="_blank"
                            href="https://www.freelancer.com/u/Demaxl"
                            data-tooltip-target="tooltip-freelancer"
                            class="group h-12 w-12 cursor-pointer rounded border-2 border-black p-3 transition-colors hover:bg-black"
                        >
                            <FreelancerIcon class="h-5 w-5 fill-black group-hover:fill-white" />
                            <VToolTip content="View freelancer profile" id="tooltip-freelancer" />
                        </a>

                        <!-- Linkedin -->
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/demaxl"
                            class="group h-12 w-12 cursor-pointer rounded border-2 border-black p-3 transition-colors hover:bg-black"
                        >
                            <LinkedinIcon class="h-5 w-5 fill-black group-hover:fill-white" />
                        </a>

                        <!-- Github -->
                        <a
                            target="_blank"
                            href="https://www.github.com/demaxl"
                            class="group h-12 w-12 cursor-pointer rounded border-2 border-black p-3 transition-colors hover:bg-black"
                        >
                            <GithubIcon class="h-5 w-5 fill-black group-hover:fill-white" />
                        </a>

                        <!-- Whatsapp -->
                        <a
                            target="_blank"
                            href="https://wa.me/2347032286388"
                            class="group h-12 w-12 cursor-pointer rounded border-2 border-black p-3 transition-colors hover:bg-black"
                        >
                            <WhatsappIcon class="h-5 w-5 fill-black group-hover:fill-white" />
                        </a>
                    </div>
                </div>
            </div>

            <PersonIcon
                class="mx-auto h-52 max-w-xl md:h-auto md:min-w-[330px] md:grow md:self-center lg:min-w-[450px] 2xl:self-start"
            />
        </div>
    </div>
</template>
<script setup>
import PersonIcon from '@/components/icons/PersonIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import FreelancerIcon from '@/components/icons/FreelancerIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import WhatsappIcon from '@/components/icons/WhatsappIcon.vue'

import VToolTip from '@/components/VToolTip.vue'
</script>

<template>
    <nav
        class="animate__animated animate__fadeInDown text-xl font-semibold leading-5 tracking-tight"
    >
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <!-- Logo -->
            <a
                href="https://demaxl.github.io"
                class="flex items-center space-x-3 rtl:space-x-reverse"
            >
                <div class="flex items-center space-x-2">
                    <LogoIcon class="h-[35px] w-[119px] xl:h-[45px] xl:w-[153px]" />

                    <!-- <span class="font-bold">Demaxl</span> -->
                </div>
            </a>
            <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                <!-- Resume button -->
                <a
                    href="https://docs.google.com/document/d/1r6iJHPouGFtSZhUN6WbIu3MhmCmYtyzbxkJHOTt_Tzs/export?format=pdf"
                    data-tooltip-target="tooltip-resume-btn"
                    data-tooltip-placement="bottom"
                    role="button"
                    class="group hidden rounded-lg bg-black p-3 text-white transition-colors hover:bg-neutral focus:border-2 focus:border-black focus:bg-white focus:text-black focus:outline-none md:flex lg:px-5 lg:py-4"
                    download="demaxil-Resume"
                >
                    <span class="hidden lg:inline-block">Resume</span>
                    <svg
                        class="stroke-white group-focus:stroke-black lg:ml-2"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
                <div
                    id="tooltip-bottom"
                    role="tooltip"
                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-black px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                >
                    Download resume
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <VToolTip content="Download resume" id="tooltip-resume-btn" />
                <!-- Dropdown button -->
                <button
                    @click="toggleDropdown"
                    type="button"
                    class="inline-flex items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                    aria-controls="navbar-cta"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>

                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="36" height="36" fill="white" />
                        <path
                            d="M4.5 27V24H31.5V27H4.5ZM4.5 19.5V16.5H31.5V19.5H4.5ZM4.5 12V9H31.5V12H4.5Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </div>
            <!-- Section menu -->
            <div
                :class="[!showDropdown ? 'h-0' : '']"
                class="w-full items-center justify-between overflow-hidden md:order-1 md:flex md:h-fit md:w-auto"
                id="navbar-cta"
            >
                <ul
                    class="mt-4 flex flex-col transition-colors md:mt-0 md:flex-row md:space-x-2 md:border-0 md:p-0 lg:space-x-8 rtl:space-x-reverse"
                >
                    <li>
                        <a
                            href="#about"
                            class="block rounded px-3 py-4 pl-5 text-gray-900 hover:text-neutral hover:underline md:px-3 md:py-2"
                            >About Me</a
                        >
                    </li>
                    <li>
                        <a
                            href="#skills"
                            class="block rounded px-3 py-4 pl-5 text-gray-900 hover:text-neutral hover:underline md:px-3 md:py-2"
                            >Skills</a
                        >
                    </li>
                    <!-- <li>
                            <a
                                href="#experience"
                                class="block rounded px-3 py-4 pl-5 text-gray-900 hover:text-neutral hover:underline md:px-3 md:py-2"
                                >Experience</a
                            >
                        </li> -->
                    <li>
                        <a
                            href="#projects"
                            class="block rounded px-3 py-4 pl-5 text-gray-900 hover:text-neutral hover:underline md:px-3 md:py-2"
                            >Projects</a
                        >
                    </li>
                    <li>
                        <a
                            href="#contact"
                            class="block rounded px-3 py-4 pl-5 text-gray-900 hover:text-neutral hover:underline md:px-3 md:py-2"
                            >Contact Me</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://docs.google.com/document/d/1r6iJHPouGFtSZhUN6WbIu3MhmCmYtyzbxkJHOTt_Tzs/export?format=pdf"
                            download="demaxil-Resume"
                            data-tooltip-target="tooltip-bottom"
                            data-tooltip-placement="bottom"
                            role="button"
                            class="group block w-full rounded-lg bg-black p-3 pl-5 text-center text-white transition-colors hover:bg-neutral focus:border-2 focus:border-black focus:bg-white focus:text-black focus:outline-none md:hidden"
                        >
                            <span class="inline-block lg:hidden">Resume</span>
                            <svg
                                class="ml-2 inline-block stroke-white group-focus:stroke-black"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import VToolTip from '@/components/VToolTip.vue'
import LogoIcon from './icons/LogoIcon.vue'

import { gsap } from 'gsap'
import Flip from 'gsap/Flip'
import { nextTick, ref } from 'vue'

gsap.registerPlugin(Flip)

const showDropdown = ref(false)

async function toggleDropdown() {
    const state = Flip.getState('#navbar-cta', {
        props: 'height'
    })
    showDropdown.value = !showDropdown.value
    await nextTick()

    Flip.from(state, {
        fade: true,
        duration: 0.5,
        ease: 'power1.inOut'
    })
}
</script>

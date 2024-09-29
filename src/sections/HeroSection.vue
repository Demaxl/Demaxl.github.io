<template>
    <div class="flex justify-center">
        <div
            class="flex flex-col space-y-12 space-y-reverse md:flex-row md:items-center md:justify-center md:px-4"
        >
            <div class="order-last flex flex-col space-y-8 md:order-first md:my-14 lg:my-28">
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
                <div class="text-zinc-500 inline-block text-base tracking-wide">
                    I'm Aweroro Ayomide Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to specimen book.
                </div>
                <div class="self-start pb-10">
                    <div class="flex space-x-[24px]">
                        <div class="h-12 w-12 rounded border-2 border-black bg-black p-3">
                            <FacebookIcon class="h-5 w-5" />
                        </div>
                        <div class="h-12 w-12 rounded border-2 border-black p-3">
                            <LinkedinIcon class="h-5 w-5" />
                        </div>
                    </div>
                </div>
            </div>

            <PersonIcon
                class="mx-auto h-52 max-w-xl md:h-auto md:min-w-[330px] md:grow md:self-center 2xl:self-start"
            />
        </div>
    </div>
</template>
<script setup>
import PersonIcon from '@/components/icons/PersonIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
</script>

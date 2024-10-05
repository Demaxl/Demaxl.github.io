<template>
    <div class="dark-section py-10 lg:py-20">
        <h1 class="section-heading text-white"><span>My</span><span>Projects</span></h1>

        <div class="container grid grid-cols-1 gap-7 lg:my-6 lg:grid-cols-2 lg:gap-28">
            <img
                class="rounded-[19px] shadow-[0px_8px_18px_-6px_rgba(24,39,75,0.12),0px_12px_42px_-4px_rgba(24,39,75,0.12)]"
                src="/images/projects/project1.jpeg"
                alt="Project 1 image"
            />

            <div class="flex flex-col space-y-7 tracking-tight text-white">
                <h3 class="text-2xl font-extrabold leading-7 lg:text-5xl lg:leading-[56px]">01</h3>
                <h2 class="text-xl font-bold leading-6 lg:text-[32px] lg:leading-10">
                    Crypto Screener Application
                </h2>
                <p class="font-normal tracking-wide text-zinc-400">
                    I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    specimen book.
                </p>
                <ExportSVG
                    class="h-5 w-5 cursor-pointer stroke-white stroke-2 transition-colors hover:stroke-neutral"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import ExportSVG from '@/assets/icons/export.svg'
</script>

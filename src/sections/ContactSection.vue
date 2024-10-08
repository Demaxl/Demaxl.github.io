<template>
    <div class="py-16">
        <h1 class="section-heading"><span>Contact</span><span>Me</span></h1>
        <div class="flex flex-col space-y-11">
            <form class="flex flex-col space-y-5" action="#">
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
                <input
                    class="rounded-[4px] border-[1.4px] border-black px-6 py-4 leading-5 tracking-tight transition-colors placeholder:text-zinc-500 hover:bg-zinc-100 focus:border-black focus:shadow-md focus:shadow-gray-400/10 focus:ring-black"
                    type="text"
                    placeholder="How can I help?"
                />
                <input
                    class="inline-block w-min cursor-pointer rounded bg-black px-4 py-3 font-semibold leading-5 tracking-wide text-white transition-colors hover:bg-neutral focus:border-2 focus:border-black focus:bg-white focus:text-black focus:outline-none"
                    type="submit"
                    value="Get In Touch"
                />
                <SocialsLink />
            </form>
            <div class="flex flex-col space-y-8">
                <div
                    class="flex flex-col space-y-3 text-[28px] font-extrabold leading-8 tracking-tight"
                >
                    <div>Lets <span class="text-outline">talk</span> for</div>
                    <div>Something special</div>
                </div>
                <p class="tracking-wide text-zinc-500">
                    I seek to push the limits of creativity to create high-engaging, user-friendly,
                    and memorable interactive experiences.
                </p>
                <div class="flex flex-col space-y-3 text-xl font-bold leading-6 tracking-tight">
                    <div>aweabdullahi@gmail.com</div>
                    <div>+2347032286388</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import SocialsLink from '@/components/SocialsLink.vue'
</script>

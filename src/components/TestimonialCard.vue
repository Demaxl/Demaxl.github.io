<template>
    <a
        :href="link"
        target="_blank"
        class="group flex flex-col items-center space-y-6 rounded-[20px] border p-6 text-center tracking-tight shadow-[0px_6px_8px_-6px_#18274B1F,0px_8px_16px_-6px_#18274B14] transition-colors hover:bg-black md:max-w-[370px] md:p-10"
    >
        <img
            class="h-24 w-24"
            :src="`/images/${gender === 'male' ? 'male' : 'female'}_testimonial.svg`"
            alt="client image icon"
        />
        <p class="text-base leading-5 tracking-wide text-neutral group-hover:text-white">
            {{ testimonial }}
        </p>
        <svg height="3" viewBox="0 0 121 3" xmlns="http://www.w3.org/2000/svg">
            <rect
                x="0.5"
                y="0.204102"
                width="120"
                height="2"
                fill="black"
                class="group-hover:fill-white"
            />
        </svg>
        <span class="text-xl font-semibold leading-6 text-neutral group-hover:text-white">{{
            name
        }}</span>
        <span class="text-base font-semibold leading-5 text-zinc-500 group-hover:text-white">{{
            position
        }}</span>
    </a>
</template>

<script setup>
defineProps({
    name: String,
    position: String,
    testimonial: String,
    link: String,
    gender: {
        type: String,
        default: 'male'
    }
})
</script>

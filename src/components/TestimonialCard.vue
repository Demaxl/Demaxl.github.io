<template>
    <div
        class="flex flex-col items-center space-y-6 rounded-[20px] p-6 text-center tracking-tight shadow-[0px_6px_8px_-6px_#18274B1F,0px_8px_16px_-6px_#18274B14] md:max-w-[370px] md:p-10"
    >
        <img
            class="h-24 w-24"
            :src="`/images/${gender === 'male' ? 'male' : 'female'}_testimonial.svg`"
            alt="client image icon"
        />
        <p class="text-base leading-5 tracking-wide text-neutral">
            {{ testimonial }}
        </p>
        <svg height="3" viewBox="0 0 121 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.204102" width="120" height="2" fill="black" />
        </svg>
        <span class="text-xl font-semibold leading-6 text-neutral">{{ name }}</span>
        <span class="text-base font-semibold leading-5 text-zinc-500">{{ position }}</span>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    position: String,
    testimonial: String,
    gender: {
        type: String,
        default: 'male'
    }
})
</script>

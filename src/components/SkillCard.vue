<template>
    <div
        @mouseenter="onHover"
        @mouseleave="onHoverOut"
        class="group inline-block max-h-[180px] max-w-[180px] rounded-[4px] border-2 border-black p-6 transition-colors duration-300 hover:bg-black"
    >
        <div class="flex flex-col items-center space-y-8">
            <component :is="svgComponent" class="h-14 w-14 fill-black group-hover:fill-white" />
            <span
                class="block text-center text-xl font-bold leading-6 tracking-tight group-hover:text-white"
                >{{ title }}</span
            >
        </div>
    </div>
</template>

<script setup>
defineProps({
    svgComponent: {
        type: [Object, Function], // Vue component constructor
        required: true
    },
    title: String
})

import gsap from 'gsap'

let tween

const onHover = (event) => {
    tween = gsap.to(event.currentTarget, {
        scale: 1.05,
        y: -5,
        duration: 0.3,
        ease: 'power2.out',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    })
}

const onHoverOut = (event) => {
    tween.reverse()
}
</script>

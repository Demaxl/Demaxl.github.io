<template>
    <div
        class="group inline-block max-h-[180px] max-w-[180px] rounded-[4px] border-2 border-black p-6 transition-colors hover:bg-black"
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
</script>

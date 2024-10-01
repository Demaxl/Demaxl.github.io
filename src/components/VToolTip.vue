<template>
    <div
        role="tooltip"
        class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
    >
        {{ content }}
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</template>

<script setup>
defineProps({
    content: String
})
</script>

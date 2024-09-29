<template>
    <div class="flex justify-center">
        <div class="flex flex-col space-y-12 space-y-reverse">
            <div
                class="order-last flex flex-col space-y-3 text-[28px] font-extrabold leading-8 tracking-tight"
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
            <div>
                <PersonIcon class="" />
            </div>
        </div>
    </div>
</template>
<script setup>
import PersonIcon from '@/components/icons/PersonIcon.vue'
</script>

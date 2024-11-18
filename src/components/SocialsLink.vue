<template>
    <div class="xs:space-x-[24px] flex space-x-4">
        <!-- Email -->
        <a
            target="_blank"
            href="mailto:aweabdullahi@gmail.com"
            :data-tooltip-target="`${section}-tooltip-email`"
            class="group h-12 w-12 cursor-pointer rounded border-2 border-black p-3 transition-colors hover:bg-black lg:h-14 lg:w-14 lg:p-4"
        >
            <EmailIcon class="h-5 w-5 fill-black group-hover:fill-white" />
            <VToolTip content="Send an email" :id="`${section}-tooltip-email`" />
        </a>

        <!-- Freelancer -->
        <a
            target="_blank"
            href="https://www.freelancer.com/u/Demaxl"
            :data-tooltip-target="`${section}-tooltip-freelancer`"
            class="group h-12 w-12 cursor-pointer rounded border-2 border-black p-3 transition-colors hover:bg-black lg:h-14 lg:w-14 lg:p-4"
        >
            <FreelancerIcon class="h-5 w-5 fill-black group-hover:fill-white" />
            <VToolTip content="View freelancer profile" :id="`${section}-tooltip-freelancer`" />
        </a>

        <!-- Linkedin -->
        <a
            target="_blank"
            href="https://www.linkedin.com/in/demaxl"
            class="group h-12 w-12 cursor-pointer rounded border-2 border-black p-3 transition-colors hover:bg-black lg:h-14 lg:w-14 lg:p-4"
        >
            <LinkedinIcon class="h-5 w-5 fill-black group-hover:fill-white" />
        </a>

        <!-- Github -->
        <a
            target="_blank"
            href="https://www.github.com/demaxl"
            class="group h-12 w-12 cursor-pointer rounded border-2 border-black p-3 transition-colors hover:bg-black lg:h-14 lg:w-14 lg:p-4"
        >
            <GithubIcon class="h-5 w-5 fill-black group-hover:fill-white" />
        </a>

        <!-- Whatsapp -->
        <a
            target="_blank"
            href="https://wa.me/2347032286388"
            class="group h-12 w-12 cursor-pointer rounded border-2 border-black p-3 transition-colors hover:bg-black lg:h-14 lg:w-14 lg:p-4"
        >
            <WhatsappIcon class="h-5 w-5 fill-black group-hover:fill-white" />
        </a>
    </div>
</template>
<script setup>
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import FreelancerIcon from '@/components/icons/FreelancerIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import WhatsappIcon from '@/components/icons/WhatsappIcon.vue'
import EmailIcon from './icons/EmailIcon.vue'

import VToolTip from '@/components/VToolTip.vue'

defineProps({
    section: String
})
</script>

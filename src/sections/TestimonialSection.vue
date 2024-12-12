<template>
    <div class="my-10 overflow-hidden lg:!my-[80px]">
        <h1 v-section-heading-animation class="section-heading">
            <span>My</span><span>Testimonial</span>
        </h1>

        <div
            class="md: flex flex-col items-center space-y-10 lg:flex-row lg:justify-center lg:space-x-8 lg:space-y-0"
        >
            <template v-for="(testimonial, index) in testimonials" :key="index">
                <TestimonialCard v-bind="testimonial" :index="index" />
            </template>
        </div>
    </div>
</template>

<script setup>
import TestimonialCard from '@/components/TestimonialCard.vue'

const testimonials = [
    {
        name: 'Yves Payanzo',
        position: 'Client',
        testimonial:
            'This was an outstanding performance by Abdullahi, in all regards. Quality, time, communication, and overall experience.',
        gender: 'male',
        imagePath: '/images/testimonials/yves.webp',
        link: 'https://www.freelancer.com/u/Demaxl?review_context_id=38073783&review_type=project&sb=t'
    },
    {
        name: 'Jay-Ar A.',
        position: 'Client',
        testimonial:
            'Abdullahi A. was very swift in his work. He also has a very good communication skill which made our conversations easier to understand. I will definitely hire him again.',
        gender: 'female',
        link: 'https://www.freelancer.com/u/Demaxl?review_context_id=37080757&review_type=project&sb=t',
        imagePath: '/images/testimonials/sidero.webp'
    },
    {
        name: 'Agne U.',
        position: 'Client',
        testimonial: `He isn't tricky as a developer and takes responsibility for his work. I like his attitude and will continue to work with him`,
        gender: 'female',
        imagePath: null,
        link: 'https://www.freelancer.com/u/Demaxl?review_context_id=38216503&review_type=project&sb=t'
    }
]

import gsap from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: `#testimonial`,
            start: 'top 80%'
        }
    })

    tl.from('.testimonial-card', {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    })

    tl.from('.testimonial-card > p', {
        text: '',
        duration: 1
    })
})
</script>

<template>
    <div class="container mx-auto py-10 lg:py-[60px]">
        <div
            class="flex flex-col items-center space-y-10 lg:flex-row lg:justify-between lg:space-x-20"
        >
            <div>
                <WindowPersonIcon
                    class="h-[360px] max-w-[350px] lg:h-[430px] lg:max-w-[400px] xl:h-[550px] xl:max-w-[530px]"
                />
            </div>
            <div>
                <h1 ref="section-heading" class="section-heading text-start">
                    <span>About</span><span>Me</span>
                </h1>
                <div ref="text-container" class="space-y-5 text-base tracking-wide text-zinc-500">
                    <p>
                        I'm a passionate, self-proclaimed designer who specializes in full stack
                        development (React.js & Node.js). I am very enthusiastic about bringing the
                        technical and visual aspects of digital products to life. User experience,
                        pixel perfect design, and writing clear, readable, highly performant code
                        matters to me.
                    </p>
                    <p>
                        I began my journey as a web developer in 2015, and since then, I've
                        continued to grow and evolve as a developer, taking on new challenges and
                        learning the latest technologies along the way. Now, in my early thirties, 7
                        years after starting my web development journey, I'm building cutting-edge
                        web applications using modern technologies such as Next.js, TypeScript,
                        Nestjs, Tailwindcss, Supabase and much more.
                    </p>
                    <p>
                        When I'm not in full-on developer mode, you can find me hovering around on
                        twitter or on indie hacker, witnessing the journey of early startups or
                        enjoying some free time. You can follow me on Twitter where I share
                        tech-related bites and build in public, or you can follow me on GitHub.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WindowPersonIcon from '@/components/icons/WindowPersonIcon.vue'
import gsap from 'gsap'
import { onMounted, useTemplateRef } from 'vue'
import { $ } from '@/composables/utils'

const sectionHeading = useTemplateRef('section-heading')
const textContainer = useTemplateRef('text-container')

onMounted(() => {
    gsap.from($(sectionHeading, 'span:nth-child(1)'), {
        y: 10,
        rotateX: 180,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        // delay: 0.5,
        scrollTrigger: {
            trigger: sectionHeading.value,
            start: 'top 80%'
        }
    })
    gsap.from($(sectionHeading, 'span:nth-child(2)'), {
        y: -10,
        rotateX: -180,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        // delay: 0.5,
        scrollTrigger: {
            trigger: sectionHeading.value,
            start: 'top 80%'
        }
    })
    gsap.from($(textContainer, 'p'), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: textContainer.value,
            start: 'top 80%'
        }
    })
})
</script>

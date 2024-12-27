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
                        I am a passionate software engineer with a knack for solving problems
                        through innovative and efficient coding solutions. I am currently a
                        first-class student at the University of Lagos, pursuing a Bachelor’s degree
                        in Computer Science with an impressive CGPA of <strong>4.91/5.0</strong>,
                        where I am continuously refining my expertise in software development and
                        technology. My mission is to create impactful digital experiences that
                        empower businesses and individuals to achieve their goals.
                    </p>
                    <p>
                        With over three years of experience as a freelance software engineer, I have
                        successfully delivered various projects, including web development, process
                        automation, and web scraping solutions. I specialize in using tools like
                        Python, Django, Vue.js, and JavaScript to develop user-friendly and scalable
                        applications. My clients appreciate my attention to detail, timely delivery,
                        and ability to transform complex requirements into elegant solutions that
                        exceed expectations.
                    </p>
                    <p>
                        Beyond my academic and freelance work, I am always eager to learn new
                        technologies and embrace challenges that push me to grow as a developer.
                        When I’m not coding, you can find me exploring tech blogs, contributing to
                        open-source projects, brainstorming creative ideas to improve my craft, or
                        just relaxing by playing chess, travelling and working out. If you're
                        looking for a developer who’s dedicated, skilled, and committed to bringing
                        your vision to life, I’d love to connect and collaborate on exciting
                        projects.
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

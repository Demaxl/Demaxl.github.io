<template>
    <div class="container mx-auto py-10 lg:py-[60px]">
        <div class="flex flex-col items-center space-y-10 lg:flex-row lg:justify-between lg:space-x-20">
            <div>
                <WindowPersonIcon
                    class="h-[360px] max-w-[350px] lg:h-[430px] lg:max-w-[400px] xl:h-[550px] xl:max-w-[530px]" />
            </div>
            <div>
                <h1 ref="section-heading" class="section-heading text-start">
                    <span>About</span><span>Me</span>
                </h1>
                <div ref="text-container" class="space-y-5 text-base tracking-wide text-zinc-500">
                    <p>
                        I'm a software engineer from Lagos, Nigeria, with over five years of experience building web
                        applications, automation systems, and data-driven solutions for clients around the world.
                    </p>

                    <p>
                        My core expertise is in Python, Django, JavaScript, Vue.js, web scraping, and automation. I
                        enjoy
                        taking complex problems and turning them into reliable, efficient, and easy-to-use software.
                        Over
                        the years, I’ve worked on everything from web applications and REST APIs to browser automation,
                        data
                        extraction, smart contracts, and backend systems.
                    </p>

                    <p>
                        For a year, I also stepped outside my usual path to explore smart contract security, spending my
                        time auditing smart contracts and participating in security contests. Although I've decided to
                        return my primary focus to software engineering, that experience gave me a deeper appreciation
                        for
                        writing secure code, analyzing unfamiliar codebases, and thinking critically about how software
                        can
                        fail.
                    </p>

                    <p>
                        Today, I'm focused on building useful software, working with interesting people, and
                        continuously
                        improving as an engineer. I'm open to freelance projects, remote engineering opportunities, and
                        collaborations where I can contribute my skills and continue growing.
                    </p>

                    <p>
                        Outside of coding, I enjoy working out, playing chess, exploring new technologies, and finding
                        new
                        ways to challenge myself.
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

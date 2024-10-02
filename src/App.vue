<template>
    <div class="mx-4 space-y-10 sm:mx-14 md:space-y-[60px] lg:mx-20">
        <AppMenu id="menu" />
        <HeroSection id="hero" />
        <SkillsSection id="skills" />
        <ExperienceSection id="experience" />
    </div>
</template>

<script setup>
import AppMenu from './components/AppMenu.vue'
import HeroSection from './sections/HeroSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
</script>

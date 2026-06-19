<script setup lang="ts">
import GridBackground from '../../components/UI/GridBackground.vue'
import AboutSection from '../../components/UI/home/AboutSection.vue'
import ContactSection from '../../components/UI/home/ContactSection.vue'
import EducationSection from '../../components/UI/home/EducationSection.vue'
import ExperienceSection from '../../components/UI/home/ExperienceSection.vue'
import HeroSection from '../../components/UI/home/HeroSection.vue'
import ProjectsSection from '../../components/UI/home/ProjectsSection.vue'
import SkillsSection from '../../components/UI/home/SkillsSection.vue'
import TestimonialsSection from '../../components/UI/home/TestimonialsSection.vue'
</script>

<template>
    <GridBackground :particle-count="20" glow-color="rgba(59,130,246,0.15)">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
    </GridBackground>
</template>
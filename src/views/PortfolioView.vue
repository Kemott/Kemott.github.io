<script setup>
import { useI18n } from 'vue-i18n'
import { useProjectsStore } from '../stores/projects'
import ProjectScreenshot from '../components/ProjectScreenshot.vue'

const { locale } = useI18n()
const projectsStore = useProjectsStore()

function localized(value) {
    return value[locale.value] ?? value[locale.value.split('-')[0]] ?? value.en
}
</script>

<template>
    <main class="portfolio-page section-padding">
        <div class="container">
            <div class="section-heading">
                <span class="section-number">PORTFOLIO</span>
            </div>
            <div class="projects-list">
                <article
                    v-for="(project, index) in projectsStore.allProjects"
                    :key="project.id"
                    class="project-item"
                    :class="{ 'project-reverse': index % 2 === 1 }"
                >
                    <div class="project-preview">
                        <ProjectScreenshot
                            v-if="project.screenshot"
                            :src="projectsStore.getScreenshotUrl(project.screenshot)"
                            :alt="localized(project.title)"
                        />
                        <span class="preview-label">{{ localized(project.previewLabel) }}</span>
                    </div>
                    <div class="project-info">
                        <span class="project-category">{{ localized(project.category) }}</span>
                        <h3>{{ localized(project.title) }}</h3>
                        <p>{{ localized(project.description) }}</p>
                        <div class="project-tags"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
                    </div>
                </article>
            </div>
        </div>
    </main>
</template>

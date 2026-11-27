<script setup>
import { useI18n } from 'vue-i18n'
import { useProjectsStore } from '../stores/projects'

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
                    <div v-if="project.preview === 'dashboard'" class="project-preview preview-one">
                        <div class="mock-window"><div class="mock-header"><span></span><span></span><span></span><small>SYSTEM / DASHBOARD</small></div><div class="mock-content"><div class="mock-sidebar"></div><div class="mock-main"><div class="mock-block"></div><div class="mock-block short"></div><div class="mock-chart"></div></div></div></div>
                        <span class="preview-label">{{ localized(project.previewLabel) }}</span>
                    </div>
                    <div v-else class="project-preview preview-two">
                        <div class="data-visual"><span>DATA ANALYSIS</span><div class="data-bars"><i v-for="height in [35,65,48,85,58,95,72]" :key="height" :style="{ '--height': height + '%' }"></i></div><div class="data-caption">PROCESS / PERFORMANCE / INSIGHTS</div></div>
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

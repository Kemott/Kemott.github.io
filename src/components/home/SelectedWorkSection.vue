<script setup>
    import { useI18n } from 'vue-i18n'
    import { useProjectsStore } from '../../stores/projects'
    import ProjectScreenshot from '../ProjectScreenshot.vue'

    const { t, locale } = useI18n()
    const projectsStore = useProjectsStore()
    const featuredProjects = projectsStore.featuredProjects

    function localized(value) {
        return value[locale.value] ?? value[locale.value.split('-')[0]] ?? value.en
    }
</script>

<template>
    <section class="projects section-padding">
        <div class="container">
            <div class="section-heading"><span class="section-number">03 / SELECTED WORK</span><span class="section-tag">PROJECTS & EXPERIMENTS</span></div>
            <div class="section-title-row">
                <h2>{{ t('home.projects.title') }}<span class="accent">.</span></h2>
                <router-link :to="{ name: 'portfolio' }" class="text-link">{{ t('home.projects.link') }} <span>↗</span></router-link>
            </div>
            <div class="projects-list">
                <article
                    v-for="(project, index) in featuredProjects"
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
                        <router-link :to="{ name: 'portfolio' }" class="text-link">{{ t('home.projects.view') }} <span>↗</span></router-link>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
})

const { t } = useI18n()
const dialog = ref(null)

function openDialog() {
    dialog.value?.showModal()
}

function closeOnBackdrop(event) {
    if (event.target === dialog.value) {
        dialog.value.close()
    }
}
</script>

<template>
    <button
        class="project-screenshot-trigger"
        type="button"
        :aria-label="t('portfolio.screenshot.enlarge', { title: alt })"
        @click="openDialog"
    >
        <img class="project-screenshot" :src="src" :alt="alt" loading="lazy">
        <span class="screenshot-zoom-icon" aria-hidden="true">+</span>
    </button>

    <Teleport to="body">
        <dialog
            ref="dialog"
            class="screenshot-dialog"
            :aria-label="t('portfolio.screenshot.dialog', { title: alt })"
            @click="closeOnBackdrop"
        >
            <button
                class="screenshot-dialog-close"
                type="button"
                :aria-label="t('portfolio.screenshot.close')"
                @click="dialog.close()"
            >
                ×
            </button>
            <img class="screenshot-dialog-image" :src="src" :alt="alt">
        </dialog>
    </Teleport>
</template>

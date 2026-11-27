<script setup>
    import { useProfileStore } from '../../stores/profile'
    import { useI18n } from 'vue-i18n';

    const { t, locale } = useI18n()
    const profile = useProfileStore()
</script>

<template>
    <nav class="navbar md:navbar-expand bg-1">
        <div class="container-fluid">
            <router-link :to="{name: 'home'}" class="navbar-brand">{{ profile.name }}</router-link>
            <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" aria-hidden="true"></span>
            </button>
            <dialog class="drawer drawer-end" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
                <div class="drawer-header">
                    <h5 class="drawer-title" id="navbarDrawerLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                </div>
                <div class="drawer-body md:mb-0">
                    <ul class="nav navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" :to="{name: 'portfolio'}">{{ t('navbar.items.portfolio.label') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" :to="{name: 'cv'}">CV</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" :to="{name: 'services'}">{{ t('navbar.items.services.label') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" :to="{name: 'contact'}">{{ t('navbar.items.contact.label') }}</router-link>
                        </li>
                    </ul>
                </div>
            </dialog>
        </div>
    </nav>
</template>
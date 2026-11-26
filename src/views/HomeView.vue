<script setup>
import { useProfileStore } from '../stores/profile'

const profile = useProfileStore()
</script>

<template>
  <main class="profile-page">
    <section class="container py-5">
      <div class="row min-vh-75 align-items-center justify-content-center">
        <div class="col-12 col-lg-8 col-xl-7">
          <article class="card profile-card border-0 shadow-lg">
            <div class="card-body p-4 p-md-5">
              <p class="eyebrow mb-3">Osobista wizytówka</p>
              <h1 class="display-4 fw-bold mb-2">{{ profile.name }}</h1>
              <p class="lead text-secondary mb-4">{{ profile.role }}</p>
              <p class="profile-bio mb-4">{{ profile.bio }}</p>

              <p class="text-secondary mb-4">
                <span aria-hidden="true">⌖</span>
                {{ profile.location }}
              </p>

              <nav class="d-flex flex-wrap gap-2" aria-label="Linki do profili">
                <a
                  v-for="link in profile.links"
                  :key="link.label"
                  class="btn btn-outline-dark rounded-pill px-4"
                  :href="link.href"
                  target="_blank"
                  rel="noreferrer"
                >
                  {{ link.label }}
                </a>
              </nav>
            </div>
          </article>
          <p class="text-center text-secondary small mt-4 mb-0">
            Zbudowane z Vue, Pinia i Bootstrap.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

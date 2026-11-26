# Osobista wizytówka

Prosty szkielet strony oparty na Vue 3, Vue Router, Pinia i Bootstrap 6 alpha.

## Uruchomienie lokalne

Wymagany jest Node.js 22 lub nowszy.

```sh
npm ci
npm run dev
```

Edytuj dane wizytówki w `src/stores/profile.js`, a widok i style w `src/views/HomeView.vue` oraz `src/assets/main.css`.

## Publikacja na GitHub Pages

Workflow `.github/workflows/deploy.yml` buduje stronę i publikuje ją po każdym pushu do gałęzi `main`. W ustawieniach repozytorium wybierz **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Adres bazowy Vite jest ustawiany automatycznie dla repozytorium projektu. Dla repozytorium `username.github.io` używany jest katalog główny.

Bootstrap 6 jest obecnie używany w wersji prerelease `6.0.0-alpha.2`.

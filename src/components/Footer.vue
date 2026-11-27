<script setup>
    import { useProfileStore } from '../stores/profile'

    const profile = useProfileStore()
</script>

<template>
    <footer class="site-footer">
        <div class="container footer-inner">
            <div class="footer-brand"><span class="brand-symbol">TB.</span><span><strong>{{ profile.name }}</strong><small>SOFTWARE & ENGINEERING</small></span></div>
            <span class="footer-copy">© {{ new Date().getFullYear() }} ALL RIGHTS RESERVED.</span>
            <a href="#top" class="back-to-top">BACK TO TOP ↑</a>
        </div>
    </footer>
</template>
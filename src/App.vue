<template>
    <div>
        <header-menu></header-menu>
        <header-banner></header-banner>
        <RouterView />
        <footer-bottom></footer-bottom>
    </div>
</template>
<script setup lang="ts">
import HeaderMenu from '@/components/menu/Index.vue'
import HeaderBanner from '@/components/banner/Index.vue'
import FooterBottom from '@/components/footer/Index.vue'
</script>


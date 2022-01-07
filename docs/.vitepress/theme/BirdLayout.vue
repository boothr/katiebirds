<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #page-bottom>
      MIT Licensed | Copyright © 2022-present Katie Booth
    </template>
  </Layout>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MasterLayout from './layouts/MasterLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';
// @ts-ignore: Vue file module declaration missing in this project setup
import ScrollToTop from './components/UI/ScrollToTop.vue';

const route = useRoute();

const layouts: Record<string, any> = {
  MasterLayout,
  EmptyLayout
};

const currentLayout = computed(() => {
  const layoutName = (route.meta.layout as string) || 'MasterLayout';
  return layouts[layoutName] || MasterLayout;
});
</script>

<template>
  <component :is="currentLayout">
    <router-view />

    <ScrollToTop v-if="currentLayout === MasterLayout" />
  </component>
</template>
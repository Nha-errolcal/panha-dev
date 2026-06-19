<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MasterLayout from './layouts/MasterLayout.vue';
// import ErrorLayout from './layouts/ErrorLayout.vue';

const route = useRoute();

const layouts: Record<string, any> = {
  MasterLayout,
  // ErrorLayout
};

const currentLayout = computed(() => {
  const layoutName = (route.meta.layout as string) || 'MasterLayout';
  return layouts[layoutName];
});
</script>

<template>
  <component :is="currentLayout">
    <router-view />
  </component>
</template>
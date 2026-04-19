<template>
  <div class="inline-flex items-center justify-center px-6 py-2 rounded-full border-2 border-secondary-500 bg-secondary-500/10 backdrop-blur-sm">
    <span class="text-secondary-500 font-semibold text-sm md:text-base tracking-wide">
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

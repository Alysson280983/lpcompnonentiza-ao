<template>
  <div class="relative w-full max-w-5xl mx-auto">
    <!-- Glow effect background -->
    <div class="absolute -inset-1 bg-gradient-to-r from-secondary-500 to-primary-400 rounded-2xl blur-xl opacity-30"></div>
    
    <!-- Video container -->
    <div class="relative bg-primary-500 rounded-2xl border-2 border-secondary-500/50 overflow-hidden shadow-2xl">
      <!-- macOS window controls bar -->
      <div class="relative bg-primary-600/80 backdrop-blur-sm px-4 py-3 flex items-center gap-2 border-b border-secondary-500/30">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
          <div class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
        </div>
        <div class="flex-1 text-center">
          <span class="text-white/60 text-sm font-medium">Video Player</span>
        </div>
        <div class="w-20"></div>
      </div>
      
      <!-- Inner glow -->
      <div class="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-transparent pointer-events-none"></div>
      
      <!-- Video iframe -->
      <div class="relative aspect-video">
        <iframe
          :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`"
          class="w-full h-full"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  videoId: string
}>()
</script>

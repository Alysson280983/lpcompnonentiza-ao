<template>
  <div class="relative w-full h-full bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-2xl p-8 shadow-2xl">
    <!-- Header com Logo e Menu -->
    <div class="flex items-center justify-between mb-8">
      <!-- Logo -->
      <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      <!-- Menu Items -->
      <div class="flex gap-4">
        <div class="w-20 h-3 bg-white/30 rounded"></div>
        <div class="w-20 h-3 bg-white/30 rounded"></div>
        <div class="w-20 h-3 bg-white/30 rounded"></div>
      </div>
      
      <!-- Button -->
      <div class="w-24 h-8 bg-white/40 rounded-lg"></div>
    </div>
    
    <!-- Hero Content -->
    <div class="mb-8 space-y-3">
      <div class="w-3/4 h-4 bg-white/40 rounded"></div>
      <div class="w-full h-4 bg-white/40 rounded"></div>
      <div class="w-2/3 h-4 bg-white/40 rounded"></div>
      <div class="flex gap-3 mt-4">
        <div class="w-20 h-3 bg-white/30 rounded"></div>
        <div class="w-20 h-3 bg-white/30 rounded"></div>
      </div>
    </div>
    
    <!-- Featured Card -->
    <div class="mb-6">
      <div class="w-full h-32 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg"></div>
    </div>
    
    <!-- Grid de Cards -->
    <div class="grid grid-cols-3 gap-4">
      <div class="h-24 bg-white/20 backdrop-blur-sm rounded-xl shadow-md"></div>
      <div class="h-24 bg-white/20 backdrop-blur-sm rounded-xl shadow-md"></div>
      <div class="h-24 bg-white/20 backdrop-blur-sm rounded-xl shadow-md"></div>
    </div>
    
    <!-- Efeito de brilho -->
    <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
  </div>
</template>

<script setup lang="ts">
</script>

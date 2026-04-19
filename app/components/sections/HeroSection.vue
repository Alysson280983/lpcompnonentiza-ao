<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500">
    <div class="absolute inset-0 bg-gradient-radial-secondary opacity-30"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
      <div class="mb-6 flex justify-center">
        <Badge text="Método de Componentização Extrema" />
      </div>
      
      <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
        Crie seu SaaS com inteligência artificial em até 10X mais rápido sem programar.
      </h1>
      
      <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
        Desenvolva aplicativos com inteligência artificial de forma segura, escalável com total controle sobre seu código.
      </p>
      
      <VideoPlayer videoId="dQw4w9WgXcQ" />
      
      <div class="mt-8">
        <ActionButton texto="Começar Agora" />
      </div>
    </div>
    
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
import Badge from '~/components/ui/Badge.vue'
import VideoPlayer from '~/components/ui/VideoPlayer.vue'
import ActionButton from '~/components/ui/ActionButton.vue'
</script>

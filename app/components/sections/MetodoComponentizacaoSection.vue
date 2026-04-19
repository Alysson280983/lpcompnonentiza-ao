<template>
  <section class="py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Coluna Esquerda - Conteúdo -->
        <div class="space-y-6">
          <Badge text="Método Exclusivo" />
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Componentização Extrema
          </h2>
          
          <p class="text-lg md:text-xl text-white/90 leading-relaxed">
            Desenvolva aplicativos com inteligência artificial de forma segura, escalável com total controle sobre seu código.
          </p>
        </div>
        
        <!-- Coluna Direita - Interface Mockup -->
        <div class="aspect-square">
          <AppInterfaceMockup />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Badge from '~/components/ui/Badge.vue'
import AppInterfaceMockup from '~/components/ui/AppInterfaceMockup.vue'
</script>

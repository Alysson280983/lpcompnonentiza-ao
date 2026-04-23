<template>
  <div class="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <!-- Aspas -->
    <svg class="w-10 h-10 text-secondary-400/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
    
    <!-- Texto do Depoimento -->
    <p class="text-white/90 leading-relaxed mb-6">
      {{ texto }}
    </p>
    
    <!-- Autor -->
    <div class="flex items-center gap-4">
      <!-- Avatar -->
      <div class="w-12 h-12 rounded-full bg-secondary-400/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
        <span class="text-secondary-400 font-bold text-lg">{{ iniciais }}</span>
      </div>
      
      <!-- Nome e Cargo -->
      <div>
        <h4 class="font-bold text-white">{{ nome }}</h4>
        <p class="text-sm text-white/70">{{ cargo }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  nome: string
  cargo: string
  texto: string
}>()

const iniciais = computed(() => {
  const nomes = props.nome.split(' ')
  if (nomes.length >= 2) {
    return `${nomes[0][0]}${nomes[nomes.length - 1][0]}`.toUpperCase()
  }
  return props.nome.substring(0, 2).toUpperCase()
})
</script>

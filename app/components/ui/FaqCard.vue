<template>
  <div class="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
    <!-- Pergunta - Clicável -->
    <button 
      @click="toggleExpanded"
      class="w-full px-6 py-5 flex items-center justify-between hover:bg-white/10 transition-colors text-left"
    >
      <h3 class="text-lg font-bold text-white pr-4">{{ pergunta }}</h3>
      
      <!-- Ícone de Expandir/Colapsar -->
      <svg 
        class="w-6 h-6 text-secondary-400 transition-transform duration-300 flex-shrink-0"
        :class="{ 'rotate-180': isExpanded }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <!-- Resposta Expansível -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-show="isExpanded" class="border-t border-white/10">
        <div class="px-6 py-5 bg-black/10">
          <p class="text-white/90 leading-relaxed">{{ resposta }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  pergunta: string
  resposta: string
}>()

const isExpanded = ref(false)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}
</script>

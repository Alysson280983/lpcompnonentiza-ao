<template>
  <div class="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
    <!-- Header - Clicável -->
    <button 
      @click="toggleExpanded"
      class="w-full px-6 py-5 flex items-center justify-between hover:bg-white/10 transition-colors"
    >
      <div class="flex items-center gap-4">
        <!-- Número do Módulo -->
        <div class="w-12 h-12 bg-secondary-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
          <span class="text-secondary-400 font-bold text-lg">{{ numero }}</span>
        </div>
        
        <!-- Título -->
        <div class="text-left">
          <h3 class="text-xl font-bold text-white">{{ titulo }}</h3>
          <p class="text-sm text-white/70 mt-1">{{ descricao }} • {{ conteudo.length }} {{ conteudo.length === 1 ? 'módulo' : 'módulos' }}</p>
        </div>
      </div>
      
      <!-- Ícone de Expandir/Colapsar -->
      <svg 
        class="w-6 h-6 text-secondary-400 transition-transform duration-300"
        :class="{ 'rotate-180': isExpanded }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <!-- Conteúdo Expansível -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[2000px] opacity-100"
      leave-from-class="max-h-[2000px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-show="isExpanded" class="border-t border-white/10">
        <div class="px-6 py-5 bg-black/10">
          <ul class="space-y-3">
            <li 
              v-for="(item, index) in conteudo" 
              :key="index"
              class="flex items-start gap-3 text-white/90"
            >
              <svg class="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  numero: string
  titulo: string
  descricao: string
  conteudo: string[]
}>()

const isExpanded = ref(false)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}
</script>

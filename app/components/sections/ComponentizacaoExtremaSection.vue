
<template>
  <section 
    ref="sectionRef"
    class="py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500"
  >
    <div class="max-w-7xl mx-auto px-6 space-y-24">
      <div class="text-center mb-12">
        <Badge text="Método" />
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
          Componentização Extrema
        </h2>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Uma abordagem estruturada que prioriza componentização, reutilização e arquitetura sólida
        </p>
      </div>
      
      <div 
        class="max-w-4xl mx-auto transition-all duration-1000 mb-32"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <ChatInterface 
          titulo="Método de Componentização Extrema" 
          texto="Crie um componente chamado BaseButton e um componente BaseInput, coloque os componentes no index e ao ser clicado o button execute a função principal que está no user customer" 
        />
      </div>
      
      <!-- Resultado Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-16">
        <!-- Coluna Esquerda - Resultado -->
        <div 
          class="space-y-6 transition-all duration-1000 delay-200"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-3xl md:text-4xl font-bold text-white">Resultado</h3>
          </div>
          
          <p class="text-lg text-white/90 leading-relaxed">
            Com o método de <span class="font-bold text-green-300">Componentização Extrema</span>, você cria componentes de forma isolada, definindo claramente suas responsabilidades, métodos, funções e propriedades. Esses componentes são então importados e compostos dentro de outros componentes, construindo aplicativos de forma modular e estruturada.
          </p>
          
          <p class="text-lg text-white/90 leading-relaxed">
            Essa abordagem segue rigorosamente os <span class="font-bold text-green-300">princípios de design de código e arquitetura de software</span>, mantendo o código <span class="font-bold text-green-300">limpo</span>, <span class="font-bold text-green-300">escalável</span>, <span class="font-bold text-green-300">seguro</span> e, principalmente, <span class="font-bold text-green-300">sob seu controle total</span>. Você tem visibilidade completa da estrutura, facilitando manutenção, testes e evolução do sistema.
          </p>
        </div>
        
        <!-- Coluna Direita - Estrutura de Pastas -->
        <div 
          class="transition-all duration-1000 delay-400"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'"
        >
          <FolderStructure />
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-16">
        <ActionButton texto="Começar Agora" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Badge from '~/components/ui/Badge.vue'
import ChatInterface from '~/components/ui/ChatInterface.vue'
import FolderStructure from '~/components/ui/FolderStructure.vue'
import ActionButton from '~/components/ui/ActionButton.vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const handleScroll = () => {
  if (!sectionRef.value) return
  
  const rect = sectionRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  if (rect.top < windowHeight * 0.8) {
    isVisible.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(handleScroll, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

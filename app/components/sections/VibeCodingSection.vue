<template>
  <section 
    ref="sectionRef"
    class="py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500"
  >
    <div class="max-w-7xl mx-auto px-6 space-y-24">
      <div class="text-center mb-12">
        <Badge text="Vibe Coding" />
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-red-400 mt-6 mb-4">
          Método Tradicional
        </h2>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          O método tradicional onde desenvolvedores enviam prompts aleatórios para a IA
        </p>
      </div>
      
      <div 
        class="max-w-4xl mx-auto transition-all duration-1000 mb-32"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <ChatInterface 
          titulo="vibecoding" 
          texto="Crie um aplicativo completo de gestão..." 
        />
      </div>
      
      <!-- Problema Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-16">
        <!-- Coluna Esquerda - Problema -->
        <div 
          class="space-y-6 transition-all duration-1000 delay-200"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 class="text-3xl md:text-4xl font-bold text-white">Problema</h3>
          </div>
          
          <p class="text-lg text-white/90 leading-relaxed">
            Essa abordagem apresenta <span class="font-bold text-red-300">falhas significativas</span>, pois a IA gera código sem considerar princípios fundamentais da arquitetura de software, como componentização adequada, separação de responsabilidades e reutilização de código. Além disso, o contexto é facilmente perdido durante o processo, resultando em código <span class="font-bold text-red-300">ilegível</span>, <span class="font-bold text-red-300">vulnerável a falhas de segurança</span> e extremamente difícil de manter a longo prazo.
          </p>
          
          <p class="text-lg text-white/90 leading-relaxed">
            A ausência de uma estrutura bem definida leva à <span class="font-bold text-red-300">duplicação excessiva de código</span>, acoplamento desnecessário entre componentes e violação de padrões de design estabelecidos. Isso compromete a <span class="font-bold text-red-300">escalabilidade do projeto</span> e aumenta exponencialmente o custo de manutenção e evolução do sistema.
          </p>
        </div>
        
        <!-- Coluna Direita - Arquivo com Erros -->
        <div 
          class="transition-all duration-1000 delay-400"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'"
        >
          <CodeFileWithErrors />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Badge from '~/components/ui/Badge.vue'
import ChatInterface from '~/components/ui/ChatInterface.vue'
import CodeFileWithErrors from '~/components/ui/CodeFileWithErrors.vue'

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

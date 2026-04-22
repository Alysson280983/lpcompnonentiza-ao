<template>
  <section 
    ref="sectionRef"
    class="py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Coluna Esquerda - Conteúdo -->
        <div 
          class="space-y-6 transition-all duration-1000 delay-100"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
        >
          <Badge text="Método Exclusivo" />
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Componentização Extrema
          </h2>
          
          <p class="text-lg md:text-xl text-white/90 leading-relaxed">
            Desenvolva aplicativos com inteligência artificial de forma segura, escalável com total controle sobre seu código.
          </p>
        </div>
        
        <!-- Coluna Direita - Interface Mockup -->
        <div 
          class="aspect-square transition-all duration-1000 delay-300"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'"
        >
          <AppInterfaceMockup />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Badge from '~/components/ui/Badge.vue'
import AppInterfaceMockup from '~/components/ui/AppInterfaceMockup.vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const handleScroll = () => {
  if (!sectionRef.value) return
  
  const rect = sectionRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  // Verifica se a seção está visível na viewport (mais sensível)
  if (rect.top < windowHeight * 0.8) {
    isVisible.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Pequeno delay para garantir que a animação seja visível
  setTimeout(handleScroll, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

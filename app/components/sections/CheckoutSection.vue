<template>
  <section 
    ref="sectionRef"
    class="py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500"
  >
    <div class="max-w-4xl mx-auto px-6">
      <!-- Badge de Pré-Lançamento -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>PRÉ-LANÇAMENTO - CURSO EM GRAVAÇÃO</span>
        </div>
      </div>
      
      <!-- Card de Checkout -->
      <div 
        class="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <!-- Header -->
        <div class="bg-black/10 px-8 py-6 border-b border-white/10">
          <h2 class="text-3xl md:text-4xl font-bold text-white text-center">
            Garanta Sua Vaga com Desconto Exclusivo
          </h2>
          <p class="text-white/90 text-center mt-3 text-lg">
            Aproveite o preço especial de pré-lançamento
          </p>
        </div>
        
        <!-- Conteúdo -->
        <div class="p-8 md:p-10">
          <!-- Comparação de Preços -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div class="flex items-center justify-between mb-6">
              <div>
                <p class="text-white/70 text-sm mb-1">Preço após lançamento</p>
                <p class="text-white/50 text-3xl font-bold line-through">R$ 1.497</p>
              </div>
              <div class="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                -67%
              </div>
            </div>
            
            <div class="border-t border-white/20 pt-6">
              <p class="text-white/90 text-sm mb-2">Preço de Pré-Lançamento</p>
              <div class="flex items-baseline gap-2 mb-4">
                <span class="text-white text-5xl md:text-6xl font-bold">R$ 497</span>
                <span class="text-white/70 text-xl">à vista</span>
              </div>
              
              <div class="bg-white/10 rounded-xl p-4">
                <p class="text-white/90 text-center">
                  ou <span class="font-bold text-white text-xl">12x de R$ 49,90</span>
                </p>
                <p class="text-white/70 text-sm text-center mt-1">
                  no cartão de crédito
                </p>
              </div>
            </div>
          </div>
          
          <!-- O que está incluído -->
          <div class="mb-8">
            <h3 class="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <svg class="w-6 h-6 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              O que você recebe:
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3 text-white/90">
                <svg class="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Acesso vitalício ao curso completo</span>
              </li>
              <li class="flex items-start gap-3 text-white/90">
                <svg class="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Atualizações gratuitas conforme novos módulos são lançados</span>
              </li>
              <li class="flex items-start gap-3 text-white/90">
                <svg class="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Certificado de conclusão</span>
              </li>
              <li class="flex items-start gap-3 text-white/90">
                <svg class="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Suporte direto com o instrutor</span>
              </li>
              <li class="flex items-start gap-3 text-white/90">
                <svg class="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Comunidade exclusiva de alunos</span>
              </li>
            </ul>
          </div>
          
          <!-- Botão de Compra -->
          <CheckoutButton texto="Garantir Minha Vaga Agora" />
          
          <!-- Garantia -->
          <div class="mt-6 text-center">
            <div class="inline-flex items-center gap-2 text-white/90 text-sm">
              <svg class="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Garantia de 7 dias - 100% do seu dinheiro de volta</span>
            </div>
          </div>
          
          <!-- Aviso de Urgência -->
          <div class="mt-8 bg-yellow-500/20 border-2 border-yellow-400/50 rounded-xl p-4">
            <p class="text-white text-center font-semibold">
              ⚠️ Este preço especial é válido apenas durante o período de gravação do curso
            </p>
            <p class="text-white/80 text-center text-sm mt-2">
              Após o lançamento oficial, o valor será R$ 1.497
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CheckoutButton from '~/components/ui/CheckoutButton.vue'

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

<template>
  <section 
    ref="sectionRef"
    class="py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <Badge text="Depoimentos" />
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
          O Que Nossos Alunos Dizem
        </h2>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Histórias reais de pessoas que transformaram suas carreiras com nosso método
        </p>
      </div>
      
      <!-- Grid de Depoimentos -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <TestimonialCard 
          nome="Carlos Silva"
          cargo="Desenvolvedor Full Stack"
          texto="O método de componentização extrema mudou completamente minha forma de desenvolver. Agora consigo criar aplicações muito mais rápido e com código muito mais limpo e organizado."
        />
        
        <TestimonialCard 
          nome="Ana Paula Santos"
          cargo="Empreendedora Digital"
          texto="Consegui criar minha primeira landing page em apenas 2 dias e já estou validando minha ideia de negócio. O curso é muito prático e direto ao ponto!"
        />
        
        <TestimonialCard 
          nome="Roberto Oliveira"
          cargo="Desenvolvedor Frontend"
          texto="A parte de Supabase e autenticação foi incrível. Aprendi a criar sistemas completos com backend robusto sem precisar ser especialista em backend."
        />
        
        <TestimonialCard 
          nome="Mariana Costa"
          cargo="Designer UI/UX"
          texto="Mesmo vindo do design, consegui acompanhar o curso tranquilamente. A didática é excelente e os projetos práticos me deram muita confiança."
        />
        
        <TestimonialCard 
          nome="Felipe Mendes"
          cargo="Desenvolvedor SaaS"
          texto="Lancei meu primeiro SaaS 3 meses após começar o curso. A parte de Stripe e assinaturas foi fundamental para monetizar meu produto."
        />
        
        <TestimonialCard 
          nome="Juliana Ferreira"
          cargo="Freelancer"
          texto="Agora consigo entregar projetos muito mais rápido para meus clientes. A metodologia de componentização realmente acelera o desenvolvimento."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Badge from '~/components/ui/Badge.vue'
import TestimonialCard from '~/components/ui/TestimonialCard.vue'

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

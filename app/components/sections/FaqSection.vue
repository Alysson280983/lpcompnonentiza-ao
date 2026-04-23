<template>
  <section 
    ref="sectionRef"
    class="py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500"
  >
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-16">
        <Badge text="FAQ" />
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
          Perguntas Frequentes
        </h2>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Tire suas dúvidas sobre o curso e o processo de compra
        </p>
      </div>
      
      <!-- Lista de Perguntas -->
      <div 
        class="space-y-4 transition-all duration-1000"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <FaqCard 
          pergunta="Como tenho acesso ao curso?"
          resposta="Os dados de login e senha são enviados para o seu e-mail imediatamente após a confirmação do pagamento. Você receberá um link de acesso à plataforma onde poderá começar a assistir às aulas."
        />
        
        <FaqCard 
          pergunta="Qual o tempo de acesso ao curso?"
          resposta="Você terá 1 ano de acesso completo ao curso a partir da data de compra. Durante esse período, você pode assistir às aulas quantas vezes quiser e no seu próprio ritmo."
        />
        
        <FaqCard 
          pergunta="Como funciona a garantia?"
          resposta="Você tem 7 dias corridos para acessar a plataforma, conhecer o conteúdo e solicitar o reembolso caso o curso não atenda às suas expectativas. O processo é simples e sem burocracia - basta entrar em contato conosco dentro do prazo."
        />
        
        <FaqCard 
          pergunta="O curso já está completo?"
          resposta="O curso está em fase de gravação. Ao comprar agora no pré-lançamento, você garante acesso a todos os módulos conforme forem sendo lançados, além de um desconto exclusivo de 67% sobre o valor final."
        />
        
        <FaqCard 
          pergunta="Preciso ter conhecimento prévio em programação?"
          resposta="Não é necessário ter conhecimento prévio. O curso começa do zero, ensinando desde os fundamentos teóricos até a criação de aplicações completas. Basta ter vontade de aprender e dedicação para praticar."
        />
        
        <FaqCard 
          pergunta="Vou receber certificado?"
          resposta="Sim! Ao concluir o curso, você receberá um certificado digital de conclusão que pode ser compartilhado em seu LinkedIn e currículo."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Badge from '~/components/ui/Badge.vue'
import FaqCard from '~/components/ui/FaqCard.vue'

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

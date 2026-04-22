<template>
  <section 
    ref="sectionRef"
    class="py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <Badge text="Possibilidades" />
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
        Crie qualquer tipo de aplicativo
        </h2>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Com Vue e Nuxt, as possibilidades são infinitas. Crie qualquer tipo de aplicação web moderna e escalável.
        </p>
      </div>
      
      <!-- Grid de Cards -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <AppTypeCard 
          titulo="Aplicativos de Gestão"
          descricao="Sistemas ERP, CRM, controle de estoque, gestão financeira e muito mais"
          icone="chart"
        />
        
        <AppTypeCard 
          titulo="Aplicativos de Delivery"
          descricao="Plataformas de entrega, marketplace de restaurantes e e-commerce"
          icone="delivery"
        />
        
        <AppTypeCard 
          titulo="Apps de Saúde"
          descricao="Telemedicina, agendamento de consultas, prontuários eletrônicos"
          icone="health"
        />
        
        <AppTypeCard 
          titulo="Redes Sociais"
          descricao="Plataformas de interação, feeds, mensagens e comunidades"
          icone="social"
        />
        
        <AppTypeCard 
          titulo="Área de Membros"
          descricao="Plataformas de cursos, conteúdo exclusivo e assinaturas"
          icone="members"
        />
        
        <AppTypeCard 
          titulo="Landing Pages"
          descricao="Páginas de vendas, captura de leads e conversão"
          icone="landing"
        />
        
        <AppTypeCard 
          titulo="E-commerce"
          descricao="Lojas virtuais completas com carrinho, pagamento e gestão"
          icone="shop"
        />
        
        <AppTypeCard 
          titulo="Dashboards"
          descricao="Painéis analíticos, relatórios e visualização de dados"
          icone="dashboard"
        />
        
        <AppTypeCard 
          titulo="SaaS"
          descricao="Software como serviço, multi-tenant e escalável"
          icone="saas"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Badge from '~/components/ui/Badge.vue'
import AppTypeCard from '~/components/ui/AppTypeCard.vue'

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

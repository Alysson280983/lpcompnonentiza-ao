<template>
  <section 
    ref="sectionRef"
    class="py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500"
  >
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16">
        <Badge text="Conteúdo do Curso" />
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
          O Que Você Vai Aprender
        </h2>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Um curso completo e estruturado para você dominar o desenvolvimento de aplicações modernas com Vue e Nuxt
        </p>
      </div>
      
      <!-- Lista de Módulos -->
      <div 
        class="space-y-4 transition-all duration-1000"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <!-- Módulo 1 -->
        <CourseModuleCard 
          numero="1"
          titulo="Fundamentos Teóricos e Introdução"
          descricao="Base conceitual para desenvolvimento web moderno"
          :conteudo="[
            'O que são frameworks e por que usá-los',
            'Arquitetura cliente-servidor e como funcionam os servidores',
            'Anatomia de uma aplicação web moderna',
            'Dicas de empreendedorismo digital e validação de ideias',
            'Boas práticas de desenvolvimento e padrões de código'
          ]"
        />
        
        <!-- Módulo 2 -->
        <CourseModuleCard 
          numero="2"
          titulo="Componentização Extrema"
          descricao="Domine a arte de criar componentes reutilizáveis e escaláveis"
          :conteudo="[
            '2.1 Setup Inicial - Instalação de Git, Node.js e editor de código',
            '2.2 Componentização com Nuxt - Sistema de componentes, props, eventos e composables',
            '2.3 Versionamento de Código - GitHub, commits, branches e pull requests',
            '2.4 Caixa Rápido com IA - Criação de sites e landing pages para venda imediata'
          ]"
        />
        
        <!-- Módulo 3 -->
        <CourseModuleCard 
          numero="3"
          titulo="Projetos Práticos"
          descricao="Aprenda construindo aplicações reais do zero"
          :conteudo="[
            '3.1 Sistema de Cadastro com Auth - CRUD completo com autenticação no Supabase',
            '3.2 Sistema de Agendamento - Aplicação elaborada com gestão de horários e disponibilidade'
          ]"
        />
        
        <!-- Módulo 4 -->
        <CourseModuleCard 
          numero="4"
          titulo="Backend e Assinaturas"
          descricao="Domine backend, banco de dados e monetização"
          :conteudo="[
            '4.1 Supabase Auth - Autenticação completa, criação de conta e recuperação de senha',
            '4.2 Supabase em Escala - Views, functions, triggers e otimização de performance',
            '4.3 Supabase Segurança - Row Level Security (RLS), JWT e proteção de dados',
            '4.4 Stripe - Integração de pagamentos e gerenciamento de assinaturas SaaS'
          ]"
        />
        
        <!-- Módulo 5 -->
        <CourseModuleCard 
          numero="5"
          titulo="Publicação e Manutenção"
          descricao="Coloque sua aplicação no ar e mantenha-a funcionando"
          :conteudo="[
            '5.1 Vercel - Deploy automatizado, domínio próprio e configurações de produção',
            'Monitoramento de erros e performance',
            'Estratégias de backup e recuperação'
          ]"
        />
        
        <!-- Módulo 6 -->
        <CourseModuleCard 
          numero="6"
          titulo="Projeto Final - SaaS Completo"
          descricao="Construa um Software como Serviço do início ao fim"
          :conteudo="[
            'Planejamento e arquitetura do SaaS',
            'Implementação de todos os conceitos aprendidos',
            'Sistema de autenticação e autorização',
            'Gestão de assinaturas e pagamentos recorrentes',
            'Deploy e configuração de produção',
            'Estratégias de lançamento e crescimento'
          ]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Badge from '~/components/ui/Badge.vue'
import CourseModuleCard from '~/components/ui/CourseModuleCard.vue'

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

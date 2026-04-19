---
inclusion: auto
---

# Visão Geral do Projeto

## Objetivo
Landing page para vender o curso "Método de Componentização Extrema" que ensina a criar aplicativos com inteligência artificial.

## Stack Tecnológica
- **Framework**: Nuxt 4.4.2
- **CSS Framework**: Tailwind CSS (@nuxtjs/tailwindcss)
- **Fonte**: Public Sans (via @fontsource/public-sans)
- **Linguagem**: TypeScript/Vue 3

## Estrutura de Pastas
```
app/
├── components/
│   ├── ui/              # Componentes reutilizáveis (Badge, VideoPlayer, etc)
│   └── sections/        # Seções da landing page (HeroSection, etc)
├── pages/
│   └── index.vue        # Página principal
├── plugins/
│   └── fonts.ts         # Carregamento de fontes
└── app.vue              # Layout principal com NuxtPage
```

## Esquema de Cores
### Cores Principais
- **Primary (Azul Escuro)**: `#020618`
  - Variações: primary-50 até primary-950
- **Secondary (Verde Nuxt)**: `#00DC82`
  - Variações: secondary-50 até secondary-950
- **Neutras**: black (#000000), white (#ffffff)

### Gradientes Configurados
- `bg-gradient-primary`: Linear gradient do primary ao secondary
- `bg-gradient-primary-reverse`: Reverso
- `bg-gradient-radial-primary`: Gradiente radial
- `bg-gradient-radial-secondary`: Gradiente radial reverso
- E outros (vertical, horizontal, diagonal)

## Tipografia
### Família de Fontes
- **Principal**: Public Sans com fallbacks
- Classes: `font-sans`, `font-primary`

### Tamanhos Semânticos
- `text-display`: 72px
- `text-hero`: 64px
- `text-h1` até `text-h6`: 48px até 18px
- `text-body`: 16px
- `text-small`: 14px
- `text-xs`: 12px

## Componentes Criados
### UI Components
- **Badge**: Badge com borda e fundo semi-transparente
  - Props: `text: string`
  - Uso: Destacar informações importantes

- **VideoPlayer**: Player de vídeo YouTube com estilo macOS
  - Props: `videoId: string`
  - Features: Botões macOS (vermelho, amarelo, verde), borda com glow effect

### Sections
- **HeroSection**: Seção hero principal
  - Gradiente de fundo azul predominante
  - Badge, título, subtítulo e video player
  - Responsivo com breakpoints otimizados

## Conteúdo do Curso
- **Nome**: Método de Componentização Extrema
- **Proposta**: Criar SaaS com IA em até 10X mais rápido sem programar
- **Benefícios**: Desenvolvimento seguro, escalável com controle total do código

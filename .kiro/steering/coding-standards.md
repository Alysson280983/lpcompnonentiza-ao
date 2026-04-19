---
inclusion: auto
---

# Padrões de Código

## Convenções de Nomenclatura

### Componentes
- **PascalCase** para nomes de componentes
- Sufixos descritivos:
  - `Section` para seções da página (ex: `HeroSection`, `FeaturesSection`)
  - Sem sufixo para componentes UI genéricos (ex: `Badge`, `Button`, `Card`)
- Exemplos:
  - ✅ `HeroSection.vue`
  - ✅ `Badge.vue`
  - ✅ `VideoPlayer.vue`
  - ❌ `hero-section.vue`
  - ❌ `badgeComponent.vue`

### Arquivos e Pastas
- **kebab-case** para pastas
- **PascalCase** para arquivos de componentes Vue
- Estrutura:
  ```
  app/components/
  ├── ui/              # Componentes reutilizáveis
  ├── sections/        # Seções específicas da landing page
  └── layout/          # Componentes de layout (se necessário)
  ```

## Importações

### Regra Obrigatória: Importações Explícitas
**TODOS os componentes DEVEM ser explicitamente importados**, mesmo que o Nuxt suporte auto-import.

```vue
<!-- ✅ CORRETO -->
<script setup lang="ts">
import Badge from '~/components/ui/Badge.vue'
import VideoPlayer from '~/components/ui/VideoPlayer.vue'
</script>

<template>
  <div>
    <Badge text="Exemplo" />
    <VideoPlayer videoId="abc123" />
  </div>
</template>
```

```vue
<!-- ❌ INCORRETO - Não usar auto-import -->
<template>
  <div>
    <Badge text="Exemplo" />
    <VideoPlayer videoId="abc123" />
  </div>
</template>
```

### Padrão de Importação
- Use `~/` para caminhos absolutos a partir da raiz do projeto
- Sempre inclua a extensão `.vue`
- Agrupe importações por tipo:
  1. Componentes UI
  2. Componentes de seções
  3. Composables/Utils
  4. Tipos/Interfaces

```typescript
// Exemplo de ordem
import Badge from '~/components/ui/Badge.vue'
import Button from '~/components/ui/Button.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import { useCustomComposable } from '~/composables/useCustom'
import type { MyType } from '~/types'
```

## Estrutura de Componentes Vue

### Template
- Use indentação de 2 espaços
- Mantenha templates limpos e legíveis
- Extraia lógica complexa para computed properties ou composables

### Script Setup
- Sempre use `<script setup lang="ts">`
- Defina props com TypeScript:
  ```typescript
  defineProps<{
    text: string
    isActive?: boolean
  }>()
  ```
- Use composables para lógica reutilizável

### Estilo
- **NÃO use `<style>` scoped** - use apenas Tailwind CSS
- Todas as estilizações devem ser feitas via classes Tailwind
- Use as cores e tamanhos configurados no `tailwind.config.js`

## Tailwind CSS

### Classes Responsivas
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Exemplo:
  ```html
  <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
    Título Responsivo
  </h1>
  ```

### Cores
- Use as cores semânticas configuradas:
  - `primary-{50-950}` para azul escuro
  - `secondary-{50-950}` para verde
  - `bg-gradient-primary`, `bg-gradient-secondary`, etc.

### Espaçamento
- Use escala padrão do Tailwind: `p-4`, `m-6`, `gap-8`, etc.
- Para containers: `max-w-7xl mx-auto px-6`

## TypeScript

### Props
- Sempre defina tipos para props:
  ```typescript
  defineProps<{
    title: string
    count?: number
    items: string[]
  }>()
  ```

### Emits
- Defina emits quando necessário:
  ```typescript
  const emit = defineEmits<{
    click: [id: string]
    update: [value: number]
  }>()
  ```

## Boas Práticas

### Componentes
- Mantenha componentes pequenos e focados
- Um componente = uma responsabilidade
- Reutilize componentes UI em múltiplas seções
- Props devem ser imutáveis

### Performance
- Use `v-if` para renderização condicional pesada
- Use `v-show` para toggles frequentes
- Lazy load componentes pesados quando apropriado

### Acessibilidade
- Use tags semânticas HTML5
- Adicione `alt` em imagens
- Use `aria-label` quando necessário
- Mantenha contraste adequado nas cores

## Exemplo Completo

```vue
<template>
  <section class="relative min-h-screen bg-gradient-primary">
    <div class="max-w-7xl mx-auto px-6 py-20">
      <Badge text="Novidade" />
      <h1 class="text-4xl md:text-6xl font-bold text-white">
        {{ title }}
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import Badge from '~/components/ui/Badge.vue'

defineProps<{
  title: string
}>()
</script>
```

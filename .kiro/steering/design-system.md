---
inclusion: auto
---

# Sistema de Design

## Paleta de Cores

### Primary (Azul Escuro Nuxt)
Base: `#020618`

| Variação | Hex | Classe Tailwind |
|----------|-----|-----------------|
| 50 | #e6f0f5 | `primary-50` |
| 100 | #cce1eb | `primary-100` |
| 200 | #99c3d7 | `primary-200` |
| 300 | #66a5c3 | `primary-300` |
| 400 | #3387af | `primary-400` |
| 500 | #020618 | `primary-500` (base) |
| 600 | #020515 | `primary-600` |
| 700 | #020412 | `primary-700` |
| 800 | #01030f | `primary-800` |
| 900 | #01020c | `primary-900` |
| 950 | #000106 | `primary-950` |

### Secondary (Verde Nuxt)
Base: `#00DC82`

| Variação | Hex | Classe Tailwind |
|----------|-----|-----------------|
| 50 | #e6fdf4 | `secondary-50` |
| 100 | #ccfbe9 | `secondary-100` |
| 200 | #99f7d3 | `secondary-200` |
| 300 | #66f3bd | `secondary-300` |
| 400 | #33efa7 | `secondary-400` |
| 500 | #00DC82 | `secondary-500` (base) |
| 600 | #00b068 | `secondary-600` |
| 700 | #00844e | `secondary-700` |
| 800 | #005834 | `secondary-800` |
| 900 | #002c1a | `secondary-900` |
| 950 | #00160d | `secondary-950` |

### Neutras
- **Black**: `#000000` - `black`
- **White**: `#ffffff` - `white`

## Gradientes

### Background Gradients
```html
<!-- Linear Gradients -->
<div class="bg-gradient-primary">Primary → Secondary</div>
<div class="bg-gradient-primary-reverse">Secondary → Primary</div>
<div class="bg-gradient-secondary">Secondary → Light Secondary</div>
<div class="bg-gradient-dark">Dark Primary Gradient</div>
<div class="bg-gradient-light">Light Secondary Gradient</div>

<!-- Radial Gradients -->
<div class="bg-gradient-radial-primary">Radial Primary</div>
<div class="bg-gradient-radial-secondary">Radial Secondary</div>

<!-- Directional Gradients -->
<div class="bg-gradient-diagonal">Diagonal</div>
<div class="bg-gradient-vertical">Vertical</div>
<div class="bg-gradient-horizontal">Horizontal</div>
```

### Custom Gradients
Use classes Tailwind para gradientes customizados:
```html
<div class="bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500">
  Gradiente customizado
</div>
```

## Tipografia

### Família de Fontes
- **Principal**: Public Sans
- **Fallback**: Public Sans Fallback, system-ui, sans-serif
- **Classes**: `font-sans` ou `font-primary`

### Escala de Tamanhos

| Nome | Tamanho | Classe | Uso Recomendado |
|------|---------|--------|-----------------|
| Display | 72px | `text-display` | Hero titles, landing pages |
| Hero | 64px | `text-hero` | Section headers |
| H1 | 48px | `text-h1` | Main headings |
| H2 | 40px | `text-h2` | Sub headings |
| H3 | 32px | `text-h3` | Section titles |
| H4 | 24px | `text-h4` | Card titles |
| H5 | 20px | `text-h5` | Small headings |
| H6 | 18px | `text-h6` | Smallest headings |
| Body | 16px | `text-body` | Paragraph text |
| Small | 14px | `text-small` | Secondary text |
| XS | 12px | `text-xs` | Labels, captions |

### Pesos de Fonte
Disponíveis: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

```html
<p class="font-normal">Regular (400)</p>
<p class="font-medium">Medium (500)</p>
<p class="font-semibold">Semibold (600)</p>
<p class="font-bold">Bold (700)</p>
```

### Responsividade Tipográfica
```html
<!-- Mobile → Desktop -->
<h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
  Título Responsivo
</h1>

<p class="text-lg md:text-xl lg:text-2xl">
  Parágrafo Responsivo
</p>
```

## Espaçamento

### Containers
```html
<!-- Container padrão -->
<div class="max-w-7xl mx-auto px-6">
  Conteúdo
</div>

<!-- Container menor (para texto) -->
<div class="max-w-4xl mx-auto px-6">
  Texto
</div>

<!-- Container maior (para seções) -->
<div class="max-w-screen-2xl mx-auto px-6">
  Seção ampla
</div>
```

### Padding/Margin
- Seções: `py-20` ou `py-16`
- Cards: `p-6` ou `p-8`
- Gaps: `gap-4`, `gap-6`, `gap-8`
- Espaçamento entre elementos: `mb-4`, `mb-6`, `mb-8`

## Componentes de UI

### Badge
```vue
<Badge text="Texto do Badge" />
```
- Borda arredondada completa
- Fundo semi-transparente verde
- Borda verde sólida
- Texto verde

### VideoPlayer
```vue
<VideoPlayer videoId="dQw4w9WgXcQ" />
```
- Estilo macOS com botões (vermelho, amarelo, verde)
- Borda com glow effect
- Fundo escuro
- Aspect ratio 16:9

## Efeitos Visuais

### Sombras
```html
<div class="shadow-xl">Sombra grande</div>
<div class="shadow-2xl">Sombra extra grande</div>
```

### Blur & Backdrop
```html
<div class="backdrop-blur-sm">Blur suave</div>
<div class="backdrop-blur-md">Blur médio</div>
```

### Opacity
```html
<div class="bg-primary-500/10">10% opacidade</div>
<div class="bg-secondary-500/30">30% opacidade</div>
<div class="text-white/90">90% opacidade no texto</div>
```

### Glow Effect
```html
<div class="relative">
  <div class="absolute -inset-1 bg-gradient-to-r from-secondary-500 to-primary-400 rounded-2xl blur-xl opacity-30"></div>
  <div class="relative">Conteúdo com glow</div>
</div>
```

## Breakpoints

| Breakpoint | Min Width | Classe |
|------------|-----------|--------|
| Mobile | < 640px | (default) |
| SM | 640px | `sm:` |
| MD | 768px | `md:` |
| LG | 1024px | `lg:` |
| XL | 1280px | `xl:` |
| 2XL | 1536px | `2xl:` |

## Animações e Transições

### Hover Effects
```html
<button class="hover:bg-secondary-500 transition-colors">
  Botão com hover
</button>

<div class="hover:scale-105 transition-transform">
  Card com zoom
</div>
```

### Transições
```html
<div class="transition-all duration-300">
  Transição suave
</div>
```

## Acessibilidade

### Contraste
- Texto branco em fundos escuros (primary)
- Texto escuro em fundos claros
- Verde (#00DC82) tem bom contraste em fundos escuros

### Tamanhos Mínimos
- Botões: mínimo 44x44px para touch
- Texto: mínimo 16px para body text
- Links: área clicável adequada

## Exemplos de Uso

### Hero Section
```html
<section class="min-h-screen bg-gradient-to-br from-primary-500 to-secondary-500">
  <div class="max-w-7xl mx-auto px-6 py-20">
    <Badge text="Novidade" />
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-8">
      Título Principal
    </h1>
    <p class="text-xl md:text-2xl text-white/90">
      Subtítulo
    </p>
  </div>
</section>
```

### Card com Glow
```html
<div class="relative">
  <div class="absolute -inset-1 bg-gradient-to-r from-secondary-500 to-primary-400 rounded-2xl blur-xl opacity-30"></div>
  <div class="relative bg-white rounded-2xl p-8 border-2 border-secondary-500/50">
    Conteúdo do card
  </div>
</div>
```

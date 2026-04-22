<template>
  <div class="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border-2 border-red-500/50">
    <!-- File Header -->
    <div class="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="flex gap-1.5">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span class="text-white text-sm font-mono ml-3">App.vue</span>
      </div>
      <div class="flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded">
        <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <span class="text-red-500 text-xs font-semibold">47 Erros</span>
      </div>
    </div>
    
    <!-- Code Content with Errors -->
    <div class="p-4 font-mono text-sm overflow-y-auto max-h-[600px] space-y-1">
      <!-- Line 1 -->
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">1</span>
        <div class="flex-1">
          <span class="text-purple-400">&lt;template&gt;</span>
        </div>
      </div>
      
      <!-- Line 2 with error -->
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">2</span>
        <div class="flex-1">
          <span class="text-blue-400">&lt;div</span>
          <span class="text-red-400 underline decoration-wavy"> class="app"</span>
          <span class="text-blue-400">&gt;</span>
        </div>
      </div>
      
      <!-- Line 3 -->
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">3</span>
        <div class="flex-1 pl-4">
          <span class="text-blue-400">&lt;header&gt;</span>
        </div>
      </div>
      
      <!-- Line 4 with error -->
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">4</span>
        <div class="flex-1 pl-8">
          <span class="text-blue-400">&lt;h1</span>
          <span class="text-red-400 underline decoration-wavy">&gt;{{ title }}</span>
          <span class="text-blue-400">&lt;/h1&gt;</span>
        </div>
      </div>
      
      <!-- Line 5 with error -->
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">5</span>
        <div class="flex-1 pl-8">
          <span class="text-blue-400">&lt;button</span>
          <span class="text-red-400 underline decoration-wavy"> @click="handleClick()"</span>
          <span class="text-blue-400">&gt;</span>
        </div>
      </div>
      
      <!-- Line 6 -->
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">6</span>
        <div class="flex-1 pl-12">
          <span class="text-white">Clique Aqui</span>
        </div>
      </div>
      
      <!-- Line 7 -->
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">7</span>
        <div class="flex-1 pl-8">
          <span class="text-blue-400">&lt;/button&gt;</span>
        </div>
      </div>
      
      <!-- Line 8 -->
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">8</span>
        <div class="flex-1 pl-4">
          <span class="text-blue-400">&lt;/header&gt;</span>
        </div>
      </div>
      
      <!-- Line 9 with error -->
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">9</span>
        <div class="flex-1 pl-4">
          <span class="text-blue-400">&lt;main</span>
          <span class="text-red-400 underline decoration-wavy"> v-if="isLoaded"</span>
          <span class="text-blue-400">&gt;</span>
        </div>
      </div>
      
      <!-- Line 10 with error -->
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">10</span>
        <div class="flex-1 pl-8">
          <span class="text-blue-400">&lt;div</span>
          <span class="text-red-400 underline decoration-wavy"> v-for="item in items"</span>
          <span class="text-blue-400">&gt;</span>
        </div>
      </div>
      
      <!-- Line 11 -->
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">11</span>
        <div class="flex-1 pl-12">
          <span class="text-white">&#123;&#123; item.name &#125;&#125;</span>
        </div>
      </div>
      
      <!-- Line 12 with error -->
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">12</span>
        <div class="flex-1 pl-12">
          <span class="text-blue-400">&lt;span</span>
          <span class="text-red-400 underline decoration-wavy">&gt;&#123;&#123; item.description &#125;&#125;</span>
          <span class="text-blue-400">&lt;/span&gt;</span>
        </div>
      </div>
      
      <!-- More lines with errors -->
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">13</span>
        <div class="flex-1 pl-12">
          <span class="text-blue-400">&lt;img</span>
          <span class="text-red-400 underline decoration-wavy"> :src="item.image"</span>
          <span class="text-blue-400">/&gt;</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">14</span>
        <div class="flex-1 pl-8">
          <span class="text-blue-400">&lt;/div&gt;</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">15</span>
        <div class="flex-1 pl-4">
          <span class="text-blue-400">&lt;/main&gt;</span>
        </div>
      </div>
      
      <!-- Line 16 with error -->
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">16</span>
        <div class="flex-1 pl-4">
          <span class="text-blue-400">&lt;footer</span>
          <span class="text-red-400 underline decoration-wavy"> class="footer-style"</span>
          <span class="text-blue-400">&gt;</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">17</span>
        <div class="flex-1 pl-8">
          <span class="text-white">© 2024 App</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">18</span>
        <div class="flex-1 pl-4">
          <span class="text-blue-400">&lt;/footer&gt;</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">19</span>
        <div class="flex-1">
          <span class="text-blue-400">&lt;/div&gt;</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">20</span>
        <div class="flex-1">
          <span class="text-purple-400">&lt;/template&gt;</span>
        </div>
      </div>
      
      <!-- Script section -->
      <div class="flex gap-3 mt-4">
        <span class="text-gray-600 select-none w-8 text-right">21</span>
        <div class="flex-1">
          <span class="text-purple-400">&lt;script setup&gt;</span>
        </div>
      </div>
      
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">22</span>
        <div class="flex-1">
          <span class="text-purple-400">import</span>
          <span class="text-red-400 underline decoration-wavy"> { ref, computed } from 'vue'</span>
        </div>
      </div>
      
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">23</span>
        <div class="flex-1">
          <span class="text-purple-400">const</span>
          <span class="text-red-400 underline decoration-wavy"> title = ref('Meu App')</span>
        </div>
      </div>
      
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">24</span>
        <div class="flex-1">
          <span class="text-purple-400">const</span>
          <span class="text-red-400 underline decoration-wavy"> items = ref([])</span>
        </div>
      </div>
      
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">25</span>
        <div class="flex-1">
          <span class="text-purple-400">const</span>
          <span class="text-red-400 underline decoration-wavy"> isLoaded = ref(false)</span>
        </div>
      </div>
      
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">26</span>
        <div class="flex-1">
          <span class="text-purple-400">function</span>
          <span class="text-red-400 underline decoration-wavy"> handleClick() {</span>
        </div>
      </div>
      
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">27</span>
        <div class="flex-1 pl-4">
          <span class="text-red-400 underline decoration-wavy">console.log('clicked')</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">28</span>
        <div class="flex-1">
          <span class="text-white">}</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">29</span>
        <div class="flex-1">
          <span class="text-purple-400">&lt;/script&gt;</span>
        </div>
      </div>
      
      <!-- Style section with errors -->
      <div class="flex gap-3 mt-4">
        <span class="text-gray-600 select-none w-8 text-right">30</span>
        <div class="flex-1">
          <span class="text-purple-400">&lt;style scoped&gt;</span>
        </div>
      </div>
      
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">31</span>
        <div class="flex-1">
          <span class="text-yellow-400">.app</span>
          <span class="text-red-400 underline decoration-wavy"> {</span>
        </div>
      </div>
      
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">32</span>
        <div class="flex-1 pl-4">
          <span class="text-blue-300">padding:</span>
          <span class="text-red-400 underline decoration-wavy"> 20px;</span>
        </div>
      </div>
      
      <div class="flex gap-3 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-gray-600 select-none w-8 text-right">33</span>
        <div class="flex-1 pl-4">
          <span class="text-blue-300">margin:</span>
          <span class="text-red-400 underline decoration-wavy"> 0 auto;</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">34</span>
        <div class="flex-1">
          <span class="text-white">}</span>
        </div>
      </div>
      
      <div class="flex gap-3">
        <span class="text-gray-600 select-none w-8 text-right">35</span>
        <div class="flex-1">
          <span class="text-purple-400">&lt;/style&gt;</span>
        </div>
      </div>
    </div>
    
    <!-- Error Summary Footer -->
    <div class="bg-red-500/10 border-t-2 border-red-500 px-4 py-3">
      <div class="flex items-start gap-3">
        <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <div class="flex-1">
          <p class="text-red-400 text-sm font-semibold mb-1">Múltiplos erros detectados:</p>
          <ul class="text-red-300 text-xs space-y-1">
            <li>• Variáveis não definidas ou não utilizadas</li>
            <li>• Falta de validação de props e tipos</li>
            <li>• Código duplicado e sem componentização</li>
            <li>• Violação de princípios de arquitetura</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

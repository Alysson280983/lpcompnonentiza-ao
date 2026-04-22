<template>
  <div class="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-xl shadow-2xl overflow-hidden">
    <!-- Header -->
    <div class="bg-gray-900/50 px-4 py-3 border-b border-white/10 flex items-center gap-2">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <span class="text-white/70 text-sm font-mono ml-3">Estrutura do Projeto</span>
    </div>
    
    <!-- Content -->
    <div class="p-6 font-mono text-sm">
      <!-- Folder Tree -->
      <div class="space-y-2">
        <!-- app folder -->
        <div class="flex items-center gap-2 text-white">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
          <span>app</span>
        </div>
        
        <!-- components folder -->
        <div class="flex items-center gap-2 text-white/90 pl-6">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
          <span>components</span>
        </div>
        
        <!-- BaseButton.vue -->
        <div class="flex items-center gap-2 text-green-300 pl-12">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
          </svg>
          <span>BaseButton.vue</span>
        </div>
        
        <!-- BaseInput.vue -->
        <div class="flex items-center gap-2 text-green-300 pl-12">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
          </svg>
          <span>BaseInput.vue</span>
        </div>
        
        <!-- composables folder -->
        <div class="flex items-center gap-2 text-white/90 pl-6">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
          <span>composables</span>
        </div>
        
        <!-- useCustomer.ts -->
        <div class="flex items-center gap-2 text-blue-300 pl-12">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
          </svg>
          <span>useCustomer.ts</span>
        </div>
        
        <!-- pages folder -->
        <div class="flex items-center gap-2 text-white/90 pl-6">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
          <span>pages</span>
        </div>
        
        <!-- index.vue -->
        <div class="flex items-center gap-2 text-green-300 pl-12">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
          </svg>
          <span>index.vue</span>
        </div>
        
        <!-- app.vue -->
        <div class="flex items-center gap-2 text-green-300 pl-6">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
          </svg>
          <span>app.vue</span>
        </div>
      </div>
      
      <!-- Code Preview -->
      <div class="mt-6 pt-6 border-t border-white/10">
        <div class="text-white/60 text-xs mb-3">// Componentes isolados e reutilizáveis</div>
        <div class="space-y-1 text-xs">
          <div><span class="text-purple-300">import</span> <span class="text-blue-300">BaseButton</span> <span class="text-purple-300">from</span> <span class="text-green-300">'./components'</span></div>
          <div><span class="text-purple-300">import</span> <span class="text-blue-300">BaseInput</span> <span class="text-purple-300">from</span> <span class="text-green-300">'./components'</span></div>
          <div><span class="text-purple-300">import</span> <span class="text-blue-300">{ useCustomer }</span> <span class="text-purple-300">from</span> <span class="text-green-300">'./composables'</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

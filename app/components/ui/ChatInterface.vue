<template>
  <div class="relative w-full bg-gray-900 rounded-2xl p-6 shadow-2xl border-2 border-purple-500/50">
    <!-- Header -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold text-gray-400">{{ titulo }}</h3>
    </div>
    
    <!-- Chat Input Area -->
    <div class="bg-gray-800 rounded-xl p-6 border border-purple-500/30">
      <!-- Placeholder Text -->
      <div class="text-gray-500 text-sm mb-4">
        Ask a question or describe a task...
      </div>
      
      <!-- User Input Text -->
      <div class="text-white text-lg mb-6">
        {{ texto }}<span class="animate-pulse">|</span>
      </div>
      
      <!-- AI Response - Generating Code -->
      <div class="bg-gray-900 rounded-lg p-4 border border-gray-700">
        <div class="flex items-center gap-2 mb-3">
          <div class="flex gap-1">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span class="text-gray-400 text-xs">app.tsx</span>
        </div>
        
        <div class="space-y-2 font-mono text-sm">
          <div class="text-purple-400">import <span class="text-blue-400">React</span> from <span class="text-green-400">'react'</span></div>
          <div class="text-purple-400">import <span class="text-blue-400">{ useState }</span> from <span class="text-green-400">'react'</span></div>
          <div class="text-gray-500">// Gerando código...</div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-4 bg-blue-500 animate-pulse"></div>
            <span class="text-gray-600">█</span>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="flex items-center justify-between pt-4 border-t border-gray-700">
        <!-- Left Icons -->
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
            <span class="text-purple-400 text-xl">#</span>
          </div>
          <div class="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
        </div>
        
        <!-- Right Side -->
        <div class="flex items-center gap-4">
          <!-- Model Selector -->
          <div class="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
            <span class="text-white text-sm">Claude Sonnet 4.5</span>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <!-- Autopilot Toggle -->
          <div class="flex items-center gap-2">
            <span class="text-white text-sm">Autopilot</span>
            <div class="w-12 h-6 bg-purple-600 rounded-full flex items-center justify-end px-1">
              <div class="w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
          
          <!-- Send Button -->
          <button class="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titulo: string
  texto: string
}>()
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-pulse {
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

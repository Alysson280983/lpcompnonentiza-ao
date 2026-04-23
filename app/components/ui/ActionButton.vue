<template>
  <button 
    @click="scrollToCheckout"
    class="px-8 py-4 bg-secondary-500 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:bg-secondary-600 transition-all duration-300"
  >
    {{ texto }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  texto: string
}>()

const scrollToCheckout = () => {
  const checkoutSection = document.getElementById('checkout-section')
  if (checkoutSection) {
    checkoutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

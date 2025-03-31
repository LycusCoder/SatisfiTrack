<script setup>
// Import dependencies
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

// Dark mode state
const isDarkMode = ref(false)
const isMobileMenuOpen = ref(false) // Tambahkan ini

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Set initial dark mode state
onMounted(() => {
  isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', isDarkMode.value)
})
</script>

<template>
  <div :class="{ 'dark': isDarkMode }">
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <!-- Header -->
      <header class="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo/Brand -->
            <div class="flex-shrink-0 flex items-center">
              <RouterLink to="/"
                class="text-2xl font-bold text-white dark:text-blue-400 hover:text-yellow-300 transition duration-300">
                SatisfiTrack
              </RouterLink>
            </div>

            <!-- Navigasi Utama -->
            <nav class="hidden md:flex space-x-8">
              <RouterLink to="/analisis"
                class="text-white dark:text-gray-300 hover:text-yellow-300 dark:hover:text-yellow-300 transition duration-300"
                active-class="text-yellow-300 dark:text-yellow-300 font-semibold">
                Analisis Ulasan
              </RouterLink>
              <RouterLink to="/dashboard"
                class="text-white dark:text-gray-300 hover:text-yellow-300 dark:hover:text-yellow-300 transition duration-300"
                active-class="text-yellow-300 dark:text-yellow-300 font-semibold">
                Dashboard
              </RouterLink>
            </nav>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
              <button @click="toggleMobileMenu"
                class="text-white dark:text-gray-300 hover:text-yellow-300 transition duration-300">
                <Icon :icon="['fas', 'bars']" />
              </button>
            </div>

            <!-- Dark Mode Toggle -->
            <div class="hidden md:flex items-center">
              <button @click="toggleDarkMode"
                class="text-white dark:text-gray-300 hover:text-yellow-300 transition duration-300">
                <Icon :icon="isDarkMode ? ['fas', 'sun'] : ['fas', 'moon']" />
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <nav class="px-2 pt-2 pb-3 space-y-1">
            <RouterLink to="/analisis"
              class="block text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2 text-base font-medium"
              active-class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
              Analisis Ulasan
            </RouterLink>
            <RouterLink to="/dashboard"
              class="block text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2 text-base font-medium"
              active-class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
              Dashboard
            </RouterLink>
            <button @click="toggleDarkMode"
              class="block w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2 text-base font-medium">
              <Icon :icon="isDarkMode ? ['fas', 'sun'] : ['fas', 'moon']" /> Toggle Dark Mode
            </button>
          </nav>
        </div>
      </header>

      <!-- Konten Utama -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RouterView />
      </main>

      <!-- Footer -->
      <footer class="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 shadow-lg mt-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <!-- Brand/Logo -->
            <div class="flex-shrink-0 flex items-center mb-4 md:mb-0">
              <RouterLink to="/"
                class="text-2xl font-bold text-white dark:text-blue-400 hover:text-yellow-300 transition duration-300">
                SatisfiTrack
              </RouterLink>
            </div>

            <!-- Navigation Links -->
            <nav class="flex space-x-4 mb-4 md:mb-0">
              <RouterLink to="/analisis"
                class="text-white dark:text-gray-300 hover:text-yellow-300 dark:hover:text-yellow-300 transition duration-300"
                active-class="text-yellow-300 dark:text-yellow-300 font-semibold">
                Analisis Ulasan
              </RouterLink>
              <RouterLink to="/dashboard"
                class="text-white dark:text-gray-300 hover:text-yellow-300 dark:hover:text-yellow-300 transition duration-300"
                active-class="text-yellow-300 dark:text-yellow-300 font-semibold">
                Dashboard
              </RouterLink>
            </nav>

            <!-- Social Media Icons -->
            <div class="flex space-x-4">
              <a href="https://facebook.com" target="_blank"
                class="text-white dark:text-gray-300 hover:text-yellow-300 transition duration-300">
                <Icon :icon="['fab', 'facebook-f']" />
              </a>
              <a href="https://twitter.com" target="_blank"
                class="text-white dark:text-gray-300 hover:text-yellow-300 transition duration-300">
                <Icon :icon="['fab', 'twitter']" />
              </a>
              <a href="https://linkedin.com" target="_blank"
                class="text-white dark:text-gray-300 hover:text-yellow-300 transition duration-300">
                <Icon :icon="['fab', 'linkedin-in']" />
              </a>
              <a href="https://instagram.com" target="_blank"
                class="text-white dark:text-gray-300 hover:text-yellow-300 transition duration-300">
                <Icon :icon="['fab', 'instagram']" />
              </a>
            </div>
          </div>

          <!-- Copyright -->
          <div class="mt-4">
            <p class="text-center text-gray-200 dark:text-gray-400">
              &copy; 2024 SatisfiTrack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
/* custom style global */
</style>
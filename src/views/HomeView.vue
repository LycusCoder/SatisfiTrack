<!-- HomeView.vue -->
<template>
    <div class="relative bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
        <!-- Overlay Semi-Transparan -->
        <div class="absolute inset-0 bg-black opacity-40"></div>

        <!-- Konten Utama -->
        <div class="relative z-10 text-center p-8">
            <h1 class="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                SatisfiTrack
            </h1>
            <p class="text-2xl text-gray-200 mb-8 drop-shadow-lg">
                Sistem Prediksi Kepuasan Pelanggan Berbasis AI
            </p>

            <div class="space-x-4">
                <router-link to="/analisis"
                    class="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                    Mulai Analisis
                </router-link>
                <router-link to="/dashboard"
                    class="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
                    Lihat Dashboard
                </router-link>
            </div>
        </div>
    </div>
</template>

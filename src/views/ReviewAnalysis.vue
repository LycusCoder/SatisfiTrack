<template>
    <div class="p-4">
        <h2 class="text-2xl font-bold mb-4">Analisis Ulasan Pelanggan</h2>

        <!-- Input Group -->
        <div class="mb-4">
            <textarea v-model="reviewText" placeholder="Masukkan ulasan pelanggan..."
                class="w-full h-32 p-2 border rounded mb-2" />

            <!-- File Upload -->
            <div class="flex gap-2">
                <input type="file" accept=".txt" @change="handleFileUpload"
                    class="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-100 file:text-gray-700" />
                <button @click="handleAnalyzeSentiment"
                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Analisis Sentimen
                </button>
            </div>

            <!-- Petunjuk Penggunaan -->
            <p class="mt-2 text-sm text-gray-600">
                Format file .txt:<br>
                - 1 ulasan per baris<br>
                - Contoh: <br>
                <span class="text-xs">"Pelayanan cepat, produk bagus"</span>
            </p>
        </div>

        <!-- Hasil Analisis -->
        <div v-if="results.length" class="mt-4 p-4 border rounded">
            <h3 class="font-semibold mb-2">Hasil Analisis:</h3>
            <div v-for="(res, index) in results" :key="index" class="mb-2 p-2 bg-gray-50 rounded">
                <p class="text-xs text-gray-500">Ulasan #{{ index + 1 }}</p>
                <p>Hasil: <strong>{{ res.sentiment }}</strong></p>
                <p>Confidence: {{ (res.confidence * 100).toFixed(2) }}%</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { analyzeSentiment as analyzeSentimentService } from '../services/sentimentService.js'

const reviewText = ref('')
const results = ref([])

// Handle file upload
const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            reviewText.value = e.target.result
        }
        reader.readAsText(file)
    }
}

// Analisis sentimen
const handleAnalyzeSentiment = () => {
    // Split ulasan per baris
    const reviews = reviewText.value.split('\n')
        .map(line => line.trim())
        .filter(line => line !== '')

    // Proses semua ulasan
    results.value = reviews.map(review => analyzeSentimentService(review))
}
</script>
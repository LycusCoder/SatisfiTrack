<template>
    <div class="p-4">
        <h2 class="text-2xl font-bold mb-4">Analisis Ulasan Pelanggan</h2>

        <textarea v-model="reviewText" placeholder="Masukkan ulasan pelanggan..."
            class="w-full h-32 p-2 border rounded" />

        <button @click="handleAnalyzeSentiment" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Analisis Sentimen
        </button>

        <div v-if="result" class="mt-4 p-4 border rounded">
            <p>Hasil: <strong>{{ result.sentiment }}</strong></p>
            <p>Confidence: {{ (result.confidence * 100).toFixed(2) }}%</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { analyzeSentiment as analyzeSentimentService } from '../services/sentimentService.js'

const reviewText = ref('')
const result = ref(null)

function handleAnalyzeSentiment() {
  console.log('== Proses Analisis ==')
  console.log('Teks ulasan:', reviewText.value)
  
  const analysisResult = analyzeSentimentService(reviewText.value)
  
  // Log hasil service
  console.log('Hasil service:', analysisResult)
  
  result.value = analysisResult
}
</script>
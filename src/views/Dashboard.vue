<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">

        <!-- Grafik Faktor Kepuasan -->
        <div class="p-4 bg-white rounded shadow">
            <h3 class="text-lg font-bold mb-4">Faktor Dominan Kepuasan</h3>
            <div class="relative h-64">
                <BarChart :data="factorData" />
            </div>
        </div>

        <!-- Distribusi Sentimen -->
        <div class="p-4 bg-white rounded shadow">
            <h3 class="text-lg font-bold mb-4">Distribusi Sentimen Ulasan</h3>
            <div class="relative h-64">
                <PieChart :data="sentimentData" />
            </div>
        </div>

        <!-- Clustering Pelanggan -->
        <div class="p-4 bg-white rounded shadow">
            <h3 class="text-lg font-bold mb-4">Kelompok Pelanggan</h3>
            <div class="relative h-64">
                <ScatterPlot :data="clusterData" />
            </div>
        </div>

        <!-- Rekomendasi Layanan -->
        <div class="bg-white p-4 rounded shadow">
            <h3 class="text-lg font-bold mb-2">Rekomendasi Perbaikan:</h3>
            <ul class="list-disc pl-4">
                <li v-for="rec in recommendations" :key="rec">
                    {{ rec }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { getDominantFactor } from '../services/decisionTreeService.js'
import { getCustomerClusters } from '../services/clusteringService.js'

// ❗❗❗ IMPORT KOMPONEN CHART.JS YANG HILANG ❗❗❗
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'
import ScatterPlot from '../components/ScatterPlot.vue'

const dominantFactor = getDominantFactor()
const clustersWithRec = getCustomerClusters()

// Data untuk visualisasi
const factorData = {
    labels: [dominantFactor.factor],
    datasets: [{
        label: 'Tingkat Pengaruh',
        data: [dominantFactor.importance],
        backgroundColor: '#4CAF50'
    }]
}

const sentimentData = {
    labels: ['Positif', 'Negatif', 'Netral'],
    datasets: [{
        data: [65, 25, 10], // Dummy data
        backgroundColor: ['#4CAF50', '#F44336', '#FFEB3B']
    }]
}

const clusterData = {
    datasets: clustersWithRec.map(cluster => ({
        label: cluster.label,
        data: Array.from({ length: 10 }, () => ({
            x: Math.random() * 10,
            y: Math.random() * 10
        })),
        backgroundColor: cluster.cluster_id === 1 ? '#4CAF50' : '#F44336'
    }))
}

// Ambil rekomendasi dari service
const recommendations = clustersWithRec
    .flatMap(cluster => cluster.recommendations)
    .slice(0, 3)
</script>
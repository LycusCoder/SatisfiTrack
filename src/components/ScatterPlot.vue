<template>
    <div class="h-full">
        <Scatter :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { Scatter } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)

const props = defineProps({
    data: Object
})

const chartData = {
    datasets: props.data.datasets
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: { type: 'linear', position: 'bottom' },
        y: { type: 'linear' }
    },
    plugins: {
        legend: { position: 'bottom' }
    }
}
</script>
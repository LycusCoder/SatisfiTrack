import clusters from '../data/clusters.json'

export function getCustomerClusters() {
  // Simulasi K-Means hasil
  return clusters.map(cluster => ({
    ...cluster,
    recommendations: getRecommendations(cluster.cluster_id)
  }))
}

function getRecommendations(clusterId) {
  return clusterId === 1 
    ? ["Tingkatkan program loyalitas", "Buat event khusus member"]
    : ["Evaluasi kebijakan harga", "Percepat waktu respon"]
}
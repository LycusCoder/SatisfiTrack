import sentimentResults from '../data/sentiment-results.json'

export function analyzeSentiment(text) {
  // Tambahkan kata "baik" ke daftar positif
  const positiveWords = ['cepat', 'ramah', 'bagus', 'puas', 'baik', 'suka']
  const negativeWords = ['mahal', 'lama', 'buruk', 'kecewa', 'jelek']
  
  // Handle input kosong
  if (!text.trim()) {
    return {
      review_id: 0,
      sentiment: 'netral',
      confidence: 0
    }
  }

  const positiveCount = positiveWords.filter(word => text.toLowerCase().includes(word)).length
  const negativeCount = negativeWords.filter(word => text.toLowerCase().includes(word)).length

  // Tentukan sentiment berdasarkan jumlah kata
  let sentiment = 'netral'
  if (positiveCount > negativeCount) {
    sentiment = 'positif'
  } else if (negativeCount > positiveCount) {
    sentiment = 'negatif'
  }

  // Hitung confidence dengan formula yang lebih baik
  const total = Math.max(positiveCount, negativeCount, 1) // Avoid division by zero
  const confidence = Math.max(positiveCount, negativeCount) / total

  return {
    review_id: 1,
    sentiment: sentiment,
    confidence: confidence
  }
}
import factors from '../data/factors.json'

export function getDominantFactor() {
  // Simulasi C4.5 dengan mengambil faktor terbesar
  return factors.reduce((max, factor) => 
    factor.importance > max.importance ? factor : max
  )
}
# 🚀 SatisfiTrack - Template Prediksi Kepuasan Pelanggan  
![Version](https://img.shields.io/badge/version-1.0.0-blue)  
![Vue.js](https://img.shields.io/badge/vue-3.x-brightgreen)  
![License](https://img.shields.io/badge/license-Apache%202.0-blue)

Aplikasi template untuk analisis dan prediksi kepuasan pelanggan menggunakan algoritma Machine Learning (Naïve Bayes, C4.5, K-Means) dengan Vue 3 + Vite.

## 🌟 Fitur Utama
- **Analisis Sentimen** 📊  
  Klasifikasi ulasan pelanggan ke dalam kategori positif/negatif/netral menggunakan Text Mining & Naïve Bayes
- **Decision Tree (C4.5)** 🌳  
  Identifikasi faktor dominan yang memengaruhi kepuasan pelanggan
- **K-Means Clustering** 🧩  
  Pengelompokan pelanggan berdasarkan pola kepuasan dan rekomendasi layanan
- **Visualisasi Interaktif** 📈  
  Grafik dinamis (Bar, Pie, Scatter) menggunakan Chart.js
- **Dark Mode Support** 🌙  
  Tampilan responsif dengan Tailwind CSS

## 📦 Teknologi
- Frontend: Vue 3 + Vite + Tailwind CSS
- Visualisasi: Chart.js + vue-chartjs
- Data Dummy: JSON static files
- Algoritma: Simulasi ML sederhana

## 🛠️ Instalasi
```bash
# Clone repository
git clone https://github.com/nourivex/satisfitrack.git
cd satisfitrack

# Install dependencies
npm install

# Jalankan aplikasi
npm run dev
```

## 📚 Struktur Direktori
```
src/
├── assets/          # Gambar dan file statis
├── components/      # Komponen Vue (BarChart, PieChart, dll)
├── data/            # File JSON dummy
├── services/        # Logika simulasi algoritma ML
├── views/           # Halaman utama (Dashboard, Analisis)
└── router/          # Konfigurasi routing
```

## 📊 Demo
![Dashboard](https://i.imgur.com/IMUnUDv.png)

## 🤝 Kontribusi
1. Fork repository
2. Buat branch baru (`git checkout -b fitur-anda`)
3. Commit perubahan (`git commit -m 'Tambahkan fitur X'`)
4. Push ke branch (`git push origin fitur-anda`)
5. Buat Pull Request

## 📝 Lisensi
Apache 2.0 License - Lihat file [LICENSE](LICENSE) untuk detail.

## 📧 Kontak
Developed by **Nourivex**  
Email: [![Email](https://img.shields.io/badge/Email-affif%40nourivex.tech-blue?style=flat&logo=gmail)](mailto:affif@nourivex.tech)  
LinkedIn: [Affif Profile](https://linkedin.com/in/nourivex)  
Website: [nourivex.tech](https://nourivex.tech)
```

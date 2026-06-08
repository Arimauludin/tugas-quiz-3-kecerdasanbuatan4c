# 🏆 OptiSim Web: Dashboard Simulasi Algoritma Optimasi & Pencarian Lokal

[![Vite](https://img.shields.io/badge/Vite-B738FR?style=for-the-badge&logo=vite&logoColor=FFD622)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Aplikasi web interaktif berbasis **React** dan **Vite** yang dirancang untuk mensimulasikan, memvisualisasikan, dan membandingkan performa berbagai varian algoritma kecerdasan buatan pada pencarian lokal (*local search*) dan penyelesaian masalah optimasi fungsi matematika nonlinear multivariabel.

> 📝 **Tugas Mandiri Proyek 3 - Mata Kuliah Kecerdasan Buatan (Kelas 4C)**

---

## 🚀 Fitur Utama Sistem

Sesuai dengan ketentuan dan spesifikasi teknis pada modul proyek, aplikasi ini mengintegrasikan komponen-komponen berikut:

1. **Implementasi Algoritma Optimasi Lengkap**:
   - **Hill Climbing**: Mendukung varian *Simple Hill Climbing*, *Steepest-Ascent Hill Climbing*, dan *Stochastic Hill Climbing* lengkap dengan fitur kontrol *Step Size*.
   - **Simulated Annealing**: Menggunakan parameter dinamis berupa Suhu Awal ($T_0$), Laju Pendinginan (*Cooling Rate*), dan Suhu Minimum ($T_{min}$) berbasis probabilitas Boltzmann.
   - **Genetic Algorithm (GA)**: Dilengkapi kontrol ukuran populasi, probabilitas crossover, probabilitas mutasi, serta mekanisme **Elitisme** untuk menjaga kromosom terbaik.
2. **Penanganan Local Optima**: Demonstrasi interaktif visualisasi konvergensi menggunakan fungsi uji matematika benchmark (**Rastrigin Function** & **Ackley Function**) dilengkapi fitur otomatis **Random Restart**.
3. **Komparasi Performa Real-Time**: Menyajikan tabel metrik komparatif yang mengukur kualitas solusi akhir (nilai *cost* terkecil), koordinat spasial $(X,Y)$, total iterasi/generasi sebenarnya, hingga **Waktu Konvergensi Kompilasi dalam satuan Milidetik (ms)**.
4. **Antarmuka Responsif (UI/UX)**: Layout dashboard modern *side-by-side* yang memisahkan panel kontrol parameter masukan dengan grafik kurva interaktif (Chart.js) serta tabel ringkasan metrik.

---

## 🛠️ Teknologi & Library yang Digunakan

- **Frontend Core**: React.js (Hooks: `useState`, `useEffect`, `useMemo`)
- **Build Tool**: Vite (Kompilasi super cepat berbasis ES Modules)
- **Styling Engine**: Tailwind CSS & Inline Styles untuk perataan layout kontainer
- **Visualisasi Grafik**: Chart.js & `react-chartjs-2`
- **Deployment Platform**: Netlify / Vercel

---

## 📁 Struktur Folder Proyek

```text
optimasi-quiz-3-kecerdasanbuatan-4c/
├── public/                 # Aset statis & Favicon
├── src/
│   ├── algorithms/        # Core Engine Logika Algoritma (Poin B.1 - B.3)
│   │   ├── benchmarks.js       # Rumus Matematika Rastrigin & Ackley
│   │   ├── hillClimbing.js     # 3 Varian HC + Random Restart
│   │   ├── simulatedAnnealing.js
│   │   └── geneticAlgorithm.js # GA + Logika Elitisme
│   ├── components/        # Komponen Antarmuka Dashboard (Poin C.1)
│   │   ├── Navbar.jsx
│   │   ├── SidebarControls.jsx # Panel Kontrol Input Dinamis
│   │   ├── VisualizerChart.jsx # Grafik Kurva Konvergensi
│   │   └── ComparisonTable.jsx # Tabel Hasil Komparatif & Metrik Waktu (ms)
│   ├── utils/             # Helper fungsi matematika
│   ├── App.jsx            # State Management Utama & Layout Grid
│   ├── index.css          # Tailwind Directives & Base Style
│   └── main.jsx           # React DOM Render Entrypoint
├── package.json           # Dependensi & Script Project
├── vite.config.js         # Konfigurasi Module Bundler Vite
└── README.md              # Dokumentasi Resmi Proyek Repository
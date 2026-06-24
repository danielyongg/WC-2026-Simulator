# ⚽ FIFA World Cup 2026 Simulator

> Simulate the entire FIFA World Cup 2026 — group stage, knockout rounds, and championship — all in your browser.

---

## 🌍 Demo

🔗 **[Coba Langsung →](https://danielyongg.github.io/WC-2026-Simulator)**

> *Buka `index.html` di browser untuk menjalankan secara lokal.*

---

## 📸 Screenshots

<!-- Ganti dengan screenshot asli kamu -->
| Group Stage | Knockout Bracket | Champion |
|---|---|---|
| *(screenshot)* | *(screenshot)* | *(screenshot)* |

---

## ✨ Fitur

- 🏟️ **48 Tim Peserta** — Semua tim resmi FIFA World Cup 2026
- 🗂️ **Group Stage Simulator** — Simulasi 12 grup (Grup A–L) dengan sistem poin
- 🥊 **Knockout Bracket** — Round of 32, 16, Quarter-Final, Semi-Final, hingga Final
- 🎲 **Monte Carlo Probability** — Perhitungan probabilitas juara berbasis simulasi statistik
- 📡 **Live Score Integration** — Auto-populate hasil pertandingan nyata via ESPN API
- 📱 **Export ke Instagram / TikTok** — Ekspor hasil bracket sebagai gambar PNG (1080×1940)
- 🌐 **Zero Dependency** — Vanilla JS murni, tidak butuh Node.js atau framework apapun
- 📂 **Single File** — Seluruh aplikasi dalam satu file `index.html`

---

## 🚀 Cara Pakai

### Opsi 1 — Buka Langsung di Browser
1. Download atau clone repo ini
2. Buka file `index.html` di browser (Chrome / Firefox / Edge)
3. Klik **"Simulate"** untuk mulai simulasi

```bash
git clone https://github.com/danielyongg/WC-2026-Simulator.git
cd WC-2026-Simulator
# Buka index.html di browser
```

### Opsi 2 — GitHub Pages (Online)
Akses langsung tanpa download:
👉 `https://danielyongg.github.io/WC-2026-Simulator`

---

## 📁 Struktur File

```
WC-2026-Simulator/
├── index.html       ← Versi terbaru (selalu gunakan ini)
└── README.md
```

---

## 📋 Changelog

| Versi | Tanggal | Perubahan |
|-------|---------|-----------|
| v1.4.3 | Jun 2025 | Bug fix & penyempurnaan bracket |
| v1.3.1 | Jun 2025 | Perbaikan logika third-place team assignment (FIFA Annex C) |
| v1.3 | Jun 2025 | Refactor ke zero-dependency vanilla JS |
| v1.2.1 | Mei 2025 | Perbaikan export image |
| v1.2 | Mei 2025 | Tambah fitur export PNG untuk Instagram Stories / TikTok |
| v1.1.2 | Mei 2025 | Perbaikan ESPN API proxy fallback |
| v1.1.1 | Mei 2025 | Bug fix live score |
| v1.1 | Mei 2025 | Tambah live score integration via ESPN API |
| v1.0 | Mei 2025 | Rilis pertama — group stage, knockout bracket, Monte Carlo |

---

## 🛠️ Teknologi

- **HTML5 / CSS3 / Vanilla JavaScript** — tidak ada framework
- **html2canvas** — untuk ekspor gambar bracket
- **ESPN API** — untuk data live score (dengan multi-proxy fallback)

---

## 🤝 Kontribusi

Pull request dan masukan sangat diterima! Untuk perubahan besar, harap buka Issue terlebih dahulu untuk mendiskusikan apa yang ingin kamu ubah.

---

## 📄 License

[MIT](LICENSE) © 2025 danielyongg

---

## 👤 Author

**Daniel Yong**
- GitHub: [@danielyongg](https://github.com/danielyongg)

---

*Dibuat dengan ❤️ untuk simulasi World Cup 2026 yang seru!*

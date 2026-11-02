# KAS Production — Landing Page (Next.js)

Landing page KAS Production, dibangun dengan **Next.js (App Router) + TypeScript**.
Tampilan sama dengan versi HTML yang sudah di-approve (hitam / putih / merah KAS `#D82427`).

---

## 1. Yang perlu di-install dulu

| Tool | Versi | Cek di terminal |
|------|-------|-----------------|
| **Node.js** | 20 LTS atau lebih baru | `node -v` |
| **npm** (ikut Node.js) | 10+ | `npm -v` |
| Code editor (opsional) | VS Code | — |

Kalau `node -v` belum muncul / versinya di bawah 20:

- **Windows / macOS:** download installer LTS di <https://nodejs.org>, install, lalu **tutup dan buka lagi terminalnya**.
- **macOS (Homebrew):** `brew install node`
- **Linux / macOS (nvm):**
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
  # buka terminal baru, lalu:
  nvm install 20
  nvm use 20
  ```

---

## 2. Install & jalankan di local

1. **Extract** file `kas-nextjs.zip`, lalu buka terminal di dalam foldernya:

   ```bash
   cd kas-nextjs
   ```

   (Atau di VS Code: *File → Open Folder → kas-nextjs*, lalu *Terminal → New Terminal*.)

2. **Install dependency** (butuh internet, hanya sekali):

   ```bash
   npm install
   ```

3. **Jalankan development server:**

   ```bash
   npm run dev
   ```

4. Buka browser ke **<http://localhost:3000>**.

   Setiap file yang lu simpan akan langsung ter-refresh otomatis (hot reload).
   Untuk menghentikan server: tekan `Ctrl + C` di terminal.

> **Catatan:** Font Inter diambil lewat `next/font/google`. Saat pertama kali `npm run dev` / `npm run build`, komputer harus online supaya font bisa diunduh. Setelah itu di-cache.

---

## 3. Menjalankan versi production (opsional)

Untuk mengecek hasil build yang sebenarnya:

```bash
npm run build
npm start
```

Lalu buka <http://localhost:3000>. Kalau `npm run build` menampilkan error TypeScript, baca pesannya, biasanya menunjuk file dan barisnya langsung.

---

## 4. Mengganti logo, foto, dan video

Semua aset diatur dari file `lib/site.ts` dan `lib/data.ts`. Kode komponen tidak perlu diubah.

### Logo KAS
1. Copy file logo ke `public/images/kas-logo.png` (pakai versi untuk background hitam).
2. Di `lib/site.ts`:
   ```ts
   logoSrc: "/images/kas-logo.png",
   ```
   Kotak putus-putus "KAS logo here" otomatis diganti logo asli (header dan footer).

### Foto hero
1. Taruh foto di `public/images/hero.jpg`.
2. Di `lib/site.ts`: `heroImage: "/images/hero.jpg",`

### Video hero (opsional)
1. Taruh video di `public/videos/hero.mp4` (disarankan di bawah 10 MB, tanpa audio, 1080p atau lebih kecil).
2. Di `lib/site.ts`:
   ```ts
   heroVideo: "/videos/hero.mp4",
   heroPoster: "/images/hero.jpg", // gambar yang tampil sebelum video load
   ```

### Foto service, gallery, dan project
Di `lib/data.ts`, isi field `image` dengan path foto di folder `public`, contoh:

```ts
{ title: "Tent", description: "...", image: "/images/tent.jpg", tone: "" },
```

Selama `image` masih `null`, halaman menampilkan placeholder gelap.

### Kontak
Ganti email, telepon, lokasi, dan Instagram di `lib/site.ts`.

### Data project
Edit array `projects` di `lib/data.ts`. Isi hanya data yang sudah dikonfirmasi klien (nama project, tipe event, lokasi, layanan).

---

## 5. Struktur folder

```text
kas-nextjs/
├── app/
│   ├── layout.tsx        # <html>, font Inter, metadata SEO
│   ├── page.tsx          # susunan section halaman
│   └── globals.css       # semua style + design token KAS
├── components/
│   ├── Header.tsx        # (client) sticky header, dropdown, menu mobile
│   ├── Hero.tsx
│   ├── HeroVideo.tsx     # (client) video hero, hormati reduced-motion
│   ├── Intro.tsx         # intro + gallery 4 foto
│   ├── Services.tsx      # 8 kartu service
│   ├── Capabilities.tsx  # section gelap
│   ├── Projects.tsx      # Selected Projects
│   ├── CTA.tsx           # CTA merah
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── Photo.tsx         # foto asli (next/image) atau placeholder
│   └── Icons.tsx
├── lib/
│   ├── site.ts           # logo, video, kontak
│   └── data.ts           # nav, services, gallery, projects
├── public/
│   ├── images/           # taruh foto & logo di sini
│   └── videos/           # taruh video di sini
├── package.json
├── tsconfig.json
└── next.config.mjs
```

Warna dan token ada di bagian `:root` di `app/globals.css` (`--kas-red`, `--kas-dark`, dst.).

---

## 6. Troubleshooting

| Masalah | Solusi |
|---------|--------|
| `npm: command not found` / `node: command not found` | Node.js belum ter-install atau terminal belum dibuka ulang. Ikuti langkah di bagian 1. |
| `You are using Node.js 18...` (versi tidak didukung) | Update ke Node 20 LTS (`nvm install 20 && nvm use 20`). |
| `Port 3000 is in use` | Tutup proses lain di port itu, atau jalankan `npm run dev -- -p 3001` lalu buka `localhost:3001`. |
| `npm install` gagal / lambat / `ETIMEDOUT` | Cek koneksi internet / VPN / proxy, lalu coba lagi. Kalau masih gagal: hapus `node_modules` dan `package-lock.json`, lalu `npm install` ulang. |
| Error saat download font Inter | Pastikan online saat `npm run dev` pertama kali. |
| Windows PowerShell: *running scripts is disabled* | Jalankan terminal sebagai Administrator: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, atau pakai Command Prompt / Git Bash. |
| Foto tidak muncul | Path harus diawali `/` dan sesuai nama file di `public/` (huruf besar/kecil berpengaruh). Restart `npm run dev` kalau baru menambah file. |
| Perubahan tidak muncul | Hard refresh (`Ctrl + Shift + R`) atau restart `npm run dev`. |

---

## 7. Deploy (opsional)

Cara termudah: push project ke GitHub, lalu import di <https://vercel.com/new>. Framework Next.js terdeteksi otomatis, tidak perlu setting tambahan.

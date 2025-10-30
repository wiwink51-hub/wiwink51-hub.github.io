# GitHub Pages Deployment Guide

## Konfigurasi yang Sudah Disiapkan

Proyek ini sudah dikonfigurasi untuk deployment ke GitHub Pages dengan pengaturan berikut:

### 1. Vite Configuration (`vite.config.ts`)
- ✅ `base: "/"` - Diset untuk root directory GitHub Pages
- ✅ `host: "0.0.0.0"` - Agar bisa diakses di Replit
- ✅ `port: 5000` - Port standar untuk Replit webview

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Workflow otomatis sudah dibuat untuk deploy ke GitHub Pages saat push ke branch `main`.

## Cara Deploy ke GitHub Pages

### Langkah 1: Setup Repository GitHub
1. Buat repository baru di GitHub
2. Push kode Anda ke GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

### Langkah 2: Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Klik **Settings** → **Pages**
3. Di bagian **Source**, pilih **GitHub Actions**
4. Workflow akan otomatis berjalan setiap kali ada push ke branch `main`

### Langkah 3: Akses Website Anda
Setelah workflow selesai, website Anda akan tersedia di:
- Untuk user/organization site: `https://username.github.io/`
- Untuk project repository: `https://username.github.io/repo-name/`

## Catatan Penting

### Jika Deploy ke Project Repository (bukan root)
Jika Anda deploy ke `https://username.github.io/repo-name/`, ubah `base` di `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: "/repo-name/",  // Ganti dengan nama repo Anda
  // ... konfigurasi lainnya
}));
```

### Testing Build Locally
Untuk test production build sebelum deploy:

```bash
npm run build      # Build project
npm run preview    # Preview production build
```

## Struktur File yang Penting

```
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── vite.config.ts        # Vite configuration
├── dist/                 # Build output (git ignored)
└── src/                  # Source code
```

## Troubleshooting

### Assets tidak load (404 errors)
- Pastikan `base` di `vite.config.ts` sesuai dengan URL GitHub Pages Anda
- Root deployment: `base: "/"`
- Project deployment: `base: "/repo-name/"`

### Workflow gagal
- Cek tab **Actions** di GitHub untuk melihat error log
- Pastikan dependencies di `package.json` sudah lengkap
- Pastikan semua file yang dibutuhkan sudah di-commit

### Website tidak update
- Cek apakah workflow sudah selesai di tab **Actions**
- Clear cache browser Anda
- Tunggu beberapa menit untuk propagasi perubahan

## Pengembangan Lokal di Replit

Server development sudah berjalan di port 5000 dengan konfigurasi:
- Host: `0.0.0.0` (accessible from Replit webview)
- Port: `5000` (required for Replit)
- Hot reload: Enabled

Jalankan dengan:
```bash
npm run dev
```

# 📘 Panduan Deployment ke GitHub Pages (Root Directory)

## ✅ Konfigurasi Sudah Siap!

Website Anda sudah dikonfigurasi untuk deploy ke **https://wiwink51-hub.github.io/** di root directory (/).

### Yang Sudah Dikonfigurasi:
- ✅ `vite.config.ts` → `base: "/"` (untuk root directory)
- ✅ `.github/workflows/deploy.yml` → Workflow otomatis
- ✅ Port 5000 untuk development di Replit

---

## 🚀 Langkah-Langkah Deployment

### Langkah 1: Buat Repository di GitHub

**PENTING:** Nama repository HARUS **`wiwink51-hub.github.io`** (sesuai username Anda)

1. Buka [GitHub](https://github.com)
2. Klik tombol **"New repository"** (tombol hijau)
3. Isi nama repository: **`wiwink51-hub.github.io`**
4. Pilih **Public**
5. **JANGAN** centang "Add a README file"
6. Klik **"Create repository"**

---

### Langkah 2: Push Kode ke GitHub

Di Replit Shell, jalankan perintah berikut:

```bash
# Inisialisasi Git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit - HomeNest website"

# Ganti nama branch ke main
git branch -M main

# Tambahkan remote GitHub (GANTI dengan URL Anda)
git remote add origin https://github.com/wiwink51-hub/wiwink51-hub.github.io.git

# Push ke GitHub
git push -u origin main
```

**Catatan:** Anda mungkin perlu memasukkan username dan Personal Access Token GitHub.

---

### Langkah 3: Aktifkan GitHub Pages

1. Buka repository Anda di GitHub: `https://github.com/wiwink51-hub/wiwink51-hub.github.io`
2. Klik tab **"Settings"** (Pengaturan)
3. Di menu sebelah kiri, klik **"Pages"**
4. Di bagian **"Source"**, pilih **"GitHub Actions"**
5. Selesai! Workflow akan otomatis berjalan

---

### Langkah 4: Tunggu Deployment

1. Klik tab **"Actions"** di repository GitHub Anda
2. Anda akan melihat workflow **"Deploy to GitHub Pages"** sedang berjalan
3. Tunggu hingga muncul tanda centang hijau (✓)
4. Website Anda sekarang live di: **https://wiwink51-hub.github.io/**

---

## 🔄 Update Website di Masa Depan

Setiap kali Anda melakukan perubahan:

```bash
# Tambahkan perubahan
git add .

# Commit dengan pesan
git commit -m "Update: deskripsi perubahan"

# Push ke GitHub
git push
```

Workflow akan otomatis rebuild dan deploy website Anda!

---

## 🧪 Test Build Sebelum Deploy

Untuk memastikan website bisa di-build dengan benar:

```bash
# Build production
npm run build

# Preview production build
npm run preview
```

Buka preview di browser untuk memastikan semuanya berfungsi.

---

## ❌ Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/wiwink51-hub/wiwink51-hub.github.io.git
```

### Error: "Updates were rejected"
```bash
git pull origin main --rebase
git push
```

### Workflow Gagal di GitHub Actions
1. Buka tab **Actions** di GitHub
2. Klik pada workflow yang gagal
3. Lihat error message
4. Biasanya karena:
   - Dependency tidak lengkap (sudah aman karena `npm ci`)
   - Syntax error di kode
   - Permissions tidak benar (sudah dikonfigurasi)

### Website Tidak Muncul
1. Pastikan workflow sudah selesai (tanda centang hijau)
2. Tunggu 1-2 menit untuk propagasi
3. Clear cache browser (Ctrl + Shift + R)
4. Coba akses di incognito/private mode

### Assets/Gambar Tidak Muncul (404)
- Pastikan `base: "/"` di `vite.config.ts` (sudah benar)
- Check console browser untuk error
- Pastikan path file benar

---

## 📁 Struktur File Penting

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # ← Workflow otomatis
├── src/                        # Source code
├── public/                     # Static assets
├── dist/                       # Build output (di-generate)
├── vite.config.ts             # ← Konfigurasi Vite
├── package.json               # Dependencies
└── PANDUAN_DEPLOYMENT_GITHUB_PAGES.md  # File ini
```

---

## 🎯 Checklist Deployment

- [ ] Repository dibuat dengan nama **`wiwink51-hub.github.io`**
- [ ] Kode sudah di-push ke GitHub
- [ ] GitHub Pages diaktifkan dengan **"GitHub Actions"** sebagai source
- [ ] Workflow di tab Actions selesai dengan sukses (✓)
- [ ] Website bisa diakses di https://wiwink51-hub.github.io/

---

## 💡 Tips

1. **Gunakan Personal Access Token** untuk authentication (bukan password):
   - GitHub Settings → Developer settings → Personal access tokens → Generate new token
   - Pilih scope: `repo`
   - Copy token dan gunakan sebagai password saat push

2. **Simpan URL website** untuk referensi:
   - https://wiwink51-hub.github.io/

3. **Monitor deployment**:
   - Selalu cek tab Actions setelah push
   - Pastikan workflow selesai sebelum cek website

4. **Custom domain** (opsional):
   - Di Settings → Pages → Custom domain
   - Masukkan domain Anda dan ikuti instruksi DNS

---

## 📞 Butuh Bantuan?

Jika mengalami masalah:
1. Cek tab **Issues** di GitHub repository
2. Lihat log di tab **Actions** untuk error details
3. Pastikan semua langkah di atas sudah diikuti dengan benar

---

**Selamat! Website Anda siap di-deploy! 🎉**

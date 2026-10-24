# Product Requirements Document (PRD)

**Project Name:** Mahes Ayu - Refactor Landing Page to Company Profile
**Context:** Mengubah website landing page undangan/RSVP menjadi website Company Profile resmi untuk "Mahes Ayu" (Penyedia Layanan Pagar Ayu/Wedding Ushers).
**Tech Stack:** Laravel, React.js (TypeScript), Inertia.js, Tailwind CSS, Shadcn UI.

## 1. Objective & Design Guidelines

- **Goal:** Merombak susunan _section_ pada halaman utama (`welcome.tsx`) menjadi format _Company Profile_.
- **Theme & Colors (CRITICAL):**
    - **JANGAN** mengubah palet warna dasar, tipografi, atau variabel CSS yang ada di `resources/css/app.css` dan konfigurasi Tailwind.
    - Gunakan _utility classes_ Tailwind yang sudah ada di komponen lain untuk menjaga konsistensi desain (seperti radius _border_, _shadow_, _padding_ section, dan hierarki _heading_).
    - Manfaatkan komponen UI Shadcn yang sudah terinstal di `resources/js/components/ui/` (misalnya Card, Accordion, dsb).

## 2. File Structure Modifications

### A. Files to DELETE (Hapus File Berikut)

Hapus file komponen berikut dari direktori `resources/js/pages/welcome/sections/`:

1.  `KatalogSection.tsx`
2.  `PaketSection.tsx`
3.  `CaraPesanSection.tsx`
4.  `PesanSection.tsx`

### B. Files to CREATE (Buat File Komponen Baru)

Buat file komponen React baru di dalam direktori `resources/js/pages/welcome/sections/`:

1.  `TentangKamiSection.tsx`
2.  `CrewSection.tsx`
3.  `BenefitSection.tsx`
4.  `PortofolioSection.tsx`
5.  `FaqSection.tsx`

### C. Files to UPDATE (Perbarui File Berikut)

1.  `resources/js/pages/welcome/data.ts`: Perbarui data dummy/struktur data untuk menyuplai konten ke _section-section_ yang baru.
2.  `resources/js/pages/welcome.tsx`: Hapus impor section lama, tambahkan impor section baru, dan susun ulang _render_ halamannya.
3.  `resources/js/pages/welcome/sections/SiteNav.tsx`: Perbarui menu navigasi dan _anchor links_ agar mengarah ke ID _section_ yang baru.

## 3. Section-by-Section Requirements

Urutan render pada `welcome.tsx` harus persis seperti ini: `SiteNav` -> `Hero` -> `TentangKamiSection` -> `CrewSection` -> `BenefitSection` -> `PortofolioSection` -> `TestimoniSection` -> `FaqSection` -> `SiteFooter`.

### 3.1. SiteNav (Keep & Update)

- **Action:** Perbarui daftar menu.
- **Menu Baru:** Beranda (`#hero`), Tentang Kami (`#tentang-kami`), Crew (`#crew`), Benefit (`#benefit`), Portofolio (`#portofolio`), FAQ (`#faq`).

### 3.2. Hero (Keep - No Changes)

- **Action:** Pertahankan komponen `Hero.tsx` yang sudah ada beserta datanya.

### 3.3. Tentang Kami (NEW - `#tentang-kami`)

- **Layout:** 2 Kolom pada desktop (Teks di satu sisi, Gambar di sisi lain), 1 kolom pada mobile.
- **Content:** Heading "Tentang Kami", paragraf penjelasan tentang profil Mahes Ayu sebagai penyedia layanan _pagar ayu_ profesional untuk menyambut tamu pernikahan.
- **Style:** Gunakan warna background sekunder/muted dari tema yang ada untuk membedakannya dari Hero.

### 3.4. Crew (NEW - `#crew`)

- **Layout:** Grid layout (2 atau 3 kolom di desktop, 1 di mobile) atau Slider/Carousel.
- **Content:** Menampilkan foto representatif dari _crew_ Mahes Ayu yang seragam dan rapi.
- **Data:** Ambil array data dari `data.ts` (Image, Nama, Posisi/Peran). Gunakan aset yang ada di `public/images/stitch/hero-crew.jpg` sebagai salah satu contoh _placeholder_.

### 3.5. Benefit (NEW - `#benefit`)

- **Layout:** Grid dari komponen _Cards_ (misal 3 kolom).
- **Content:** Menjelaskan alasan/keuntungan menggunakan Mahes Ayu (e.g., "Penyambutan Hangat & Terkoordinasi", "Meningkatkan Estetika Acara", "Alur Tamu Lebih Rapi").
- **Style:** Gunakan ikon (dari `lucide-react`) dan _Card_ styling yang serasi dengan tema web saat ini.

### 3.6. Portofolio (NEW - `#portofolio`)

- **Layout:** Masonry atau Grid Gallery.
- **Content:** Kumpulan foto-foto dari berbagai acara/wedding yang pernah ditangani.
- **Data:** Gunakan gambar-gambar yang sudah ada di folder `public/images/stitch/` sebagai sumber gambar awal. Hover effect pada gambar direkomendasikan.

### 3.7. TestimoniSection (Keep - No Changes)

- **Action:** Pertahankan komponen dan data yang sudah ada di `#testimoni`.

### 3.8. FAQ (NEW - `#faq`)

- **Layout:** List menurun dengan fitur Accordion/Dropdown (buka-tutup). Jika ada komponen Shadcn `Accordion`, gunakan itu.
- **Content:** Pertanyaan umum seputar layanan (contoh: "Apakah seragam disediakan oleh Mahes Ayu?", "Bagaimana sistem bookingnya?").
- **Data:** Ambil array pertanyaan dan jawaban dari `data.ts`.

### 3.9. SiteFooter (Keep - No Changes)

- **Action:** Pertahankan komponen footer yang sudah ada.

## 4. Implementation Steps for AI Agent

1.  **Step 1:** Modifikasi file `data.ts`. Buat struktur data baru untuk `about`, `crews`, `benefits`, `portfolios`, dan `faqs`. Hapus struktur data untuk `katalog` dan `paket` yang sudah tidak terpakai.
2.  **Step 2:** Perbarui `SiteNav.tsx` untuk merefleksikan menu yang baru.
3.  **Step 3:** Hapus 4 file komponen lama (Katalog, Paket, Cara Pesan, Pesan).
4.  **Step 4:** Buat 5 komponen baru (`TentangKamiSection`, `CrewSection`, `BenefitSection`, `PortofolioSection`, `FaqSection`) dengan mengambil data dari `data.ts` dan menggunakan _Tailwind classes_ yang sesuai dengan identitas visual situs saat ini.
5.  **Step 5:** Rangkai semuanya di dalam `resources/js/pages/welcome.tsx`. Pastikan semua impor benar dan urutan rendernya sesuai dengan PRD ini.

---
title: Project MyTOKO
---

# Project MyTOKO
Oleh: **Mohaamad Tohari Maolana**

---

## Tentang Proyek Ini

Di era digital saat ini, *marketplace* telah menjadi tulang punggung e-commerce. Proyek **MyTOKO** adalah sebuah studi kasus implementasi *marketplace* yang fungsional dan modern, dibangun dari awal untuk menangani proses jual-beli yang kompleks.

Proyek ini dirancang untuk menciptakan platform di mana pengguna tidak hanya dapat membeli produk, tetapi juga dapat mendaftar untuk membuka toko mereka sendiri (multi-vendor). Dengan fokus pada alur transaksi yang lengkap, dari keranjang belanja hingga pelacakan resi, MyTOKO adalah portofolio komprehensif yang mendemonstrasikan kemampuan *back-end* yang kuat menggunakan Laravel.

## Fitur Utama

Berdasarkan arsitektur database, proyek ini dirancang untuk mendukung fitur-fitur penting berikut:

* **Sistem Multi-Toko (Vendor):** Pengguna dapat mendaftarkan akun dan mengelola toko mereka sendiri, lengkap dengan nama, kategori, dan status toko.
* **Manajemen Produk & Galeri:** Setiap vendor dapat mengunggah produk, melengkapinya dengan deskripsi, harga, kategori, dan galeri foto.
* **Kategorisasi Dinamis:** Sistem kategori yang fleksibel dengan *slug* (URL cantik) untuk SEO-friendly (misal: `/kategori/fashion`).
* **Alur Transaksi Lengkap:**
    * Fungsi keranjang belanja (Cart) yang terhubung dengan pengguna dan produk.
    * Proses *checkout* yang mencatat ongkos kirim, asuransi, dan total.
    * Sistem pelacakan transaksi dengan status dan nomor resi.
* **Integrasi Wilayah Indonesia:** Pemanfaatan data provinsi dan kota (via `indoregion`) untuk pengelolaan alamat pengguna yang akurat.
* **Relasi Data Kompleks:** Menangani hubungan antar tabel secara efisien (User ke Produk, Produk ke Galeri, Transaksi ke Detail Transaksi, dll).

---

## Teknologi & Lingkungan Pengembangan

Proyek ini dibangun menggunakan tumpukan teknologi yang teruji dan modern:

* **Framework:** [Laravel 8.x](https://laravel.com/)
* **Bahasa:** [PHP 7.4.33](https://www.php.net/)
* **Dependency Manager:** [Composer 2.5.4](https://getcomposer.org/)
* **Local Server:** [XAMPP 3.3.0](https://www.apachefriends.org/)
* **Code Editor:** [Visual Studio Code](https://code.visualstudio.com/)

---
---
## Mockup
![](https://hackmd.io/_uploads/By24Y-LGp.png)



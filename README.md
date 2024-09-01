# mulaiinvestasisaham.com


- [Pendahuluan](#Pendahuluan)
- [Persiapan](#Persiapan)
- [Cara menambah artikel](#Cara-menambah-artikel)
- [Mengganti Video YouTube](#Mengganti-Video-YouTube)


## Pendahuluan

Website ini dibangun menggunakan AstroJS dan JavaScript.

Astro adalah framework JavaScript modern yang memungkinkan Anda membangun website statis dan dinamis dengan mudah. Jika Anda sudah memiliki website yang dibangun dengan Astro, Anda mungkin ingin mengubah kontennya dari waktu ke waktu. Panduan ini akan menunjukkan cara mudah untuk mengubah konten website Astro Anda, bahkan jika Anda tidak memiliki latar belakang pengembangan frontend atau pemrograman.


## Persiapan

Sebelum memulai, pastikan Anda memiliki beberapa hal berikut:

- Akun GitHub.
- Akses ke repository project.
- Web Browser.
  Memiliki web browser seperti Google Chrome/Firefox/Arc/Safari/lainnya dapat digunakan untuk mengubah konten langsung dari repository.
- [Pengetahuan dasar HTML](https://www.w3schools.com/html/)
  Anda tidak perlu menjadi ahli HTML, tetapi pemahaman dasar tentang tag dan struktur HTML akan membantu Anda memahami konten website Anda.
- Pengetahuan mengenai [Markdown](https://www.w3schools.io/file/markdown-introduction/#google_vignette) file.
- Pengetahuan mengenai [JSON](https://www.w3schools.com/js/js_json_intro.asp) file.
- Pengetahuan mengenai git dan cara menggunakan VS Code.

## Cara menambah artikel

- Pergi ke folder `src/content/post` ([here](https://github.com/auliakbarhdev/personal-website-antoni/tree/main/src/content/post)).
- Buat file baru dari menu [Add file](https://github.com/auliakbarhdev/personal-website-antoni/new/main/src/content/post).
- Berikan nama file dengan ekstensi `.md` atau `.mdx` (contoh: `post-slug-1.md`). Nama file ini akan menjadi link dari artikel, maka pastikan tidak ada spasi pada file name (atau ganti spasi dengan simbol dash `-`).
- Masukkan konten artikel di dalam file `.md` atau `.mdx`.

```mdxjs
---
publishDate: 2024-08-18T00:00:00Z
title: Isi Judul Artikel (tanpa ada titik dua).
excerpt: Isi deskripsi singkat dari artikel pada baris ini (tanpa ada titik dua).
image: Isi url dari gambar yang mewakili artikel. Contoh: https://example.com/image.png
showImageHeaderInArticle: isi dengan false jika tidak ingin menampilkan gambar pada body artikel atau isi true jika ingin menampilkan.
tags:
  - isi
  - dengan
  - tags yang diinginkan
metadata:
  canonical: https://mulaiinvestasisaham.com/isi-dengan-nama-file-tanpa-ekstensi
---

Isi dari artikel di tulis pada bagian ini
```

Contoh:
```mdxjs
---
publishDate: 2024-08-21T00:00:00Z
author: Antoni
title: Analisa Teknikal - 8 Pola dan Indikator Utama dalam Analisis Teknikal Saham 
excerpt: Candlestick adalah elemen dasar dalam analisis grafik. Pola ini menunjukkan harga pembukaan, penutupan, tertinggi, dan terendah saham dalam periode tertentu
image: https://images.unsplash.com/photo-1671459923834-47a0b8ed93f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
showImageHeaderInArticle: false
category: Analisa Saham
tags:
  - saham
  - analisis
  - teknikal
metadata:
  canonical: https://mulaiinvestasisaham.com/analisa-teknikal
---

## 1. Pola Candlestick

Candlestick adalah elemen dasar dalam analisis grafik. Pola ini menunjukkan harga pembukaan, penutupan, tertinggi, dan terendah saham dalam periode tertentu. Berikut adalah beberapa pola penting:

```

Template:
```mdxjs
---
publishDate: 
author: 
title:  
excerpt: 
image: 
showImageHeaderInArticle: true
category: 
tags:
  - artikel
metadata:
  canonical: https://mulaiinvestasisaham.com/
---
```

- Isi konten artikel sesuai dengan format dan ketentuan dari [Markdown](https://www.markdownguide.org/cheat-sheet/).
- Jika ingin melihat preview artikel, klik tombol "Preview". 
- Bila sudah selesai, klik tombol "Commit changes..." pada sudut kanan atas.

> Untuk lebih mudah menuliskan artikel dengan tipe markdown, Anda dapat menuliskan artikel melalui [google docs](https://docs.google.com/document).
> Setelah menuliskan artikel di google docs, Anda bisa download file melalui menu File > Download > Markdown (.md).


## Mengganti Video YouTube

- Buka dan edit file [register.mdx](https://github.com/auliakbarhdev/personal-website-antoni/edit/main/src/pages/register.mdx)
- Temukan ada tag `<YouTube id="some_id_from_youtube" />` dan ubah id video sesuai dengan id video yang ingin diubah.

> Untuk mendapatkan id video youtube, kamu perlu membuat video di youtube menjadi public terlebih dahulu. Lalu buka link video youtube tersebut dan kamu akan mendapatkan link seperti contoh berikut: `https://www.youtube.com/watch?v=ini_id_vide_yang_diperlukan`.

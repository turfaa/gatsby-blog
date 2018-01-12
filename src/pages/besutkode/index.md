---
title: Yang Sudah Saya Lakukan di BesutKode
date: "2016-10-28T12:00:00.000Z"
---
Sudah sekitar 8 hari ini saya mengikuti kompetisi yang bernama BesutKode. lebih tepatnya, [BesutKode Universitas](http://wikimedia-id.github.io/besutkode/beranda-universitas.html). Kompetisi ini diadakan oleh Wikimedia Indonesia untuk mempersiapkan mahasiswa-mahasiswa potensial untuk mengikuti [Google Summer of Code](https://developers.google.com/open-source/gsoc/). Tetapi sejujurnya, yang paling menarik bagi saya adalah hadiah tawaran mengikuti magang di Wikimedia Indonesia (dan mengikuti sebuah acara di singapura ;)).

Untuk lebih detail tentang kompetisi ini, bisa dilihat [di sini](http://wikimedia-id.github.io/besutkode/beranda-universitas.html). Di sini saya akan berbagi apa saja yang suDah saya lakukan dalam rangkaian kompetisi BesutKode.

--

Saat mendaftar, salah satu syarat paling 'sulit' adalah harus berkontribusi di sebuah repositori github yang sudah memiliki minimal 50 bintang. Sebagai orang yang baru mendaftar di Github, tentu saya kebingungan. Lalu saya teringat dengan repositori [Line API](https://github.com/carpedm20/LINE) yang beberapa waktu lalu sering saya gunakan. Saya melihat laman *issues* karena tidak tahu apa yang harus saya lakukan. Boom! Saya melihat ada satu *bug* yang cukup mudah untuk diperbaiki. Setelah memperbaikinya, akhirnya saya bisa mengikuti babak eliminasi.

Babak eliminasi terbagi ke dalam tiga tugas, yaitu lima tugas besar, tugas kecil pertiga hari, dan tugas mendapatkan tiga *badge* dari stackoverflow.

Tugas besar terdiri dari lima tugas yang harus dikerjakan secara berurutan. Tugas selanjutnya baru akan diberikan bila tugas sebelumnya sudah dinyatakan berhasil. Saya baru berhasil menyelesaikan tugas pertama, yaitu tugas mencari minimal 20 kesalahan terjemahan menggunakan *tool* (*tool* yang digunakan bebas) dan membuat *tool* untuk mencari kesalahan terjemahan yang belum bisa ditemukan oleh *tool* sebelumnya. Kebanyakan saya berkontribusi di [proyek penerjemahan e-maxx](https://github.com/e-maxx-eng/e-maxx-eng) dan [proyek penerjemahan buku a byte of python](https://github.com/asofyan/byte_of_python). Untuk menyelesaikan tugas ini, saya membuat [script](https://github.com/turfaa/languagetool) yang memanfaatkan API [https://languagetool.org](https://languagetool.org) dan membuat *tool* [Indonesian Kata Baku Checker](https://github.com/turfaa/IndonesianKataBakuChecker), yang mengecek apakah ada kata tidak baku yang digunakan dalam suatu tulisan. Sumber kata tidak baku dan padanannya kebanyakan saya dapat dari [Wikipedia](https://id.wikipedia.org/wiki/Wikipedia:Daftar_kosakata_bahasa_Indonesia_yang_sering_salah_dieja) atas rekomendasi dari [Sage MA](https://github.com/laymonage). Dari tugas ini, saya mendapat *resource* baru untuk mempelajari berbagai algoritma yang sangat berguna untuk *competitive programming*. Ya, itu adalah [e-maxx algorithms in english](http://e-maxx-eng.appspot.com/).

Dalam tugas kecil, setiap tiga hari saya diharuskan untuk berkontribusi dalam repositori yang sudah ditentukan. Daftar repositori dapat dilihat [di sini](http://wikimedia-id.github.io/besutkode/university-activity-repositories-id.html). Saya memperbaiki beberapa kesalahan sintaks dan membantu 'memperindah' tampilan dari *github page* peserta-peserta lain untuk menyelesaikan tugas dengan *deadline* 22 oktober. Untuk menyelesaikan tugas dengan *deadline* 25 oktober, saya mengkonversi tutorial-tutorial yang ada di proyek [belajar git](https://github.com/endymuhardin/belajarGit) dari format teks biasa menjadi format markdown agar lebih enak dibaca. Terakhir, saya membuat blog post ini untuk menyelesaikan tugas dengan *deadline* 28 oktober.

Untuk tugas mendapatkat tiga *badge* di stackoverflow, saya belum melakukan apapun.

--

Setelah menyelesaikan beberapa tugas dalam besutkode ini, saya merasakan sendiri bahwa berbagi itu indah. Ada perasaan yang tidak dapat digambarkan dengan kata-kata ketika *pull request* kita sudah di*merge* oleh *maintainer* sebuah repositori. Akhirnya kebingungan saya sebelumnya, yaitu "kenapa sih para pegiat *open source* mau berbuat banyak tanpa dibayar?", bisa terjawab.

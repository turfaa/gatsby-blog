---
title: Machine Learning, Ilmu yang Terdengar Sangat Seksi
date:   "2017-05-29T12:00:00.000Z"
---
Akhir-akhir ini, machine learning sering disinggung oleh ahli ilmu komputer dan artikel-artikel tentang ilmu komputer. Machine learning terdengar sebagai sebuah solusi baru bagi semua permasalahan yang ada di dunia. Machine learning terdengar sangat seksi.

Jadi sebenarnya, apa sih machine learning itu?

--

Sebenarnya, istilah machine learning sendiri sudah diperkenalkan sejak tahun 1959. Arthul Samuel mendefinisikan machine learning sebagai kemampuan komputer untuk belajar tanpa diprogram secara eksplisit.

Gimana tuh caranya?

Jelas dengan melatih dulu komputer kita. Untuk melatihnya, kita harus punya banyak data "benar" tentang apa yang ingin kita latih. Misal, jika kita ingin membuat program untuk memprediksi harga tanah per meter persegi di Cisitu Lama untuk beberapa tahun ke depan, kita harus punya data valid harga tanah per meter persegi di Cisitu Lama dari beberapa tahun ke belakang sampai sekarang. Untuk masalah banyaknya data, sederhananya seperti berikut :
* Semakin banyak data harga, semakin baik.
* Semakin banyak data yang menyertai harga, cenderung semakin baik. (Misal data luas tanah yang dijual, lokasi, jarak dengan jalan raya, bahkan sampai situasi ekonomi penjual ketika menjual). Data yang menyertai harga ini biasa disebut <b>fitur</b>.
* Semakin luas cakupan data berdasar fitur, semakin baik.

Setelah punya data, lalu apa?

Data-data tersebut dimasukkan ke dalam program, lalu program akan menentukan formulasi terbaik berdasarkan data yang ada. Formulasi tersebut bisa dalam berbagai bentuk, dari persamaan linear sederhana sampai operasi matematika bertahap. Hal itu ditentukan oleh algoritma machine learning yang digunakan.

Setelah dilatih, jadi deh. Keluaran dari program sendiri bisa berbentuk pengelompokkan (misal : "laki-laki" atau "perempuan") dan bisa juga berbentuk nilai (misal : harga tanah per meter persegi). Program juga bisa diprogram untuk belajar bahkan setelah dilatih (ketika melakukan prediksi), asal "pelatih" dapat memberi feedback seakurat apa hasil prediksi dari program tersebut.

Note : maaf postnya sangat sederhana sekali. Post ini ditujukan untuk memenuhi tugas seleksi anggota laboratorium GaiB. Post ini ditulis di tengah sibuknya permagangan dan per-OSN-an :')

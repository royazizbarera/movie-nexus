
# Movie Nexus

Movie Nexus adalah platform komprehensif yang dirancang untuk menawarkan kepada para penggemar film tujuan satu atap untuk menjelajahi informasi terperinci tentang film, acara televisi, aktor, dan banyak lagi. Pengguna dapat menemukan rilis baru, menonton trailer, membaca ulasan, dan melacak film atau acara favorit mereka. Dengan basis data yang luas, kemampuan pencarian tingkat lanjut, dan rekomendasi yang dipersonalisasi, Movie Nexus berfungsi sebagai pusat utama untuk semua hal tentang bioskop, yang melayani pemirsa biasa dan penggemar film yang berdedikasi.

## Authors

- [@Dafa Alfarizki Pratama](https://github.com/KittenDev)
- [@Roy Aziz Barera](https://www.github.com/royazizbarera)

# Spesifikasi Missions
## Fitur Utama yang harus Ada
1. [*] Beranda
2. [*] Detail Movie
3. [*] Pencarian dan Filter
4. [*] Manajemen Konten (CMS)
5. [*] Sistem Pendaftaran dan Login
6. [*] Ulasan dan Rating Pengguna
7. [*] Menambahkan Movie
8. [*] Validasi ulasan dan validasi data drama baru

## Role pengguna website
1. Admin
2. Writter
3. Guest

## Mission
### Misi 1
**Kriteria Penilaian**
- Kerapian tampilan
- Responsive
- Page Load Time
- Reusable Resource & Components
- Interaktif

**Fitur Utama yang harus ada sudah diimplementasikan di Frontend**
1. ~~[*] Beranda~~
2. ~~[*] Detail Movie~~\
  2.1. ~~[*] Poster~~\
  2.2. ~~[*] Trailer~~\
  2.3. ~~[*] Detail (Judul, Rating, Tanggal, Sinopsis)~~\
  2.4. ~~[*] Genre~~\
  2.5. ~~[*] Aktor~~\
  2.6. ~~[*] Country~~\
  2.7. ~~[*] Review~~\
  2.8. ~~[*] Tambah Review/Rating~~\
  2.9. ~~[*] Movies Recomendation~~
3. ~~[*] Pencarian dan Filter~~
4. ~~[*] Manajemen Konten (CMS) CRUD~~\
  4.1. ~~[*] Movies~~\
  4.2. ~~[*] Actors~~\
  4.3. ~~[*] Genres~~\
  4.4. ~~[*] Countries~~\
  4.5. ~~[*] Awards~~\
  4.6. ~~[*] Directors~~\
  4.7. ~~[*] Users~~\
  4.8. ~~[*] Reviews~~\
  4.9. ~~[*] Aproval Movies and Reviews~~
5. ~~[*] Sistem Pendaftaran dan Login~~\
  5.1. ~~[*] Sign In~~\
  5.2. ~~[*] Sign Up~~\
  5.3. ~~[*] Verification Code/Send Email (Challenge)~~\
  5.3. ~~[*] Lupa password (Challenge)~~\
  5.4. ~~[*] Protected Route~~
6. ~~[*] Ulasan dan Rating Pengguna~~
7. ~~[*] Menambahkan Movie~~
8. ~~[*] Validasi ulasan dan validasi data drama baru~~

### Misi 2
1. ~~[*] Fetching dan Filtering data~~

### Misi 3
1. ~~[*] Mission Ketiga Website Authentication~~

## Misi 4
1. ~~[*] CMS~~

## ~~[*] Deployment~~

## Features
- Pencarian Film & Serial
- Detail Film & Serial
- Rating & Ulasan Pengguna
- Watchlist
- Trailer & Video Klip
- Informasi Pemeran & Kru
- Rekomendasi Berdasarkan Preferensi
- Kategori & Genre
- Daftar Popularitas & Box Office
- Komentar & Diskusi
## Tech Stack

**Client:** React, Mui

**Server:** Node, Express


## Requirements

Dependencies

```bash
  git clone https://github.com/royazizbarera/movie-nexus.git
```

Go to the project directory

```bash
  cd movie-nexus
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/royazizbarera/movie-nexus.git
```

Go to the project directory

```bash
  cd movie-nexus
```

Go to client directory for run the Front End
```bash
  npm install
  npm run start
```

Go to backend directory for run the Back End

```bash
  node src/server.ts
```

## Demo
https://movie-nexus-jtk.vercel.app/



## Database
```bash
  npx prisma migrate dev --name init  
```# Movie Nexus

## Run
``` bash
  $env:PORT=3002
  npm start
```

## Deploy
Temporary Deploy
```bash
ngrok http --url=completely-safe-moth.ngrok-free.app 3002
```

Docker Deploy
```bash
docker compose up --build
```


## Install
Font
``` bash
npm i @fontsource/quicksand
npm i @fontsource/roboto
```
React Router Dom
``` bash
npm i react-router-dom
```
All
``` bash
npm i axios
npm i @mui/joy @emotion/react @emotion/styled @mui/icons-material @mui/material
npm i query-string

```


## Usage
Usage Font
``` bash
import "@fontsource/quicksand"
import "@fontsource/roboto"
```

# Errors that have been encountered
|Error|Solution|
|:----|:-------|
|Blank putih ketika menambahkan Link TO|Menambahkan Browser Router di Root Component|
|registerUser is not function|Menambahkan UserProvideer di root app|

# Lesson Learn
## Component Joy UI
1. Menggunakan Container untuk mendefinisikan component yang memiliki ukuran pasti, dalam kasus yang sekarang Container akan digunakan untuk menambahkan padding kiri dan kanan di MainContent
2. 

## React
1. Callback function itu intinya seperti mengambil parameter yang ada di dalam Componen yang mengambil function/melakukan eksekusi function parent di child

## CSS
1. flexGrow: 1 // untuk mengisi ruang kosong yang tersedia, 0 sebaliknya

# Reference
1. https://mui.com/joy-ui/ 
2. https://mui.com/joy-ui/customization/theme-colors/
 

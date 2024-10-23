
# Movie Nexus

Movie Nexus adalah platform komprehensif yang dirancang untuk menawarkan kepada para penggemar film tujuan satu atap untuk menjelajahi informasi terperinci tentang film, acara televisi, aktor, dan banyak lagi. Pengguna dapat menemukan rilis baru, menonton trailer, membaca ulasan, dan melacak film atau acara favorit mereka. Dengan basis data yang luas, kemampuan pencarian tingkat lanjut, dan rekomendasi yang dipersonalisasi, Movie Nexus berfungsi sebagai pusat utama untuk semua hal tentang bioskop, yang melayani pemirsa biasa dan penggemar film yang berdedikasi.




## Authors

- [@Dafa Alfarizki Pratama](https://github.com/KittenDev)
- [@Roy Aziz Barera](https://www.github.com/royazizbarera)


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
**Detail Page** \
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExemx4YzdoZHRvZ2x2NWwycmJwZnV5MXdvdjlwOWR2OWE4dDQzNXJiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y4Wbo44pXjSl4V3X68/giphy.gif" alt="Detail Page" width="800"/>




## Database
```bash
  npx prisma migrate dev --name init  
```# Movie Simple

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

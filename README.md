# Movie Simple

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

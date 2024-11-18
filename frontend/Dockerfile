# Gunakan image Node.js sebagai base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install && npm cache clean --force

# Salin seluruh kode aplikasi
COPY . .

# Hapus folder build lama (jika ada) sebelum melakukan build
RUN rm -rf build

# Build aplikasi
RUN npm run build

# Install server sederhana untuk melayani aplikasi
RUN npm install -g serve

# Expose port yang digunakan oleh aplikasi
EXPOSE 3009

# Jalankan aplikasi
CMD ["serve", "-s", "build", "-l", "3002"]
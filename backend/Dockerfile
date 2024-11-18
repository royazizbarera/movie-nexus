# Gunakan image Node.js sebagai base image (sesuaikan versi Node dengan kebutuhan Anda)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Salin file package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh kode aplikasi
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Transpile TypeScript ke JavaScript
RUN npm run build

# Expose port yang digunakan oleh aplikasi
EXPOSE 3008

# Jalankan aplikasi
CMD ["npm", "start"]

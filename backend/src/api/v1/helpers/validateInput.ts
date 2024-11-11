// Fungsi untuk validasi email
export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Fungsi untuk validasi password
export function isValidPassword(password: string) {
  // Password harus minimal 8 karakter, bisa ditambahkan aturan lain jika diperlukan
  return password && password.length >= 8;
}
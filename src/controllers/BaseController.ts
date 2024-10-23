import axios, { AxiosInstance } from 'axios';

// Definisikan tipe umum untuk struktur respons API dengan code numerik
interface ApiResponse<T> {
  message: string;
  code: number; // Mengganti status menjadi code numerik
  data: T;
  pagination?: {
    totalItems: number;
    pageSize: number;
    totalPages: number;
    page: number;
  };
}

export abstract class BaseController {
  protected api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      withCredentials: true, // Jika perlu, bisa sesuaikan
    });
  }

  // Metode GET umum untuk mengambil data dengan struktur respons yang sesuai
  protected async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.get<ApiResponse<T>>(url, { params });
      return response.data; // Kembalikan struktur data lengkap (message, code, data, pagination)
    } catch (error) {
      console.error(`GET request to ${url} failed:`, error);
      throw error;
    }
  }

  // Metode POST umum untuk menambah data
  protected async post<T>(url: string, data: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.post<ApiResponse<T>>(url, data);
      return response.data;
    } catch (error) {
      console.error(`POST request to ${url} failed:`, error);
      throw error;
    }
  }

  // Metode PUT umum untuk mengubah data, hanya untuk admin
  protected async put<T>(url: string, data: any, userRole: string): Promise<ApiResponse<T>> {
    if (userRole !== 'admin') {
      throw new Error('Unauthorized: Only admin can perform this action');
    }

    try {
      const response = await this.api.put<ApiResponse<T>>(url, data);
      return response.data;
    } catch (error) {
      console.error(`PUT request to ${url} failed:`, error);
      throw error;
    }
  }

  // Metode DELETE umum untuk menghapus data, hanya untuk admin
  protected async delete<T>(url: string, userRole: string): Promise<ApiResponse<T>> {
    if (userRole !== 'admin') {
      throw new Error('Unauthorized: Only admin can perform this action');
    }

    try {
      const response = await this.api.delete<ApiResponse<T>>(url);
      return response.data;
    } catch (error) {
      console.error(`DELETE request to ${url} failed:`, error);
      throw error;
    }
  }
}

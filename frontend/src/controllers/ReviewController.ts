import { BaseController } from "./BaseController";
import { ReviewModel, ReviewParamsModel } from "../models/ReviewModel";
import { useAuthStore } from "../contexts/authStore"; // Asumsikan ini store untuk mendapatkan data user
import { BASE_API_URL } from "../configs/constants";

class ReviewController extends BaseController {
  constructor() {
    super(`${BASE_API_URL}/reviews`); // Sesuaikan base URL API untuk reviews
  }

  // Mendapatkan daftar film dengan pagination
  public async getReviews(reviewParamsModel?: ReviewParamsModel | undefined) {
    const params = { ...reviewParamsModel };
    return this.get<ReviewModel[]>("/", params);
  }

  // get unapproved reviews
  public async getUnapprovedReviews(
    reviewParamsModel?: ReviewParamsModel | undefined
  ) {
    const params = { ...reviewParamsModel };
    return this.get<ReviewModel[]>("/unapproved", params);
  }

  // Mendapatkan detail film berdasarkan ID
  public async getReviewById(id: number) {
    return this.get<ReviewModel>(`/${id}`);
  }

  // Menambah film baru
  public async addReview(newReview: ReviewModel) {
    return this.post<string>("/", { ...newReview, id: undefined });
  }

  // Mengubah data film, hanya untuk admin
  public async updateReview(id: number, newReview: ReviewModel) {
    const { user } = useAuthStore.getState();
    return this.put<ReviewModel>(
      `/${id}`,
      { ...newReview, id: undefined, movieId: undefined, userId: undefined },
      user!.role!.toString()
    );
  }

  // Menghapus film berdasarkan ID, hanya untuk admin
  public async deleteReview(id: number) {
    const { user } = useAuthStore.getState();
    return this.delete<void>(`/${id}`, user!.role!.toString());
  }

  // Menghitung total film yang belum disetujui
  public async totalUnapprovedReviews() {
    return this.get<number>("/total-unapproved-reviews");
  }
}

const reviewController = new ReviewController();
export default reviewController;

import { create } from "zustand";
import movieController from "../controllers/MovieController";
import reviewController from "../controllers/ReviewController";

interface ApprovalStore {
  totalUnapprovedMovies: number;
  incrementTotalUnapprovedMovies: () => void;
  decrementTotalUnapprovedMovies: () => void;

  totalUnapprovedReviews: number;
  incrementTotalUnapprovedReviews: () => void;
  decrementTotalUnapprovedReviews: () => void;

  fetchTotalUnapprovedMovies: () => Promise<void>;
  fetchTotalUnapprovedReviews: () => Promise<void>;
}

export const useApprovalStore = create<ApprovalStore>((set) => ({
  totalUnapprovedMovies: 0,
  incrementTotalUnapprovedMovies: () =>
    set((state) => ({
      totalUnapprovedMovies: state.totalUnapprovedMovies + 1,
    })),

  decrementTotalUnapprovedMovies: () =>
    set((state) => ({
      totalUnapprovedMovies: state.totalUnapprovedMovies - 1,
    })),

  totalUnapprovedReviews: 0,
  incrementTotalUnapprovedReviews: () =>
    set((state) => ({
      totalUnapprovedReviews: state.totalUnapprovedReviews + 1,
    })),

  decrementTotalUnapprovedReviews: () =>
    set((state) => ({
      totalUnapprovedReviews: state.totalUnapprovedReviews - 1,
    })),

  fetchTotalUnapprovedMovies: async () => {
    try {
      const response = await movieController.totalUnapprovedMovies();
      set({ totalUnapprovedMovies: response.data });
    } catch (error) {
      console.error("Error fetching total unapproved movies: ", error);
    }
  },

  fetchTotalUnapprovedReviews: async () => {
    try {
      const response = await reviewController.totalUnapprovedReviews();
      set({ totalUnapprovedReviews: response.data });
    } catch (error) {
      console.error("Error fetching total unapproved reviews: ", error);
    }
  },
}));

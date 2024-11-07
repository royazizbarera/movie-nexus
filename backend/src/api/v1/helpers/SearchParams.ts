export default interface SearchParams {
    searchTerm?: string;
    country?: string;
    actor?: string;
    year?: number;
    award?: string;
    director?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    filters?: any[];
    genre?: string;
    rating?: number;
    userId?: number;
    approvalStatus?: boolean;
    movieId?: number;
    addedBy?: string;
}
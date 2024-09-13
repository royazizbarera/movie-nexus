import SearchParams from "./SearchParams";

export function buildSearchMoviesURL(params: SearchParams): string {
  const { searchTerm, genres, country, sortBy, sortOrder } = params;

  const queryParams = new URLSearchParams();

  // Menambahkan parameter pencarian (searchTerm)
  if (searchTerm) {
    queryParams.append("searchTerm", searchTerm);
  }

  // Menambahkan parameter genre (diubah menjadi string yang dipisahkan koma)
  if (genres && genres.length > 0) {
    queryParams.append("genres", genres.join(","));
  }

  // Menambahkan parameter negara (country)
  if (country) {
    queryParams.append("country", country);
  }

  // Menambahkan parameter sorting
  if (sortBy) {
    queryParams.append("sortBy", sortBy);
  }

  if (sortOrder) {
    queryParams.append("sortOrder", sortOrder);
  }

  // Membuat URL lengkap
  return `/movies/search?${queryParams.toString()}`;
}

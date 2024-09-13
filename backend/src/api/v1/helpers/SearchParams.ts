export default interface SearchParams {
  searchTerm?: string; // Kata kunci pencarian
  genres?: string[]; // Filter berdasarkan genre (lebih dari satu)
  country?: string; // Filter berdasarkan negara
  sortBy?: string; // Sorting berdasarkan field
  sortOrder?: "asc" | "desc"; // Urutan sort
}
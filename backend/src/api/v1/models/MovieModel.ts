import randomArray from "../helpers/randomArray";

export default interface Movie {
  // Main fields
  id: number;
  title: string;
  synopsis?: string;
  releaseDate: number;

  posterUrl?: string;
  trailerUrl?: string;

  genres: string[];

  country: string;
  rating: number;

  awards: string[];
  director: string;
  actors: string[];

  reviews: string[];

  approvalStatus: boolean;
}


export const MovieDatas: Movie[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: 1 + i,
    title: randomArray([
      "The Shawshank Redemption",
      "The Godfather",
      "The Dark Knight",
      "The Lord of the Rings: The Return of the King",
      "Pulp Fiction",
      "Schindler's List",
      "Inception",
      "Fight Club",
      "Forrest Gump",
      "The Matrix",
    ]),
    synopsis: randomArray([
      "Two imprisoned synopsiss bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "Gandalf and Aragorn lead the World of...",
    ]),
    releaseDate: randomArray([
      1994, 1972, 2008, 2003, 1994, 1993, 2010, 1999, 1994, 1999,
    ]),

    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=6hB3S9bIaco",

    genres: randomArray([
      ["Drama"],
      ["Crime", "Drama"],
      ["Action", "Crime", "Drama"],
      ["Action", "Adventure", "Drama"],
      ["Crime", "Drama"],
      ["Biography", "Drama", "History"],
      ["Action", "Adventure", "Sci-Fi"],
      ["Drama"],
      ["Drama", "Romance"],
      ["Action", "Sci-Fi"],
    ]),

    country: randomArray([
      "Indonesia",
      "United States",
      "United Kingdom",
      "Japan",
      "South Korea",
      "China",
      "India",
      "France",
      "Germany",
      "Italy",
    ]),
    rating: randomArray([9.3, 9.2, 9.0, 8.9, 8.9, 8.9, 8.8, 8.8, 8.8, 8.7]),

    awards: ["Nominated for 7 Oscars. Another 21 wins & 35 nominations."],
    director: randomArray([
      "Frank Darabont",
      "Francis Ford Coppola",
      "Christopher Nolan",
      "Peter Jackson",
      "Quentin Tarantino",
      "Steven Spielberg",
      "Christopher Nolan",
      "David Fincher",
      "Robert Zemeckis",
      "Lana Wachowski",
      "Lilly Wachowski",
    ]),
    actors: randomArray([
      ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      ["Marlon Brando", "Al Pacino", "James Caan"],
      ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
      ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      ["Brad Pitt", "Edward Norton", "Meat Loaf"],
      ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    ]),

    reviews: ["One of the best movies ever made."],

    approvalStatus: randomArray([true, false]),
  })),
];

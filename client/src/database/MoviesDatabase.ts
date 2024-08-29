import MovieModel from "../model/MovieModel";
import ActorsDatabase from "./ActorsDatabase";

const MoviesDatabase: MovieModel[] = [
  {
    title: "The Amazing Spider-Man",
    description: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi2597829145/1434659607842-pgv4ql-1543618688198.mp4?Expires=1724993200&Signature=PDkEjFndHhNfFpHkccf9JBE64W2oDcS8aSqEJ8FcQz6DF-hWaAK-3kzum-6VGQ0ceSZjUNasEEwTCGy3eJdIUE5iRRYZJ0CMwlvUtsGJRiFwIGr-Wg0ATfSZzRAekxQxMI81ugndJbHQV3vUD0Q-~ZS0gvlfYSfR7~4kS-5BNBkRN8b5Flt31zL3ORQCYsE7CgFOOOojxdr~COiAC7~r2Z2gcBXwvcvtPqzLCcTjnMVJwYibgIrqrcoIuIfINLXZ6o9M1NgqsRNO6rtAUaznKRAWrXdN5dRL-HiJX0xe9gYMP-WTdXf5Fcc3sIvT9FfNBoYPOYVkGevYDQwtfXT7NA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
    actors: ActorsDatabase, // Placeholder untuk aktor
    reviews: [
      {
        user: "Nara",
        date: "4/4/2014",
        rating: 5,
        comment: "It is a wonderful drama! I Love it so much!!!!",
      },
    ],
  },
  {
    title: "La La Land",
    year: 2016,
    rating: 8.1,
    votes: 900,
    duration: "2h 8m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi3161027609/1434659607842-pgv4ql-1616203117233.mp4",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjI4OTM0MjQ0Nl5BMl5BanBnXkFtZTgwNjUxNjIzMTI@._V1_FMjpg_UX1000_.jpg",
    genres: ["Comedy", "Drama", "Music", "Romance"],
    director: "Damien Chazelle",
    writers: ["Damien Chazelle"],
    actors: ActorsDatabase, // Placeholder untuk aktor
    reviews: [
      {
        user: "John Doe",
        date: "2/20/2017",
        rating: 4.5,
        comment: "A beautiful film with amazing performances and music.",
      },
    ],
  },
  {
    title: "Hacksaw Ridge",
    year: 2016,
    rating: 7,
    votes: 475,
    duration: "2h 19m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi2795204377/1434659607842-pgv4ql-1616203117233.mp4",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMjA0NjE3MjQ5MF5BMl5BanBnXkFtZTgwMTU5Mzk3OTE@._V1_FMjpg_UX1000_.jpg",
    genres: ["Biography", "Drama", "History", "War"],
    director: "Mel Gibson",
    writers: ["Robert Schenkkan", "Andrew Knight"],
    actors: [ActorsDatabase[0], ActorsDatabase[1]], // Placeholder untuk aktor
    reviews: [
      {
        user: "Jane Smith",
        date: "11/4/2016",
        rating: 5,
        comment: "A powerful story of courage and faith.",
      },
    ],
  },
];

export default MoviesDatabase;

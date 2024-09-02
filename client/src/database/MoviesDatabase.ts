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
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725333052&Signature=lzAyISGJEHg7e7ItghOjBc~Sm3eJAIq7DBaDtz8lf0qoXUsh0JyAqOATBhW-bATvp7uTQRuYbI5ElTAnqrNUe~js48pZ1fyQc8RmvMKsBeIIQ8WHC11PwipVFh1BW7ZRtM79DqS8EmCLMAFzeuh-4GpZ3fImlr-XKGGR6-us0Awrd3F2I-xt1nHoizI9dgR2FYIWaVEu9FPV5HW2boSTJ770nb-LUnUL9zTkd5WbnuQtCzoAvtA-tmlkyj6A11XHpDantgHzA7J4AJPqIaTb4hlcFXBOk1UeGdggCK1lrETCFVLfrJ-PWTWQt~dhW1TzvIwuDXxunZ~SkoLDrXpsIg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
    actors: ActorsDatabase,
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
  {
    title: "Avengers: Endgame",
    description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    year: 2019,
    rating: 8.4,
    votes: 2900,
    duration: "3h 1m",
    trailerUrl: "https://imdb-video.media-imdb.com/vi2163260441/1434659607842-pgv4ql-1556354704370.mp4?Expires=1725332384&Signature=iatlfnOTZKDJMLadW8DTfDHIlqqWqvSjC8eQ3lUI52b7vp0MZWiKANqPB3oQk4URU5GuUC2Zek~sevo4mZbp0EeFwMJgy3ojytrnpAkZly1fcgjryt-JcZZPNaZwKsill8XGSe6dNkfctfCT02cCQbm3P4FXCsgzJfXRNKbZKymZAjwjBwdHxX9i7QClI~dtjJPNpNVHvxQsb9r0iooB58DNEowzHvOHqsyGivu3K1PA9PzH7xWq8zmE9OV-Y5ITThj78weMbrmB~tbzkD8EKY-gPlFzzkR61NI6-AXJFUM9iDvoRoeoSjZkjHg1zDKLszjW4atCbhM4PqlEpot4FQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1178_.jpg",
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    director: "Anthony Russo, Joe Russo",
    writers: ["Christopher Markus", "Stephen McFeely"],
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

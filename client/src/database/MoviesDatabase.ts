import MovieModel from "../models/temp/MovieModel";
import ActorsDatabase from "./ActorsDatabase";

const MoviesDatabase: MovieModel[] = [
  {
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
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
    id: "2",
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
    id: "3",
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
    id: "4",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1725200070&Signature=OyojP~oNI0bqqytVVr072mj9vEfy3uiQ8Ap5haV5j2nXisb4ciqxyoyeI3mfx3ca5zcdHJIL3Xt9vgLe-OKbGarmANmnGUHKqFgf~fy5vS26eI9lftcA82HIsEL45IOGRm89MZ~qKOyqB8g7Yf3m9NGbazvNa7z5lyFx2MK0w0vpI49IDYhd0mGq0-ufFzJKacOyEV9ZUhO5Ri7jzVvg3RgEw4c24ZvFrUV3S0MklasMAma1fBe~5uMvIXqN-cWBU2sii3ejcYW~dZfPdfE3bHEUMoTQPe9HzcPw9Kz5BDoxVwkjNn5WuwCjSFKcnkjT7trdUYJKzv~YpUT7XQ3YVw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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

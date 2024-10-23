
export interface Movie {
  title: string;
  year: string;
  genres: string[];
  actors: string[];
  director: string;
  country: string;
  rating: number;
  votes: number;
  description: string;
  posterUrl: string;
  trailerUrl: string;
}


export const movieDatabase = [
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
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
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
    id: "1",
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    year: 2012,
    rating: 9,
    votes: 1000,
    duration: "2h 16m",
    trailerUrl:
      "https://imdb-video.media-imdb.com/vi717595161/1434659607842-pgv4ql-1616203117233.mp4?Expires=1728054883&Signature=Jn1mEcu9WaqU6I3T-CwnQgMSbXaIaF9GWfHdVBPGpEq4qfvPJSOp~vwbNDfzFo3RC318fecjQUyqbry~7LOOoxpZe~OYZo~yP7zCkX~X8ntu9fH5dA2ZZ4r0Md2HDYQUzPEuWjubTKrh4Lu6jauHAsYgxohUAZW~h7ThkxXr~QpSxaWUCKRWw5mMxSL8E2~5jaLoS1K1jjBt7lfE3p8-pCgCCqKXCWj-0NSJbWlZSUNhLdT7O~r5QMmcWpZRBsQ8tutazHqTSt41IYJw-NsXYBmROQZHcvcPMqn4P57sPHMCz0yZjdGBv1tTrtut5RZI9sz8rGKoyC3Fi3zs3h3AIw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM5ODEwMTg3NV5BMl5BanBnXkFtZTcwMzIyNjg2Nw@@._V1_FMjpg_UY2048_.jpg",
    genres: ["Superhero", "Urban Adventure", "Action", "Adventure", "Sci-Fi"],
    director: "Marc Webb",
    writers: ["James Vanderbilt", "Alvin Sargent", "Steve Kloves"],
    reviews: [
      {
        user: "Nara",
        date: "4/4/2014",
        rating: 5,
        comment: "It is a wonderful drama! I Love it so much!!!!",
      },
    ],
  },
]
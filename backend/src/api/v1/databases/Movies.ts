export interface MovieType {
  id: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  approvalStatus: boolean;
  countryCode: string;
  rating: number;
  director: string;
}

export const movies: MovieType[] = [
  {
    id: 1,
    title: "Inception",
    synopsis: "A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.",
    posterUrl: "https://picsum.photos/seed/movies/1080/1920",
    releaseDate: new Date('2010-07-16'),
    approvalStatus: true,
    countryCode: "US",
    rating: 8.8,
    director: "Christopher Nolan",
  },
  {
    id: 2,
    title: "The Dark Knight",
    synopsis: "Batman raises the stakes in his war on crime, facing off against the Joker, a criminal mastermind who wreaks havoc on Gotham City.",
    posterUrl: "https://picsum.photos/seed/movies/1080/1920",
    releaseDate: new Date('2008-07-18'),
    approvalStatus: true,
    countryCode: "US",
    rating: 9.0,
    director: "Christopher Nolan",
  },
  {
    id: 3,
    title: "Parasite",
    synopsis: "A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals.",
    posterUrl: "https://picsum.photos/seed/movies/1080/1920",
    releaseDate: new Date('2019-05-30'),
    approvalStatus: true,
    countryCode: "KR",
    rating: 8.6,
    director: "Bong Joon Ho",
  },
  {
    id: 4,
    title: "Interstellar",
    synopsis: "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl: "https://picsum.photos/seed/movies/1080/1920",
    releaseDate: new Date('2014-11-07'),
    approvalStatus: true,
    countryCode: "US",
    rating: 8.6,
    director: "Christopher Nolan",
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    synopsis: "Two imprisoned",
    posterUrl: "https://picsum.photos/seed/movies/1080/1920",
    releaseDate: new Date('1994-10-14'),
    approvalStatus: true,
    countryCode: "US",
    rating: 9.3,
    director: "Frank Darabont",
  },
  {
    id: 6,
    title: "The Godfather",
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl: "https://picsum.photos/seed/movies/1080/1920",
    releaseDate: new Date('1972-03-24'),
    approvalStatus: true,
    countryCode: "US",
    rating: 9.2,
    director: "Francis Ford Coppola",
  },
  {
    id: 7,
    title: "The Lord of the Rings: The Return of the King",
    synopsis: "Gandalf and Aragorn lead the World ",
    posterUrl: "https://picsum.photos/seed/movies/1080/1920",
    releaseDate: new Date('2003-12-17'),
    approvalStatus: true,
    countryCode: "US",
    rating: 8.9,
    director: "Peter Jackson",
  },
  {
    id: 8,
    title: "The Matrix",
    synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    posterUrl: "https://picsum.photos/seed/movies/1080/1920",
    releaseDate: new Date('1999-03-31'),
    approvalStatus: true,
    countryCode: "US",
    rating: 8.7,
    director: "Lana Wachowski, Lilly Wachowski",
  },
  {
    id: 9,
    title: "The Dark Knight Rises",
    synopsis: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal",
    posterUrl: "https://picsum.photos/seed/movies/1080/1920",
    releaseDate: new Date('2012-07-20'),
    approvalStatus: true,
    countryCode: "US",
    rating: 8.4,
    director: "Christopher Nolan",
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    synopsis: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    posterUrl: "https://picsum.photos/seed/movies/1080/1920",
    releaseDate: new Date('2001-12-19'),
    approvalStatus: true,
    countryCode: "US",
    rating: 8.8,
    director: "Peter Jackson",
  },
];
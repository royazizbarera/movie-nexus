import ActorModel from "../models/temp/ActorModel";

const ActorsDatabase: ActorModel[] = [
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Andrew Garfield",
      born: "August 20, 1983",
      bornAt: "Los Angeles, California, USA",
      bio: "Andrew Garfield is a British-American actor who gained international recognition for his role as Spider-Man.",
      height: "5'10\" (1.79 m)",
      children: [],
      parents: ["Richard Garfield", "Lynn Garfield"],
      otherWorks: "The Social Network, Hacksaw Ridge, Silence",
    },
    role: ["Peter Parker", "Spider-Man", "Desmond Doss"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMjE2MjI2OTk1OV5BMl5BanBnXkFtZTgwNTY1NzM4MDI@._V1_QL75_UX190_CR0,3,190,281_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjMwMjg3ODMwM15BMl5BanBnXkFtZTcwOTk4NTk5OQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
    ],
    awards: [
      "BAFTA Award for Best Actor",
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Emma Stone",
      born: "November 6, 1988",
      bornAt: "Scottsdale, Arizona, USA",
      bio: "Emma Stone is an American actress known for her roles in films like La La Land, Easy A, and The Help.",
      height: "5'6\" (1.68 m)",
      children: [],
      parents: ["Jeff Stone", "Krista Stone"],
      otherWorks: "Easy A, The Help, Birdman",
    },
    role: ["Gwen Stacy", "Mia Dolan"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTU4ODU0NTczNV5BMl5BanBnXkFtZTgwMjAwMTc4NzE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMjAxNjQ3MzY0NF5BMl5BanBnXkFtZTgwNjUyNTQxMTE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Academy Award for Best Actress",
      "Golden Globe Award for Best Actress",
      "BAFTA Award for Best Actress",
    ],
    movies: [], // Placeholder untuk film
  },
  {
    personalDetail: {
      name: "Ryan Gosling",
      born: "November 12, 1980",
      bornAt: "London, Ontario, Canada",
      bio: "Ryan Gosling is a Canadian actor and musician who gained fame for his roles in films like The Notebook, La La Land, and Drive.",
      height: "6'0\" (1.84 m)",
      children: ["Esmeralda Amada Gosling", "Amada Lee Gosling"],
      parents: ["Thomas Gosling", "Donna Gosling"],
      otherWorks: "Drive, The Notebook, Blade Runner 2049",
    },
    role: ["Sebastian Wilder"],
    photoProfileUrl:
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
    photos: [
      "https://m.media-amazon.com/images/M/MV5BMTY5MTc3OTQ2N15BMl5BanBnXkFtZTgwOTM0NDIzMjE@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTYzNjQ0NTMyMF5BMl5BanBnXkFtZTcwNjg5OTM0NA@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    ],
    awards: [
      "Golden Globe Award for Best Actor",
      "Oscar Nomination for Best Actor",
    ],
    movies: [], // Placeholder untuk film
  },
];

export default ActorsDatabase;

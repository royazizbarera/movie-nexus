// src/services/movieService.ts

import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const getAllMovies = async () => {
  return prisma.genre.findFirst();
};

export const getMovieById = async (id: number) => {
  return prisma.movie.findUnique({
    where: { id },
    include: {
      genres: true,
      actors: true,
      director: true,
    },
  });
};

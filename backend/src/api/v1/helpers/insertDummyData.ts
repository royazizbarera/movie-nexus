// Import Prisma client and dummy data
import prisma from "../config/client";
import { actors } from "../databases/Actors";
import { awards } from "../databases/Awards";
import { countries } from "../databases/Countries";
import { genres } from "../databases/Genres";
import {
  movieActors,
  movieAwards,
  movieGenres,
  movies,
} from "../databases/Movies";
import { directors } from "../databases/Directors";
import { users } from "../databases/Users";

import UserModel from "../models/UserModel";
import MovieModel from "../models/MovieModel";
import CountryModel from "../models/CountryModel";
import GenreModel from "../models/GenreModel";
import AwardModel from "../models/AwardModel";
import ActorModel from "../models/ActorModel";
import DirectorModel from "../models/DirectorModel";
import { MovieActors, MovieAwards, MovieGenres } from "@prisma/client";

import bcrypt from "bcryptjs";
import dotenv from "dotenv";

/**
 * Inserts dummy data into the database with upsert operations to prevent duplicate entries.
 * This function is asynchronous and performs batch inserts to optimize performance.
 */
export default async function insertDummyData() {
  async function main() {
    try {
      dotenv.config();

      const user = await prisma.user.findFirst({
        where: {
          email: users[0].email,
        },
      });

    //   if (user) {
    //     throw new Error("Dummy data already inserted");
    //   }

      // Helper function to perform batch upserts
      const batchUpsert = async (model: any, data: any[], identifier: any) => {
        const upserts = data.map((item) =>
          model.upsert({
            where: identifier(item),
            update: {}, // No updates needed; just prevent duplicates
            create: item,
          })
        );
        await prisma.$transaction(upserts);
      };

      const insertUser = async (user: UserModel) => {
        user.password = await bcrypt.hash(
          process.env.ADMIN_PASS || "*eipalingcantik26",
          10
        );
        await prisma.user.upsert({
          where: { id: user.id },
          update: {},
          create: user,
        });
      };

      // Insert users
      await insertUser(users[0]);

      // Insert countries
      await batchUpsert(prisma.country, countries, (country: CountryModel) => ({
        code: country.code,
      }));
      // Insert genres
      await batchUpsert(prisma.genre, genres, (genre: GenreModel) => ({
        id: genre.id,
      }));
      // Insert awards
      await batchUpsert(prisma.award, awards, (award: AwardModel) => ({
        id: award.id,
      }));
      // Insert actors
      await batchUpsert(prisma.actor, actors, (actor: ActorModel) => ({
        id: actor.id,
      }));
      // Insert directors
      await batchUpsert(
        prisma.director,
        directors,
        (director: DirectorModel) => ({ id: director.id })
      );
      // Insert movies
      await batchUpsert(prisma.movie, movies, (movie: MovieModel) => ({
        id: movie.id,
      }));
      // Insert movie genres
      await batchUpsert(
        prisma.movieGenres,
        movieGenres,
        (movieGenre: MovieGenres) => ({
          movieId_genreId: {
            movieId: movieGenre.movieId,
            genreId: movieGenre.genreId,
          },
        })
      );
      // Insert movie actors
      await batchUpsert(
        prisma.movieActors,
        movieActors,
        (movieActor: MovieActors) => ({
          movieId_actorId: {
            movieId: movieActor.movieId,
            actorId: movieActor.actorId,
          },
        })
      );
      // Insert movie awards
      await batchUpsert(
        prisma.movieAwards,
        movieAwards,
        (movieAward: MovieAwards) => ({
          movieId_awardId: {
            movieId: movieAward.movieId,
            awardId: movieAward.awardId,
          },
        })
      );
      const maxMovieId = Math.max(...movies.map((movie) => movie.id));
      await prisma.$executeRawUnsafe(
        `ALTER SEQUENCE "Movie_id_seq" RESTART WITH ${maxMovieId + 1}`
      );

      const maxActorId = Math.max(...actors.map((actor) => actor.id));
      await prisma.$executeRawUnsafe(
        `ALTER SEQUENCE "Actor_id_seq" RESTART WITH ${maxActorId + 1}`
      );

      const maxDirectorId = Math.max(
        ...directors.map((director) => director.id)
      );
      await prisma.$executeRawUnsafe(
        `ALTER SEQUENCE "Director_id_seq" RESTART WITH ${maxDirectorId + 1}`
      );

      const maxGenreId = Math.max(...genres.map((genre) => genre.id));
      await prisma.$executeRawUnsafe(
        `ALTER SEQUENCE "Genre_id_seq" RESTART WITH ${maxGenreId + 1}`
      );

      const maxAwardId = Math.max(...awards.map((award) => award.id));
      await prisma.$executeRawUnsafe(
        `ALTER SEQUENCE "Award_id_seq" RESTART WITH ${maxAwardId + 1}`
      );

      const maxUserId = Math.max(...users.map((user) => user.id));
      await prisma.$executeRawUnsafe(
        `ALTER SEQUENCE "User_id_seq" RESTART WITH ${maxUserId + 1}`
      );
    } catch (error) {
        throw error;
    }
  }
  try {
    await main();
  } catch (error) {
    throw error;
  }
}

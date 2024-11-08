import MovieModel from "../models/MovieModel";
import { movieActors_ts } from "./datas_ts/movieActors_ts";
import { movieGenres_ts } from "./datas_ts/movieGenres_ts";
import { movies_ts } from "./datas_ts/movies_ts";
import { users_ts } from "./datas_ts/users_ts";

export const movies: MovieModel[] = movies_ts.map((movie) => ({
    id: movie.id,
    title: movie.title,
    synopsis: movie.synopsis,
    posterUrl: movie.posterUrl,
    backdropUrl: movie.backdropUrl,
    videoUrl: movie.videoUrl,
    releaseDate: new Date(movie.releaseDate),
    approvalStatus: movie.approvalStatus,
    countryCode: movie.countryId,
    directorId: movie.directorId,
    rating: typeof movie.rating === "string" ? parseFloat(movie.rating) : movie.rating,
    userId: users_ts[0].id
}));

interface MovieActorsModel {
    movieId: number;
    actorId: number;
}

export const movieActors: MovieActorsModel[] = movieActors_ts;

interface MovieGenresModel {
    movieId: number;
    genreId: number;
}

export const movieGenres: MovieGenresModel[] = movieGenres_ts;

interface MovieAwardsModel {
    movieId: number;
    awardId: number;
}

const movieIds = movies.map((movie) => movie.id);

export const movieAwards: MovieAwardsModel[] = Array.from(
    {length: movies.length * 10},
    (_, index) => ({
        movieId: movieIds[Math.floor(index / 10)],
        awardId: Math.floor(Math.random() * 25) + 1,
    })
);

// prisma client
import prisma from "../config/client";
// data dummy
import {actors} from "../databases/Actors";
import {awards} from "../databases/Awards";
import {countries} from "../databases/Countries";
import {genres} from "../databases/Genres";
import {
    movieActors,
    movieAwards,
    movieGenres,
    movies,
} from "../databases/Movies";
import {directors} from "../databases/Directors";

export default async function insertDummyData() {
    async function main() {
        // Insert countries with upsert
        for (const country of countries) {
            await prisma.country.upsert({
                where: {code: country.code}, // Menggunakan kode sebagai identifier unik
                update: {}, // Tidak ada perubahan, hanya mencegah duplikasi
                create: country, // Insert jika belum ada
            });
        }

        // Insert genres with upsert
        for (const genre of genres) {
            await prisma.genre.upsert({
                where: {id: genre.id}, // Menggunakan id sebagai identifier unik
                update: {}, // Tidak ada perubahan
                create: {...genre, id: genre.id}, // Insert jika belum ada
            });
        }

        // Insert awards with upsert
        for (const award of awards) {
            await prisma.award.upsert({
                where: {id: award.id}, // Menggunakan id sebagai identifier unik
                update: {}, // Tidak ada perubahan
                create: {...award, id: undefined}, // Insert jika belum ada
            });
        }

        // Insert actors with upsert
        for (const actor of actors) {
            await prisma.actor.upsert({
                where: {id: actor.id}, // Menggunakan id sebagai identifier unik
                update: {}, // Tidak ada perubahan
                create: {...actor, id: actor.id}, // Insert jika belum ada
            });
        }

        // Insert directors with upsert
        for (const director of directors) {
            await prisma.director.upsert({
                where: {id: director.id}, // Menggunakan id sebagai identifier unik
                update: {}, // Tidak ada perubahan
                create: {...director, id: director.id}, // Insert jika belum ada
            });
        }

        // Insert movies with upsert
        for (const movie of movies) {
            await prisma.movie.upsert({
                where: {id: movie.id}, // Menggunakan id sebagai identifier unik
                update: {}, // Tidak ada perubahan
                create: {...movie, id: movie.id}, // Insert jika belum ada
            });
        }

        // Insert movies genre
        for (const movieGenre of movieGenres) {
            await prisma.movieGenres.upsert({
                where: {
                    movieId_genreId: {
                        movieId: movieGenre.movieId,
                        genreId: movieGenre.genreId,
                    },
                },
                update: {}, // Tidak ada perubahan jika sudah ada
                create: {
                    movieId: movieGenre.movieId,
                    genreId: movieGenre.genreId,
                }, // Buat jika tidak ditemukan
            });
        }

        // Insert movies actor
        for (const movieActor of movieActors) {
            await prisma.movieActors.upsert({
                where: {
                    movieId_actorId: {
                        movieId: movieActor.movieId,
                        actorId: movieActor.actorId,
                    },
                },
                update: {}, // Tidak ada perubahan jika sudah ada
                create: {
                    movieId: movieActor.movieId,
                    actorId: movieActor.actorId,
                }, // Buat jika tidak ditemukan
            });
        }

        // Insert movies award
        for (const movieAward of movieAwards) {
            await prisma.movieAwards.upsert({
                where: {
                    movieId_awardId: {
                        movieId: movieAward.movieId,
                        awardId: movieAward.awardId,
                    },
                },
                update: {}, // Tidak ada perubahan jika sudah ada
                create: {
                    movieId: movieAward.movieId,
                    awardId: movieAward.awardId,
                }, // Buat jika tidak ditemukan
            });
        }
    }

    await main();
}

// prisma client
import prisma from "../config/client";
// data dummy
import { actors } from "../databases/Actors";
import { awards } from "../databases/Awards";
import { countries } from "../databases/Countries";
import { genres } from "../databases/Genres";
import { movies } from "../databases/Movies";
import { directors } from "../databases/Directors";

export default async function insertDummyData() {

  async function main() {
    // Insert countries with upsert
    for (const country of countries) {
      await prisma.country.upsert({
        where: { code: country.code }, // Menggunakan kode sebagai identifier unik
        update: {}, // Tidak ada perubahan, hanya mencegah duplikasi
        create: country, // Insert jika belum ada
      });
    }

    // Insert genres with upsert
    for (const genre of genres) {
      await prisma.genre.upsert({
        where: { id: genre.id }, // Menggunakan id sebagai identifier unik
        update: {}, // Tidak ada perubahan
        create: genre, // Insert jika belum ada
      });
    }

    // Insert actors with upsert
    for (const actor of actors) {
      await prisma.actor.upsert({
        where: { id: actor.id }, // Menggunakan id sebagai identifier unik
        update: {}, // Tidak ada perubahan
        create: actor, // Insert jika belum ada
      });
    }

    // Insert directors with upsert
    for (const director of directors) {
      await prisma.director.upsert({
        where: { id: director.id }, // Menggunakan id sebagai identifier unik
        update: {}, // Tidak ada perubahan
        create: director, // Insert jika belum ada
      });
    }

    // Insert awards with upsert
    for (const award of awards) {
      await prisma.award.upsert({
        where: { id: award.id }, // Menggunakan id sebagai identifier unik
        update: {}, // Tidak ada perubahan
        create: award, // Insert jika belum ada
      });
    }

    // Insert movies with upsert
    for (const movie of movies) {
      await prisma.movie.upsert({
        where: { id: movie.id }, // Menggunakan id sebagai identifier unik
        update: {}, // Tidak ada perubahan
        create: movie, // Insert jika belum ada
      });
    }
  }

  await main();
}

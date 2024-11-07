import prisma from "../config/client";
import SearchParams from "../helpers/SearchParams";
import {
  addAwardFilter,
  addDirectorFilter,
  addMovieYearFilter,
  addActorFilter,
  addCountryFilter,
  addGenreFilter,
} from "../helpers/fieldFilter";

class MovieService {
  joinTable = {
    include: {
      country: true,
      director: true,
      genres: {
        select: {
          genre: true,
        },
      },
      actors: {
        select: {
          actor: {
            include: {
              country: true,
            },
          },
        },
      },
      awards: {
        select: {
          award: true,
        },
      },
      reviews: true,
    },
  };

  /**
   * Refactors the movie object to sort and map genres, actors, and awards.
   * @param {any[]} movies - The array of movies to refactor.
   * @returns {any[]} An array of refactored movies.
   */
  refactorMovies(movies: any[]): any[] {
    return movies
      .map((movie) => ({
        ...movie,
        genres: this.sortAndMap(movie.genres, "genre"),
        actors: this.sortAndMap(movie.actors, "actor"),
        awards: this.sortAndMap(movie.awards, "award"),
      }))
      .sort((a, b) => a.id - b.id);
  }

  /**
   * Maps and sorts an array of objects based on a specified property.
   * @param {any[]} items - The array of items to process.
   * @param {string} property - The property to extract from each item.
   * @returns {any[]} A sorted array of the specified property.
   */
  private sortAndMap(items: any[], property: string): any[] {
    return items
      .map((item) => item[property])
      .sort((a: { id: number }, b: { id: number }) => a.id - b.id);
  }

  /**
   * Counts the total number of movies in the database.
   * @param {object} whereClause - The where clause to filter the movies.
   * @param {any} [movieIds] - The IDs of the movies to count.
   * @returns {Promise<number>} A promise that resolves to the total count of movies.
   * @throws {Error} Throws an error if the count operation fails.
   */
  async countMovies(whereClause?: object, movieIds?: any): Promise<number> {
    try {
      if (movieIds) {
        return prisma.movie.count({
          where: {
            id: { in: movieIds },
            ...whereClause,
          },
        });
      }
      return prisma.movie.count({ where: whereClause });
    } catch (error) {
      console.error("Error counting movies:", error);
      throw new Error("Could not count movies");
    }
  }

  /**
   * Creates a new movie record in the database along with its related data
   * (country, director, genres, actors, and awards) within a transaction.
   * @param {any} movieData - The data for the new movie.
   * @returns {Promise<any>} A promise that resolves to the newly created movie object.
   * @throws {Error} Throws an error if the movie creation fails.
   */
  async createMovie(movieData: any): Promise<any> {
    try {
      const {
        title,
        synopsis,
        posterUrl,
        releaseDate,
        rating,
        backdropUrl,
        videoUrl,
        countryCode,
        directorId,
        genres,
        actors,
        awards,
        email,
      } = movieData;

      const user = await prisma.user.findUnique({
        where: { email },
        select: { role: true, id: true },
      });

      if (!user) {
        throw new Error("User not found");
      }

      let approvalStatus: boolean;

      approvalStatus = user.role == "admin";

      const userId = user.id;

      if (
        !title ||
        !synopsis ||
        !posterUrl ||
        !releaseDate ||
        !backdropUrl ||
        !videoUrl ||
        !countryCode ||
        !directorId ||
        !genres ||
        !actors
      ) {
        throw new Error("Missing required fields");
      }

      const newMovie = await prisma.$transaction(async (prisma) => {
        const movie = await prisma.movie.create({
          data: {
            title,
            synopsis,
            posterUrl,
            releaseDate: new Date(releaseDate),
            approvalStatus,
            rating: parseFloat(rating),
            backdropUrl,
            videoUrl,
            addedBy: { connect: { id: userId } },
            country: { connect: { code: countryCode } },
            director: { connect: { id: directorId } },
            genres: {
              create: genres.map((genre: any) => ({
                genre: { connect: { id: genre.id } },
              })),
            },
            actors: {
              create: actors.map((actor: any) => ({
                actor: { connect: { id: actor.id } },
              })),
            },
            awards: {
              create: awards.map((award: any) => ({
                award: { connect: { id: award.id } },
              })),
            },
          },
        });
        console.info("Movie created successfully", movie.title);
        return prisma.movie.findUnique({
          where: { id: movie.id },
          include: this.joinTable.include,
        });
      });

      return this.refactorMovies([newMovie])[0];
    } catch (error) {
      throw new Error(String(error));
    }
  }

  /**
   * Retrieves a movie by its ID from the database, along with its related data.
   * @param {number} id - The ID of the movie to retrieve.
   * @returns {Promise<any>} A promise that resolves to the movie object.
   * @throws {Error} Throws an error if the movie is not found or if the fetch fails.
   */
  async getMovieById(id: number): Promise<any> {
    try {
      const movie = await prisma.movie.findUnique({
        where: { id },
        ...this.joinTable,
      });

      return this.refactorMovies([movie])[0];
    } catch (error) {
      throw new Error(`Could not fetch movie with ID ${id}`);
    }
  }

  /**
   * Updates a movie by its ID with the provided updated data.
   * @param {number} id - The ID of the movie to update.
   * @param {any} updatedData - The data to update the movie with.
   * @returns {Promise<any>} A promise that resolves to the updated movie object.
   * @throws {Error} Throws an error if the update operation fails.
   */
  async updateMovieById(id: number, updatedData: any): Promise<any> {
    try {
      // Extract main data fields from updatedData
      const dataToUpdate: any = {
        ...(updatedData.title ? { title: updatedData.title } : {}),
        ...(updatedData.synopsis ? { synopsis: updatedData.synopsis } : {}),
        ...(updatedData.posterUrl ? { posterUrl: updatedData.posterUrl } : {}),
        ...(updatedData.releaseDate
          ? { releaseDate: new Date(updatedData.releaseDate) }
          : {}),
        ...(updatedData.approvalStatus !== undefined
          ? { approvalStatus: updatedData.approvalStatus }
          : {}),
        ...(updatedData.rating !== undefined
          ? { rating: parseFloat(updatedData.rating) }
          : {}),
        ...(updatedData.countryCode
          ? { country: { connect: { code: updatedData.countryCode } } }
          : {}),
        ...(updatedData.directorId
          ? { director: { connect: { id: updatedData.directorId } } }
          : {}),
        ...(updatedData.backdropUrl
          ? { backdropUrl: updatedData.backdropUrl }
          : {}),
        ...(updatedData.videoUrl ? { videoUrl: updatedData.videoUrl } : {}),
      };

      // Update movie main fields first
      const updatedMovie = await prisma.$transaction(async (prisma) => {
        const movie = await prisma.movie.update({
          where: { id },
          data: dataToUpdate,
        });

        // Handle relational updates for genres, actors, and awards
        await prisma.movieGenres.deleteMany({ where: { movieId: id } });
        await prisma.movieActors.deleteMany({ where: { movieId: id } });
        await prisma.movieAwards.deleteMany({ where: { movieId: id } });

        // Reconnect updated genres, actors, and awards
        if (updatedData.genres && updatedData.genres.length > 0) {
          await prisma.movieGenres.createMany({
            data: updatedData.genres.map((genre: { id: number }) => ({
              movieId: id,
              genreId: genre.id,
            })),
          });
        }

        if (updatedData.actors && updatedData.actors.length > 0) {
          await prisma.movieActors.createMany({
            data: updatedData.actors.map((actor: { id: number }) => ({
              movieId: id,
              actorId: actor.id,
            })),
          });
        }

        if (updatedData.awards && updatedData.awards.length > 0) {
          await prisma.movieAwards.createMany({
            data: updatedData.awards.map((award: { id: number }) => ({
              movieId: id,
              awardId: award.id,
            })),
          });
        }

        // Return the updated movie with all relations included
        return prisma.movie.findUnique({
          where: { id: movie.id },
          include: this.joinTable.include,
        });
      });

      return this.refactorMovies([updatedMovie])[0];
    } catch (error) {
      console.error(`Error updating movie with ID ${id}:`, error);
      throw new Error(`Could not update movie with ID ${id}`);
    }
  }

  /**
   * Prepares the relation update data for genres, actors, or awards.
   * @param {Array<{ id: number }>} relations - The relations to update.
   * @returns {object} The prepared data for the Prisma update operation.
   */
  private updateRelations(relations: Array<{ id: number }>): object {
    return relations.length > 0
      ? {
          deleteMany: {},
          connect: relations.map(({ id }) => ({ id })),
        }
      : { deleteMany: {} };
  }

  /**
   * Deletes a movie by its ID along with its associated actors, genres, and awards.
   * @param {number} id - The ID of the movie to delete.
   * @returns {Promise<{ message: string, deletedMovie: any }>} A promise that resolves to a message and the deleted movie object.
   * @throws {Error} Throws an error if the delete operation fails.
   */
  async deleteMovieById(
    id: number
  ): Promise<{ message: string; deletedMovie: any }> {
    try {
      const deletedMovie = await prisma.$transaction(async (prisma) => {
        await Promise.all([
          prisma.movieActors.deleteMany({ where: { movieId: id } }),
          prisma.movieGenres.deleteMany({ where: { movieId: id } }),
          prisma.movieAwards.deleteMany({ where: { movieId: id } }),
        ]);

        return prisma.movie.delete({ where: { id } });
      });

      return {
        message: `Movie with ID ${id} deleted successfully`,
        deletedMovie,
      };
    } catch (error) {
      console.error(`Error deleting movie with ID ${id}:`, error);
      throw new Error(`Could not delete movie with ID ${id}`);
    }
  }

  /**
   * Retrieves a list of movies based on pagination, search parameters, and filters.
   * @param {Object} options - The options for fetching movies.
   * @param {number} options.page - The current page number.
   * @param {number} options.pageSize - The number of movies per page.
   * @param {SearchParams} options.params - The search parameters including filters, search term, and sorting.
   * @returns {Promise<any[]>} A promise that resolves to a list of movies and the total count of movies.
   * @throws {Error} Throws an error if the fetch operation fails.
   */
  async getMovies({
    page = 1,
    pageSize = 24,
    params,
  }: {
    page?: number;
    pageSize?: number;
    params: SearchParams;
  }): Promise<any[]> {
    const skip = (page - 1) * pageSize;
    const {
      searchTerm,
      sortBy,
      sortOrder,
      genre,
      country,
      actor,
      year,
      award,
      director,
      approvalStatus,
      addedBy,
    } = params;
    const whereClause: any = { AND: [] };

    if (genre) addGenreFilter(whereClause, genre);
    if (country) addCountryFilter(whereClause, country);
    if (actor) addActorFilter(whereClause, actor);
    if (year) addMovieYearFilter(whereClause, year);
    if (award) addAwardFilter(whereClause, award);
    if (director) addDirectorFilter(whereClause, director);
    if (addedBy) whereClause.AND.push({ addedBy: { username: addedBy } });

    // nambahin if approvalStatus != undefined
    if (approvalStatus !== undefined) {
      whereClause.AND.push({ approvalStatus });
    } else {
      whereClause.AND.push({ approvalStatus: true });
    }

    if (whereClause.AND.length === 0) {
      delete whereClause.AND;
    }

    try {
      let movies;
      let totalItems;

      if (searchTerm) {
        const searchQuery = `
                SELECT id
                FROM "Movie"
                WHERE SIMILARITY("title", $1) > 0.1 OR SIMILARITY("synopsis", $1) > 0.5
                ORDER BY SIMILARITY("title", $1) DESC
                LIMIT $2 OFFSET $3;
            `;
        const searchResults = (await prisma.$queryRawUnsafe(
          searchQuery,
          searchTerm,
          pageSize,
          skip
        )) as any[];

        const movieIds = searchResults.map((movie) => movie.id);
        movies = await prisma.movie.findMany({
          where: {
            id: { in: movieIds },
            ...whereClause,
          },
          include: this.joinTable.include,
          skip,
          take: pageSize,
        });
        totalItems = await this.countMovies(whereClause, movieIds);
      } else {
        movies = await prisma.movie.findMany({
          where: whereClause,
          orderBy: sortBy ? { [sortBy]: sortOrder || "asc" } : undefined,
          include: this.joinTable.include,
          skip,
          take: pageSize,
        });
        totalItems = await this.countMovies(whereClause);
      }

      return [this.refactorMovies(movies), totalItems];
    } catch (error) {
      console.error("Failed to fetch movies: ", error);
      throw new Error("Error fetching movies");
    }
  }

  // get movies by username
  async getMoviesByUser(username: string): Promise<any[]> {
    try {
      const movies = await prisma.movie.findMany({
        where: { addedBy: { username } },
        include: this.joinTable.include,
      });

      return this.refactorMovies(movies);
    } catch (error) {
      console.error("Failed to fetch movies: ", error);
      throw new Error("Error fetching movies");
    }
  }
}

const movieService = new MovieService();
export default movieService;

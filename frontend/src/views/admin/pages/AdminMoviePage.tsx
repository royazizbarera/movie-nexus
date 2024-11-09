import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Typography from "@mui/joy/Typography";
import ModalDialog from "@mui/joy/ModalDialog";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import BreadcrumbsHome from "../components/BreadcrumbsHome";
import BreadcrumbsDashboard from "../components/BreadcrumbsDashboard";
import { AdminTableLayout } from "../layouts/AdminTableLayout";
import GenericTable, { Column } from "../components/GenericTable";
import {
  MovieParamsModel,
  MovieModelTable,
  convertMovieModelToTable,
  MovieModel,
} from "../../../models/MovieModel";
import genreController from "../../../controllers/GenreController";
import { GenreModel } from "../../../models/GenreModel";
import { PaginationModel } from "../../../models/PaginationModel";
import actorController from "../../../controllers/ActorController";
import { ActorModel } from "../../../models/ActorModel";
import awardController from "../../../controllers/AwardController";
import { AwardModel } from "../../../models/AwardModel";
import getYearsFromXtoY from "../../../helpers/getYearsFromXtoY";
import countryController from "../../../controllers/CountryController";
import { CountryModel } from "../../../models/CountryModel";
import {
  PAGE_SIZE_DROPDOWN,
  SORT_ORDER_DROPDOWN,
} from "../../../configs/constants";
import movieController from "../../../controllers/MovieController";
import { Button, Modal, ModalClose, ModalOverflow } from "@mui/joy";
import DetailMovieComponent from "../../components/DetailMovieComponent";
import { DirectorModel } from "../../../models/DirectorModel";
import directorController from "../../../controllers/DirectorController";
import { useAuthStore } from "../../../contexts/authStore";
import userController from "../../../controllers/UserController";
import { UserModel } from "../../../models/UserModel";
import { useApprovalStore } from "../../../contexts/approvalStore";
import SnackBarMessage, {
  SnackBarMessageProps,
} from "../../components/SnackbarMessage";

const columns: Column<MovieModelTable>[] = [
  {
    key: "id",
    label: "ID",
    type: "number",
    readonly: true,
    width: 70,
  },
  {
    key: "addedBy",
    label: "Uploaded By",
    type: "string_autocomplete",
    readonly: true,
  },
  {
    key: "approvalStatus",
    label: "Approval Status",
    type: "boolean",
  },
  { key: "title", label: "Title", type: "string", required: true },
  { key: "synopsis", label: "Synopsis", type: "string", required: true },
  { key: "posterUrl", label: "Poster", type: "string", required: true },
  { key: "backdropUrl", label: "Backdrop", type: "string", required: true },
  { key: "videoUrl", label: "Video", type: "string", required: true },
  { key: "releaseDate", label: "Release Date", type: "date", required: true },

  { key: "rating", label: "Rating", type: "number", readonly: true },
  {
    key: "country",
    label: "Country",
    type: "string_autocomplete",
    required: true,
  },
  {
    key: "director",
    label: "Director",
    type: "string_autocomplete",
    required: true,
  },
  { key: "genres", label: "Genres", type: "string[]", required: true },
  { key: "actors", label: "Actors", type: "string[]", required: true },
  { key: "awards", label: "Awards", type: "string[]" },
  { key: "reviews", label: "Reviews", type: "string[]" },
];

export default function AdminMoviePage() {
  const { user } = useAuthStore();
  const { incrementTotalUnapprovedMovies } = useApprovalStore();

  const [snackbar, setSnackbar] = React.useState<SnackBarMessageProps>({
    key: "admin-user",
    open: false,
    message: "",
    variant: "danger",
  });

  const [realMovies, setRealMovies] = React.useState<MovieModel[]>([]);
  const [movies, setMovies] = React.useState<MovieModelTable[]>([]);
  const [pagination, setPagination] = React.useState<PaginationModel>({
    page: 1,
    pageSize: 24,
    totalItems: 0,
    totalPages: 1,
  });
  const [movieParams, setMovieParams] = React.useState<MovieParamsModel>({
    page: pagination.page,
    pageSize: pagination.pageSize,
  });

  const [genres, setGenres] = React.useState<string[]>([]);
  const [realGenres, setRealGenres] = React.useState<GenreModel[]>([]);

  const [actors, setActors] = React.useState<string[]>([]);
  const [realActors, setRealActors] = React.useState<ActorModel[]>([]);

  const [awards, setAwards] = React.useState<string[]>([]);
  const [realAwards, setRealAwards] = React.useState<AwardModel[]>([]);

  const [countries, setCountries] = React.useState<string[]>([]);
  const [realCountries, setRealCountries] = React.useState<CountryModel[]>([]);

  const [directors, setDirectors] = React.useState<string[]>([]);
  const [realDirectors, setRealDirectors] = React.useState<DirectorModel[]>([]);

  const [openDetailItem, setOpenDetailItem] = React.useState(false);
  // selected item
  const [selectedItem, setSelectedItem] = React.useState<MovieModel | null>(
    null
  );

  const [users, setUsers] = React.useState<string[]>([]);

  const handleOpenDetailItem = () => {
    setOpenDetailItem(true);
  };

  const handleCloseDetailItem = () => {
    setOpenDetailItem(false);
  };

  const fetchMovies = async (movieParamsModel?: MovieParamsModel) => {
    try {
      const responseUsers = await userController.getUsers();
      const dataUsers = responseUsers.data;
      const response = await movieController.getMovies(movieParamsModel);
      const { data: movies, pagination } = response;
      setRealMovies(movies);
      setMovies(
        movies.map((movie) => {
          return convertMovieModelToTable({
            ...movie,
            addedBy: dataUsers.find((u) => u.id === movie.userId)!,
          });
        })
      );
      setPagination(pagination!);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const getGenres = async () => {
    try {
      const response = await genreController.getGenres();
      const data = response.data;
      setRealGenres(data);
      setGenres(
        data.map((genre: GenreModel) => {
          return genre.name;
        })
      );
    } catch (error) {}
  };

  const getActors = async () => {
    try {
      const response = await actorController.getActors();
      const data = response.data;
      setRealActors(data);
      setActors(
        data.map((actor: ActorModel) => {
          return actor.name;
        })
      );
    } catch (error) {
      console.error("Error fetching directors:", error);
    }
  };

  const getAward = async () => {
    try {
      const response = await awardController.getAwards();
      const data = response.data;
      setRealAwards(data);
      setAwards(
        data.map((award: AwardModel) => {
          return award.name;
        })
      );
    } catch (error) {}
  };

  const getCountries = async () => {
    try {
      const response = await countryController.getCountries();
      const data = response.data;
      setRealCountries(data);
      setCountries(
        data.map((country: CountryModel) => {
          return country.name;
        })
      );
    } catch (error) {}
  };

  const getDirectors = async () => {
    try {
      const response = await directorController.getDirectors();
      const data = response.data;
      setRealDirectors(data);
      setDirectors(
        data.map((director: DirectorModel) => {
          return director.name;
        })
      );
    } catch (error) {
      console.error("Error fetching directors:", error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await userController.getUsers();
      const data = response.data;
      setUsers(
        data.map((user: UserModel) => {
          return user.username;
        })
      );
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  React.useEffect(() => {
    getGenres();
    getActors();
    getAward();
    getCountries();
    getDirectors();
    getUsers();
  }, []);

  React.useEffect(() => {
    fetchMovies(movieParams); // Pass current page to fetchMovies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieParams]);

  // TODO: ADD Movie
  const handleAddMovie = async (newMovie: MovieModelTable) => {
    try {
      const parsedMovie: MovieModel = {
        id: newMovie.id,
        title: newMovie.title,
        synopsis: newMovie.synopsis,
        posterUrl: newMovie.posterUrl,
        backdropUrl: newMovie.backdropUrl,
        videoUrl: newMovie.videoUrl,
        releaseDate: newMovie.releaseDate,
        approvalStatus: newMovie.approvalStatus,
        rating: newMovie.rating,
        country: realCountries.find((c) => c.name === newMovie.country) || null,
        countryCode:
          realCountries.find((c) => c.name === newMovie.country)?.code || "",
        director:
          realDirectors.find((d) => d.name === newMovie.director) || null,
        directorId:
          realDirectors.find((d) => d.name === newMovie.director)?.id || 0,
        genres: newMovie.genres.map((genre) => {
          return (
            realGenres.find((g) => g.name === genre)! || { id: 0, name: "" }
          );
        }),
        actors: newMovie.actors.map((actor) => {
          return realActors.find((a) => a.name === actor)!;
        }),
        awards:
          newMovie.awards.map((award) => {
            return realAwards.find((a) => a.name === award)!;
          }) || undefined,
        reviews: null,

        addedBy: user || null,
        userId: user?.id || 2606,
      };
      console.info("parsed movie: ", parsedMovie);
      const response = await movieController.addMovie(parsedMovie);
      console.info("add movie: ", parsedMovie);
      fetchMovies(movieParams);
      if (response.code !== 201) {
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error adding movie:", error);
      throw String(error);
    }
  };

  // TODO: UPDATE Movie
  const handleEditMovie = async (updatedMovie: MovieModelTable) => {
    try {
      const parsedMovie: MovieModel = {
        id: updatedMovie.id,
        title: updatedMovie.title,
        synopsis: updatedMovie.synopsis,
        posterUrl: updatedMovie.posterUrl,
        backdropUrl: updatedMovie.backdropUrl,
        videoUrl: updatedMovie.videoUrl,
        releaseDate: updatedMovie.releaseDate,
        approvalStatus: updatedMovie.approvalStatus || false,
        rating: updatedMovie.rating || 0,
        country:
          realCountries.find((c) => c.name === updatedMovie.country) || null,
        countryCode:
          realCountries.find((c) => c.name === updatedMovie.country)?.code ||
          "",
        director:
          realDirectors.find((d) => d.name === updatedMovie.director) || null,
        directorId:
          realDirectors.find((d) => d.name === updatedMovie.director)?.id || 0,
        genres: updatedMovie.genres.map((genre) => {
          return (
            realGenres.find((g) => g.name === genre)! || { id: 0, name: "" }
          );
        }),
        actors: updatedMovie.actors.map((actor) => {
          return realActors.find((a) => a.name === actor)!;
        }),
        awards:
          updatedMovie.awards.map((award) => {
            return realAwards.find((a) => a.name === award)!;
          }) || [],
        reviews: null,
        addedBy: user || null,
        userId: user?.id || 2606,
      };
      const response = await movieController.updateMovie(
        updatedMovie.id,
        parsedMovie
      );
      fetchMovies(movieParams);
      if (response.code !== 200) {
        return false;
      }
      console.info("edit movie: ", parsedMovie);

      console.info("update movie: ", updatedMovie);
      return true;
    } catch (error) {
      console.error("Error updating movie:", error);
      throw String(error);
    }
  };

  // TODO: DELETE Movie
  const handleDeleteMovie = async (movie: MovieModelTable) => {
    try {
      const response = await movieController.deleteMovie(movie.id);
      fetchMovies(movieParams);
      if (response.code !== 200) {
        return false;
      }
      console.log("Movie deleted successfully:", response.message);
      console.info("delete movie with id: ", movie.id);
      return true;
    } catch (error) {
      console.error("Error deleting movie:", error);
      throw String(error);
    }
  };
  const handlePageChange = async (newPage: number) => {
    handleFilterChange("page", newPage);
  };

  const handleFilterChange = (name: string, value: string | number) => {
    setMovieParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
    console.info("Filter change: ", name, value);
  };

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Header />
        <Sidebar selected="movies" />
        <AdminTableLayout>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<ChevronRightRoundedIcon fontSize="small" />}
              sx={{ pl: 0 }}
            >
              <BreadcrumbsHome />
              <BreadcrumbsDashboard />
              <Typography
                color="primary"
                sx={{ fontWeight: 500, fontSize: 12 }}
              >
                Movies
              </Typography>
            </Breadcrumbs>
          </Box>
          <GenericTable<MovieModelTable>
            title="Movies"
            actionInFront
            data={movies}
            columns={columns}
            options={{
              genres: genres,
              actors: actors,
              awards: awards,
              director: directors,
              country: countries,
            }}
            filters={{
              genre: genres,
              actor: actors,
              award: awards,
              year: getYearsFromXtoY(
                new Date().getFullYear() - 20,
                new Date().getFullYear(),
                "desc",
                "string"
              ) as string[],
              director: ["Pete Docter"],
              country: countries,
              addedBy: users,
              sortBy: columns.map((column) => column.key),
              sortOrder: SORT_ORDER_DROPDOWN,
              pageSize: PAGE_SIZE_DROPDOWN,
            }}
            onAdd={handleAddMovie}
            onEdit={handleEditMovie}
            onDelete={handleDeleteMovie}
            onPageChange={handlePageChange}
            page={pagination.page}
            pageSize={pagination.pageSize}
            totalItems={pagination.totalItems}
            totalPages={pagination.totalPages}
            // search and filter
            onFilterChange={handleFilterChange}
            applySearch
            realtimeSearch
            placeholderSearch="Search movies..."
            onSearchApply={(searchTerm) =>
              handleFilterChange("searchTerm", searchTerm)
            }
            onDetail={(movieTable) => {
              const movie = realMovies.find((m) => m.id === movieTable.id);
              setSelectedItem(movie || null);
              console.info("Detail movie table: ", movieTable);
              console.info("Detail movie: ", movie);
              handleOpenDetailItem();
            }}
            renderRowActions={(movie) => {
              return (
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="outlined"
                    color="warning"
                    size="sm"
                    onClick={async () => {
                      try {
                        await handleEditMovie({
                          ...movie,
                          approvalStatus: false,
                        });
                        incrementTotalUnapprovedMovies();
                        setSnackbar({
                          key: "admin-movie",
                          open: true,
                          message: `Movie with id: ${movie.id} has been rejected`,
                          variant: "warning",
                        });
                      } catch (error) {
                        setSnackbar({
                          key: "admin-movie",
                          open: true,
                          message: String(error),
                          variant: "danger",
                        });
                      }
                    }}
                  >
                    Reject
                  </Button>
                </Box>
              );
            }}
          />

          {/* <OrderList /> */}
        </AdminTableLayout>
      </Box>
      <React.Fragment>
        {/* Detail Item Modal */}
        <Modal
          open={openDetailItem}
          onClose={handleCloseDetailItem} // Menutup modal tanpa mereset newItem
          sx={{ zIndex: 20000 }}
        >
          <ModalOverflow>
            <ModalDialog layout="fullscreen">
              <ModalClose />
              {selectedItem && <DetailMovieComponent movie={selectedItem} />}
            </ModalDialog>
          </ModalOverflow>
        </Modal>
      </React.Fragment>
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        {/* Your existing components here */}
        {snackbar.open && (
          <SnackBarMessage
            key={snackbar.key}
            open={snackbar.open}
            message={snackbar.message}
            variant={snackbar.variant}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
          />
        )}
      </Box>
    </CssVarsProvider>
  );
}

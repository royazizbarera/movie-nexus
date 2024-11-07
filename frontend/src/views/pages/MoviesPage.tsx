import React from "react";

import { Box, Grid, Button, Input, Autocomplete, FormControl } from "@mui/joy";
import MainLayout from "../layouts/MainLayout";
import MovieCard from "../components/MovieCard";

import AppAppBar from "../components/AppAppBar";
import { MovieModel, MovieParamsModel } from "../../models/MovieModel";
import { PaginationModel } from "../../models/PaginationModel";
import movieController from "../../controllers/MovieController";
import genreController from "../../controllers/GenreController";
import actorController from "../../controllers/ActorController";
import { GenreModel } from "../../models/GenreModel";
import { ActorModel } from "../../models/ActorModel";
import awardController from "../../controllers/AwardController";
import { AwardModel } from "../../models/AwardModel";
import countryController from "../../controllers/CountryController";
import { CountryModel } from "../../models/CountryModel";
import PaginationComponent from "../admin/components/PaginationComponent";
import getYearsFromXtoY from "../../helpers/getYearsFromXtoY";
import {
  PAGE_SIZE_DROPDOWN,
  SORT_ORDER_DROPDOWN,
} from "../../configs/constants";
import CreateMovieWritter from "../admin/components/CreateMovieWritter";
import { useAuthStore } from "../../contexts/authStore";

const styleSelect = {
  width: "100%",
  [`& .MuiSelect-indicator`]: {
    transition: "0.2s",
    [`&.Mui-expanded`]: {
      transform: "rotate(-180deg)",
    },
  },
};

export default function MoviesPage() {
  const { user } = useAuthStore();
  const [movies, setMovies] = React.useState<MovieModel[]>([]);
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
  const [actors, setActors] = React.useState<string[]>([]);
  // const [actors, setActors] = React.useState<string[]>(["Actor 1", "Actor2", "Actor3"]);
  const [awards, setAwards] = React.useState<string[]>([]);
  const [countries, setCountries] = React.useState<string[]>([]);

  const filters = [
    {
      name: "genre",
      placeholder: "Genre",
      options: genres,
    },
    {
      name: "actor",
      placeholder: "Actor",
      options: actors,
    },
    {
      name: "award",
      placeholder: "Award",
      options: awards,
    },
    {
      name: "country",
      placeholder: "Country",
      options: countries,
    },
    {
      name: "year",
      placeholder: "Year",
      options: getYearsFromXtoY(1950, new Date().getFullYear()),
    },
    {
      name: "rating",
      placeholder: "Rating",
      options: ["1", "2", "3", "4", "5"],
    },
    {
      name: "sortBy",
      placeholder: "Sort By",
      options: [
        "title",
        "genre",
        "actor",
        "award",
        "country",
        "year",
        "rating",
      ],
    },
    {
      name: "pageSize",
      placeholder: "Page Size",
      options: PAGE_SIZE_DROPDOWN,
    },
    {
      name: "sortOrder",
      placeholder: "Sort Order",
      options: SORT_ORDER_DROPDOWN,
    },
  ];

  const [openAddModal, setOpenAddModal] = React.useState(false);
  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    fetchMovies(movieParams); // Fetch movies after adding new item
    setOpenAddModal(false); // Hanya tutup modal tanpa reset newItem
  };

  const fetchMovies = async (movieParamsModel?: MovieParamsModel) => {
    try {
      const response = await movieController.getMovies(movieParamsModel);
      const { data: movies, pagination } = response;
      setMovies(movies);
      setPagination(pagination!);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const getGenres = async () => {
    try {
      const response = await genreController.getGenres();
      const data = response.data;
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
      setCountries(
        data.map((country: CountryModel) => {
          return country.name;
        })
      );
    } catch (error) {}
  };

  React.useEffect(() => {
    getGenres();
    getActors();
    getAward();
    getCountries();
  }, []);

  React.useEffect(() => {
    fetchMovies(movieParams); // Pass current page to fetchMovies
  }, [movieParams]);

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
    <>
      <AppAppBar />
      <MainLayout giveSpace pt={14}>
        {/* Button add movie if role writer or admin */}
        {user?.role === "admin" || user?.role === "writer" ? (
          <Button
            variant="soft"
            color="primary"
            sx={{ mb: 4 }}
            onClick={() => {
              handleOpenAddModal();
            }}
          >
            Add Movie
          </Button>
        ) : null}
        {/* Toolbar Filtering */}
        <Box sx={{ mb: 4, display: "flex", flexDirection: "column" }}>
          {/* Filter Dropdowns */}
          <Grid
            container
            spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
            sx={{ flexGrow: 1, justifyContent: "left" }}
          >
            {filters.map((filter) => (
              <Grid
                key={filter.name}
                xs={6}
                sm={4}
                md={4}
                lg={2}
                xl={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Autocomplete
                  placeholder={"All " + filter.name}
                  sx={styleSelect}
                  options={filter.options.map((opt) => opt)}
                  onChange={(e, value) => {
                    handleFilterChange(filter.name, value ? value : "");
                    console.info(filter.name, value);
                  }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Search & Apply */}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());

              handleFilterChange("searchTerm", formJson.searchTerm);

              console.info("Form JSON: ", formJson);
            }}
          >
            <Grid
              container
              spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
              sx={{ flexGrow: 1, justifyContent: "left", m: 0 }}
            >
              <Grid
                xs={12}
                sm={12}
                md={8}
                lg={10}
                xl={10}
                sx={{ display: "flex", justifyContent: "center", pl: 0 }}
              >
                <FormControl key={"searchTerm"} sx={{ width: "100%", mt: 2 }}>
                  <Input name="searchTerm" placeholder={"Search movies..."} />
                </FormControl>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={4}
                lg={2}
                xl={2}
                sx={{ display: "flex", justifyContent: "center", pr: 0 }}
              >
                <Button type="submit" sx={{ flexGrow: 1, mt: 2 }}>
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>

        {/* Movies */}
        <Box>
          <Grid
            container
            spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
            sx={{ flexGrow: 1, justifyContent: "left" }}
          >
            {movies.map((movie: any, index: number) => (
              <Grid
                key={index}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                xl={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MovieCard
                  key={index}
                  id={movie.id}
                  title={movie.title}
                  posterUrl={movie.posterUrl}
                  rating={movie.rating}
                  year={movie.releaseDate}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <PaginationComponent
          page={pagination.page}
          pageSize={pagination.pageSize}
          totalPages={pagination.totalPages}
          totalItems={pagination.totalItems}
          handlePageChange={handlePageChange}
          handleNextPage={() => handlePageChange((pagination.page || 1) + 1)}
          handlePrevPage={() => handlePageChange(pagination.page - 1)}
        />

        <CreateMovieWritter
          openAddModal={openAddModal}
          handleCloseAddModal={handleCloseAddModal}
        />
      </MainLayout>
    </>
  );
}

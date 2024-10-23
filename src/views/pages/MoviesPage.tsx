import {
  Box,
  Grid,
  Select,
  Option,
  Button,
  Input,
  iconButtonClasses,
  IconButton,
} from "@mui/joy";
import MainLayout from "../layouts/MainLayout";
import MovieCard from "../components/MovieCard";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//
import movieController from "../../controllers/movieController";
import AppAppBar from "../components/AppAppBar";

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
  const [queryParameters] = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string;
  }>({});
  // const [paramString, setParamString] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  // movies
  const [movies, setMovies] = useState<any[]>([]);
  // paginasi
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [genre, setGenre] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);

  const filters = [
    {
      name: "genre",
      placeholder: "Genre",
      options: genres,
    },
    {
      name: "actor",
      placeholder: "Actor",
      options: ["Actor 1", "Actor 2", "Actor 3"],
    },
    { name: "year", placeholder: "Year", options: ["2021", "2020", "2019"] },
    {
      name: "award",
      placeholder: "Award",
      options: ["Oscar", "Golden Globe", "BAFTA"],
    },
    {
      name: "director",
      placeholder: "Director",
      options: ["Director 1", "Director 2"],
    },
    {
      name: "country",
      placeholder: "Country",
      options: ["USA", "UK", "France"],
    },
  ];

  useEffect(() => {
    movieController
      .getGenres()
      .then((res) => {
        const genreNames = res.data.map((genre: { id: number; name: string }) => genre.name);
      
        setGenres(genreNames); // Asumsikan res.data adalah array genre
      })
      .catch((err) => {
        console.error("Error fetching genres:", err);
      });
  }, []);
  

  // fetch using controller
  useEffect(() => {
    movieController
      .getMovies({
        searchTerm: searchQuery,
        page: page,
        genre: genre,
      })
      .then((res) => {
        console.log("film", res.data);
        setMovies(res.data);
        setTotalPage(res.pagination.totalPages);
        setPage(res.pagination.page);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [genre, page, searchQuery]);

  const handleFilterChange = (name: string, value: string) => {
    console.info(name, value);
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    if (name === "genre") {
      setGenre(value);
    }
  };

  const handleApplyFilter = () => {
    const queryString = Object.entries(selectedFilters)
      .filter(([_, value]) => value !== "")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    // Tambahkan search query jika ada
    const searchParam = searchQuery ? `${searchQuery}` : "";
    // setParamString(`${queryString}${searchParam}`);
    setSearchQuery(searchQuery);
    setGenre(selectedFilters["genre"]);
    // Redirect ke URL dengan query parameter
    navigate(`/movies?${queryString}${searchParam}`);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if (page < totalPage) setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <AppAppBar />
      <MainLayout giveSpace pt={14}>
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
                <Select
                  placeholder={filter.placeholder}
                  indicator={<KeyboardArrowDown />}
                  sx={styleSelect}
                  onChange={(e, value) =>
                    handleFilterChange(filter.name, value as string)
                  }
                >
                  <Option value="">All {filter.placeholder}</Option>
                  {filter.options.map((option, idx) => (
                    <Option key={idx} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </Grid>
            ))}
          </Grid>

          {/* Search & Apply */}
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
              {/* Search Bar */}
              <Input
                placeholder="Search by title"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ width: "100%", mt: 2 }}
              />
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={4}
              lg={2}
              xl={2}
              sx={{ display: "flex", justifyContent: "center", pr: 0 }}
            >
              <Button onClick={handleApplyFilter} sx={{ flexGrow: 1, mt: 2 }}>
                Apply Filter & Search
              </Button>
            </Grid>
          </Grid>
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

        {/* Pagination */}
        <Grid
          container
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            gap: 1,
            mt: 2,
          }}
        >
          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            disabled={page === 1}
            onClick={handlePreviousPage}
            startDecorator={<KeyboardArrowLeft />}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Previous
          </Button>

          <Box
            sx={{
              flex: {
                sx: 0,
                md: 1,
              },
            }}
          />
          {[...Array(totalPage)].map((_, index) => (
            <IconButton
              key={index}
              size="sm"
              variant={page === index + 1 ? "solid" : "outlined"}
              color="neutral"
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            disabled={page === 1}
            onClick={handlePreviousPage}
            startDecorator={<KeyboardArrowLeft />}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            Previous
          </Button>
          <Box sx={{ flex: 1 }} />
          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            endDecorator={<KeyboardArrowRight />}
          >
            Next
          </Button>
        </Grid>

        {/* Pagination */}
        <Box
          className="Pagination-laptopUp"
          sx={{
            pt: 2,
            gap: 1,
            [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
            display: {
              xs: "none",
              md: "none",
            },
          }}
        >
          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            startDecorator={<KeyboardArrowLeft />}
          >
            Previous
          </Button>

          <Box sx={{ flex: 1 }} />
          {["1", "2", "3", "…", "8", "9", "10"].map((page) => (
            <IconButton
              key={page}
              size="sm"
              variant={Number(page) ? "outlined" : "plain"}
              color="neutral"
            >
              {page}
            </IconButton>
          ))}
          <Box sx={{ flex: 1 }} />
          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            disabled={page === totalPage}
            onClick={handleNextPage}
            endDecorator={<KeyboardArrowRight />}
          >
            Next
          </Button>
        </Box>
      </MainLayout>
    </>
  );
}

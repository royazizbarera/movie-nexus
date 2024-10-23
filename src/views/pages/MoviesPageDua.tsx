import { useState, useEffect } from "react";
import { Box, Grid, Select, Option, Input, Button } from "@mui/joy";
import MainLayout from "../layouts/MainLayout";
import MovieCard from "../components/MovieCard";
import movieController from "../../controllers/movieController";
import AppAppBar from "../components/AppAppBar";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardGridLayout, CardGridLayoutItem } from "../layouts/CardGridLayout";
import MovieCardsLoading from "../components/movies/MovieCardsLoading";

const styleSelect = {
  width: "100%",
  [`& .MuiSelect-indicator`]: {
    transition: "0.2s",
    [`&.Mui-expanded`]: {
      transform: "rotate(-180deg)",
    },
  },
};

export default function MoviesPageDua() {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string;
  }>({
    genre: "",
    actor: "",
    year: "",
    award: "",
    director: "",
    country: "",
  });

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movies, setMovies] = useState<any[]>([]); // items
  const [page, setPage] = useState<number>(1); // page
  const [totalPage, setTotalPage] = useState<number>(1); // total_pages
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [hasMore, setHasMore] = useState<boolean>(true);
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

  const fetchMovies = () => {
    setLoading(true);
    setError("");

    try {
      movieController
        .getMovies({ page: page })
        .then((res) => {
          setMovies((prevMovies) => [...prevMovies, ...res.data]); // Tambah data baru
          setPage((prevPage) => prevPage + 1); // Naikkan halaman setelah fetch
          if (page === res.pagination.totalPages) {
            setHasMore(false);
          }
        })
        .catch((error) => {
          setError(error);
        });
    } catch (error: any) {
      setError(String(error));
    } finally {
      setLoading(false);
    }
  };

  const handleApplyFilter = () => {
    setPage(1); // Reset ke halaman 1 ketika filter berubah
    setMovies([]); // Kosongkan data film sebelumnya
    setHasMore(true); // Reset hasMore karena kita mulai pencarian baru
    fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <>
      <AppAppBar />
      <MainLayout giveSpace pt={14}>
        {/* Toolbar Filtering */}
        <Box sx={{ mb: 4, display: "flex", flexDirection: "column" }}>
          <Grid container spacing={2} sx={{ justifyContent: "left" }}>
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
          {/* Infinite */}
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchMovies}
            hasMore={hasMore}
            loader={<MovieCardsLoading />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            style={{ overflow: "hidden" }}
          >
            <CardGridLayout>
              {movies.map((movie: any, index: number) => (
                <CardGridLayoutItem>
                  <MovieCard
                    key={index}
                    id={movie.id}
                    title={movie.title}
                    posterUrl={movie.posterUrl}
                    rating={movie.rating}
                    year={movie.releaseDate}
                  />
                </CardGridLayoutItem>
              ))}
            </CardGridLayout>
          </InfiniteScroll>
        </Box>
      </MainLayout>
    </>
  );
}

import { Box, Grid, Typography } from "@mui/joy";
import MovieCard from "../components/MovieCard";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useRef, useState } from "react";
import movieController from "../../controllers/movieController";
import AppAppBar from "../components/AppAppBar";
import BackgroundTrailer from "../components/movies/BackgroundTrailer";
import ContentLayout from "../layouts/ContentLayout";
import { CardGridLayout, CardGridLayoutItem } from "../layouts/CardGridLayout";
import VideoTrailer from "../components/movies/VideoTrailer";
import CarouselCardItem from "../components/movies/CarouselCardItem";
import MovieCardsLoading from "../components/movies/MovieCardsLoading";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTrailerIndex, setCurrentTrailerIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Buat ref untuk akses container scroll
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMovies = () => {
    setIsLoading(true);

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
        .catch((error) => {});
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Change trailer every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrailerIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % movies.length; // Loop kembali ke awal jika mencapai akhir
        return nextIndex;
      });
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          top: 100, // Gerakkan 200px ke bawah, bisa disesuaikan
          left: 100,
          behavior: "smooth", // Smooth scroll
        });
      }
    }, 15000); // Setiap n detik detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, [movies]);

  return (
    <>
      <AppAppBar />
      <MainLayout>
        <ContentLayout>
          {isLoading && <Typography>Loading...</Typography>}
          {!isLoading && movies.length > 0 && (
            <BackgroundTrailer
              backgroundUrl={movies[currentTrailerIndex].backdropUrl}
            >
              <ContentLayout giveSpace>
                {/* Trailer */}
                <Box position="relative" zIndex={1}>
                  {/* Root */}
                  <Grid
                    container
                    spacing={2}
                    alignItems="stretch"
                    direction={{ xs: "column", md: "row" }}
                    pb={2}
                  >
                    {/* Trailer */}
                    <Grid xs={12} md={10}>
                      {movies[currentTrailerIndex].videoUrl ? (
                        <VideoTrailer
                          videoUrl={movies[currentTrailerIndex].videoUrl}
                          sx={{
                            aspectRatio: "18/9",
                          }}
                          autoPlay
                        />
                      ) : (
                        <Typography>No trailer available</Typography>
                      )}
                    </Grid>

                    {/* Next Trailer */}
                    <Grid xs={12} md={2}>
                      {/* Carousel*/}
                      <Box
                        ref={scrollContainerRef}
                        sx={{
                          display: "flex",
                          flexDirection: {
                            xs: "row",
                            md: "column",
                          },
                          gap: 1,
                          overflow: "auto",
                          width: "100%",
                          height: {
                            xs: undefined,
                            md: "76vh",
                          },
                          scrollSnapType: {
                            xs: "x mandatory",
                            md: "y mandatory",
                          },
                          "& > *": {
                            scrollSnapAlign: "start",
                          },
                          "::-webkit-scrollbar": { display: "none" },
                        }}
                      >
                        {movies.map((movie) => (
                          <CarouselCardItem
                            movie={{
                              id: movie.id,
                              title: movie.title,
                              posterUrl: movie.posterUrl,
                            }}
                            focusVisible={
                              movies[currentTrailerIndex].id === movie.id
                            }
                          />
                        ))}
                        {!movies && {
                          /* Loading... */
                          ...Array.from({ length: 5 }).map((_, index) => (
                            <CarouselCardItem />
                          )),
                        }}
                      </Box>
                      {/* Child grid */}
                    </Grid>
                  </Grid>
                </Box>
              </ContentLayout>
            </BackgroundTrailer>
          )}
        </ContentLayout>

        {/* Hero Movie Video */}

        {/* Test grid movie */}
        <ContentLayout giveSpace>
          <Typography level="h1" pb={2}>
            Movies
          </Typography>
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
        </ContentLayout>
        {/* AppBar tetap di atas tanpa padding */}
      </MainLayout>
    </>
  );
}

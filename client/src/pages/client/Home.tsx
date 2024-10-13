import React from "react";
import {Box} from "@mui/material";
import Header from "../../components/layouts/Header";
import Banner from "../../components/layouts/Banner";
import MovieList from "../../components/layouts/MovieList";
import Footer from "../../components/layouts/Footer";

import {API_URL} from "../../config/constants";

const url = API_URL + "/movies?page=5&pageSize=20";

const fetchMovies = async () => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch movies: ", error);
    }
}

const Home: React.FC = () => {
    const [movies, setMovies] = React.useState<{ id: number; posterUrl: string; title: string }[]>([]);

    React.useEffect(() => {
        fetchMovies().then((data) => {
            setMovies(data.data);
        });
    }, []);

    return (
        <Box
            sx={{backgroundColor: "#141414", color: "white", minHeight: "100vh"}}
        >
            <Header/>
            <Box
                sx={{
                    display: {xs: "none", md: "block"},
                    zIndex: 1,
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Banner/>
            </Box>

            <Box
                sx={{
                    position: "relative",
                    top: {md: "-6rem", xs: "3rem"},
                    maxWidth: "100%",
                    zIndex: 2,
                }}
            >
                <MovieList title={"Popular"} movies={movies}/>
                <MovieList title={"Terbaru"} movies={movies}/>
                <MovieList title={"Cantik"} movies={movies}/>
            </Box>
            <Footer/>
        </Box>
    );
};

export default Home;

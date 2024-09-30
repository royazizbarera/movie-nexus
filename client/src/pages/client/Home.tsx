import React from "react";
import {Box} from "@mui/material";
import Header from "../../components/layouts/Header";
import Banner from "../../components/layouts/Banner";
import MovieList from "../../components/layouts/MovieList";

import {API_URL} from "../../config/constants";

const url = API_URL + "/movies?page=5";

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
                    position: {md: "absolute", xs: "relative"},
                    top: {md: "31rem", xs: "3rem"},
                    maxWidth: "100%",
                    zIndex: 2,
                }}
            >
                <MovieList title={"Popular"} movies={movies}/>
                <MovieList title={"Film"} movies={movies}/>
                <MovieList title={"Acara TV"} movies={movies}/>
            </Box>
        </Box>
    );
};

export default Home;

import React from "react";
import {Box, CircularProgress} from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import {API_URL} from "../../config/constants";
import MovieResult from "../../components/layouts/MovieResult";
import ErrorPage from "../util/ErrorPage";


const fetchMovieBySearchTerm = async (searchTerm: string) => {
    const url = `${API_URL}/movies?searchTerm=${searchTerm}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;
    }
}

const fetchMovies = async (page: string) => {
    const url = `${API_URL}/movies?page=${page}&pageSize=20`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch movies: ", error);
    }
}

const DetailMovie: React.FC = () => {
    const { searchTerm } = useParams<{ searchTerm: string }>();
    const [movies, setMovies] = React.useState<{ id: number; posterUrl: string; title: string }[]>([]);
    const [loading, setLoading] = React.useState(true);  // Loading state
    const [error, setError] = React.useState(false);      // Error state

    React.useEffect(() => {
        const fetchMovieData = async () => {
            try {
                if (!searchTerm) {
                    const movieData = await fetchMovies("5");
                    setMovies(movieData.data);
                }else{
                    const movieData = await fetchMovieBySearchTerm(searchTerm!);
                    setMovies(movieData);
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieData();
    }, [searchTerm]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />  {/* Spinner for loading */}
            </Box>
        );
    }

    if (error || !movies) {
        return <ErrorPage />;  // Error handling or if movie is not found
    }

    let title = "";

    if (searchTerm === undefined) {
        title = "Popular Movies";
    }else {
        title = `Search results for "${searchTerm}"`;
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                backgroundColor: "#121212",
                color: "#fff",
                minHeight: "100vh",
            }}
        >
            <Header/>
            <MovieResult title={title} movies={movies} totalMovies={10}></MovieResult>
            <Footer/>
        </Box>
    );
}

export default DetailMovie;
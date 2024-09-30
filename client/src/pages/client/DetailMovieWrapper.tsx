import React from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "./DetailMovie";
import MovieModel from "../../models/MovieModel"; // Adjust the path import
import ErrorPage from "../util/ErrorPage";
import { API_URL } from "../../config/constants";
import { CircularProgress, Box } from "@mui/material";

// API call logic moved outside the component for reusability
const fetchMovieById = async (id: string) => {
    const url = `${API_URL}/movies/${id}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Failed to fetch movie:", error);
        throw error;  // Propagate error for better handling in component
    }
};

const DetailMovieWrapper: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get parameter id from URL
    const [movie, setMovie] = React.useState<MovieModel | null>(null);
    const [loading, setLoading] = React.useState(true);  // Loading state
    const [error, setError] = React.useState(false);      // Error state

    React.useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const movieData = await fetchMovieById(id!);  // Ensure id is not undefined
                setMovie(movieData);
            } catch (error) {
                setError(true);  // Set error if API call fails
            } finally {
                setLoading(false);  // Stop loading when done
            }
        };

        fetchMovieData();
    }, [id]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />  {/* Spinner for loading */}
            </Box>
        );
    }

    if (error || !movie) {
        return <ErrorPage />;  // Error handling or if movie is not found
    }

    return <DetailMovie movie={movie} />;
};

export default DetailMovieWrapper;

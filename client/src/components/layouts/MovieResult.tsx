import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Pagination,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Button,
} from '@mui/material';
import MovieModel from '../../models/MovieModel';
import MovieCard from "../modules/MovieCard";

interface MovieResultProps {
    title: string;
    movies: { id: number; posterUrl: string; title: string }[];
    totalMovies: number;
}

const MovieSearchResults: React.FC<MovieResultProps> = ({ title, movies, totalMovies }) => {
    const [page, setPage] = useState(1);
    const [pageSize] = useState(10); // Jumlah film per halaman
    const totalPages = Math.ceil(totalMovies / pageSize);

    const [yearFilter, setYearFilter] = useState<string | null>(null);
    const [genreFilter, setGenreFilter] = useState<string | null>(null);
    const [countryFilter, setCountryFilter] = useState<string | null>(null);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Box sx={{ mt: 2, paddingTop: '5rem', paddingBottom: '10rem' }}>
            <Typography variant="h4" align="center">
                {title}
            </Typography>
            <Grid
                container
                spacing={2}
                sx={{ pl: '2rem', pt: '3rem' }}
            >
                {movies.map((movie) => (
                    <Grid item key={movie.id} xs={5} sm={6} md={10} lg={2} xl={2}>
                        <MovieCard id={movie.id} posterUrl={movie.posterUrl} title={movie.title} />
                    </Grid>
                ))}
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2,
                    pt: '2rem'
                }}
            >
                <Button variant="contained" color="primary">
                    Load More
                </Button>
            </Box>
        </Box>
    );
};

export default MovieSearchResults;

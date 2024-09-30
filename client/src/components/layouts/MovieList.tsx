import { Box, Typography } from '@mui/material';
import MovieCard from '../modules/MovieCard';
import React from "react";

interface MovieListProps {
    title: string;
    movies: { id: number; posterUrl: string; title: string }[];
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
    return (
        <Box sx={{ position: 'relative', paddingY: '1rem', paddingX: '3rem', overflow: 'hidden', maxWidth: '100%' }}>
            <Typography
                variant="h5"
                sx={{
                    color: 'white',
                    marginBottom: 2,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {title}
                <Box component="span" sx={{ marginX: '8px', fontSize: '24px' }}>
                    &gt;
                </Box>
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'hidden',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    scrollBehavior: 'smooth',
                    position: 'relative',
                    maxWidth: '100%',
                }}
            >
                {movies.map((movie, index) => (
                    <Box
                        key={index}
                        sx={{
                            paddingRight: '1.4rem',
                            maxWidth: '100%',
                        }}
                    >
                        <MovieCard id={movie.id} posterUrl={movie.posterUrl} title={movie.title} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default MovieList;

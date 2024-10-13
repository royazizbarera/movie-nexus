import { Box, Typography, IconButton } from '@mui/material';
import MovieCard from '../modules/MovieCard';
import React, { useRef, useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface MovieListProps {
    title: string;
    movies: { id: number; posterUrl: string; title: string }[];
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    const handleRightClick = () => {
        if (scrollRef.current) {
            const screenWidth = window.innerWidth;

            let scrollDistance = 1200;

            if (screenWidth <= 480) {
                scrollDistance = 200;
            } else if (screenWidth <= 1024) {
                scrollDistance = 850;
            } else if (screenWidth <= 1200) {
                scrollDistance = 1026;
            }

            scrollRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
            setShowLeftArrow(true);
        }
    };

    const handleLeftClick = () => {
        if (scrollRef.current) {
            const screenWidth = window.innerWidth;

            let scrollDistance = 1200;

            if (screenWidth <= 480) {
                scrollDistance = 200;
            } else if (screenWidth <= 1024) {
                scrollDistance = 850;
            } else if (screenWidth <= 1200) {
                scrollDistance = 1026;
            }

            scrollRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        }
    };


    return (
        <Box sx={{ position: 'relative', paddingY: '1rem', paddingX: { xs: '1rem', sm: '2rem', md: '3rem' }, overflow: 'hidden', maxWidth: '100%' }}>
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

            {showLeftArrow && (
                <IconButton
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.7)',
                        },
                    }}
                    onClick={handleLeftClick}
                >
                    <ArrowBackIosIcon />
                </IconButton>
            )}

            <Box
                ref={scrollRef}
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    scrollBehavior: 'smooth',
                    gap: { xs: '0.5rem', sm: '1rem', md: '1rem' },
                    flexWrap: 'nowrap',
                }}
            >
                {movies.map((movie, index) => (
                    <Box
                        key={index}
                        sx={{
                            flexShrink: 0,
                        }}
                    >
                        <MovieCard id={movie.id} posterUrl={movie.posterUrl} title={movie.title} />
                    </Box>
                ))}
            </Box>

            <IconButton
                sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    top: '50%',
                    right: 0,
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.7)',
                    },
                }}
                onClick={handleRightClick}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};

export default MovieList;

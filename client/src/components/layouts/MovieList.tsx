import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MovieCard from '../modules/MovieCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface MovieListProps {
    title: string;
    movies: { posterUrl: string; title: string }[];
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const pages = Math.ceil(movies.length / 7);

    const handleScrollRight = () => {
        if (!isScrolling) {
            setIsScrolling(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % pages);
        }
    };

    const handleScrollLeft = () => {
        if (!isScrolling) {
            setIsScrolling(true);
            setCurrentIndex((prevIndex) =>
                (prevIndex - 1 + pages) % pages
            );
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({
                left: scrollAmount * currentIndex,
                behavior: 'smooth',
            });

            setTimeout(() => {
                setIsScrolling(false);
            }, 500);
        }
    }, [currentIndex]);

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
                <Box component="span" sx={{ marginLeft: '8px', fontSize: '24px' }}>
                    &gt;
                </Box>
            </Typography>

            <Box sx={{ position: 'absolute', right: '1rem', top: '0.5rem', paddingRight: '3rem', paddingTop: '1rem' }}>
                {Array.from({ length: pages }).map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'inline-block',
                            width: '20px',
                            height: '4px',
                            backgroundColor: index === currentIndex ? '#fff' : '#666',
                            marginLeft: index > 0 ? '4px' : 0,
                            transition: 'background-color 0.3s ease-in-out',
                        }}
                    />
                ))}
            </Box>

            <Box
                ref={scrollRef}
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
                            flex: '0 0 12.5%',
                            paddingRight: '8px',
                            maxWidth: '100%',
                        }}
                    >
                        <MovieCard posterUrl={movie.posterUrl} title={movie.title} />
                    </Box>
                ))}
            </Box>

            <IconButton
                onClick={handleScrollLeft}
                disabled={isScrolling}
                sx={{
                    position: 'absolute',
                    left: '0',
                    top: '57%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    width: '40px',
                    height: '74%',
                    borderRadius: '3px',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                    },
                }}
            >
                <ArrowBackIosIcon sx={{ fontSize: '16px' }} />
            </IconButton>
            <IconButton
                onClick={handleScrollRight}
                disabled={isScrolling}
                sx={{
                    position: 'absolute',
                    right: '0',
                    top: '57%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    width: '40px',
                    height: '74%',
                    borderRadius: '3px',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                    },
                }}
            >
                <ArrowForwardIosIcon sx={{ fontSize: '16px' }} />
            </IconButton>
        </Box>
    );
};

export default MovieList;

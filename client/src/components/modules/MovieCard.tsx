import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

interface MovieCardProps {
    id: number;
    posterUrl: string;
    title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, posterUrl, title }) => {
    return (
        <Link to={"/movie/" + id} aria-label={`View details for ${title}`}>
            <Box
                sx={{
                    display: 'inline-block',
                    position: 'relative',
                    width: { xs: '7.5rem', sm: '8.75rem', md: '10rem' },
                    transition: 'transform 0.3s ease',  // Hover animation
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                }}
            >
                <CardMedia
                    component="img"
                    image={posterUrl}
                    alt={title}
                    loading="lazy"  // Lazy loading for performance
                    sx={{
                        width: '100%',
                        height: { xs: '11.25rem', sm: '13.125rem', md: '15rem' },
                        borderRadius: '8px',
                        objectFit: 'cover',
                    }}
                />
                <Typography
                    variant="body2"
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: '8px',
                        textAlign: 'center',
                        borderRadius: '0 0 8px 8px',
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' },
                        boxSizing: 'border-box',
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Link>
    );
};

export default MovieCard;

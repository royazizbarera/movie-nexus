import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';

interface MovieCardProps {
    posterUrl: string;
    title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ posterUrl, title }) => {
    return (
        <Box
            sx={{
                display: 'inline-block',
                position: 'relative',
                width: { xs: '120px', sm: '140px', md: '160px' },  // Ukuran width responsif
            }}
        >
            <CardMedia
                component="img"
                image={posterUrl}
                alt={title}
                sx={{
                    width: '100%',
                    height: { xs: '180px', sm: '210px', md: '240px' },  // Ukuran height responsif
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
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' },  // Ukuran font responsif
                    boxSizing: 'border-box',
                }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default MovieCard;

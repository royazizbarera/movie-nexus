import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';

interface MovieCardProps {
    posterUrl: string;
    title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ posterUrl, title }) => {
    return (
        <Box sx={{ display: 'inline-block', position: 'relative', marginRight: 2 }}>
            <CardMedia
                component="img"
                image={posterUrl}
                alt={title}
                sx={{
                    width: { xs: '120px', md: '160px' },
                    height: { xs: '180px', md: '240px' },
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
                    boxSizing: 'border-box',
                }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default MovieCard;

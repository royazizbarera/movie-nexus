import React from 'react';
import { Box, Typography } from '@mui/material';

interface RatingBadgeProps {
    rating: number;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({ rating }) => {
    return (
        <Box sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '2px 8px',
            borderRadius: '5px',
            display: 'inline-block',
        }}>
            <Typography variant="body2" sx={{ color: 'white' }}>
                {rating} / 10
            </Typography>
        </Box>
    );
};

export default RatingBadge;

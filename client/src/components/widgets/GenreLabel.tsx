import React from 'react';
import { Box, Typography } from '@mui/material';

interface GenreLabelProps {
    genre: string;
}

const GenreLabel: React.FC<GenreLabelProps> = ({ genre }) => {
    return (
        <Box sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            padding: '2px 6px',
            borderRadius: '4px',
            display: 'inline-block',
            marginRight: '4px',
        }}>
            <Typography variant="caption" sx={{ color: 'white' }}>
                {genre}
            </Typography>
        </Box>
    );
};

export default GenreLabel;

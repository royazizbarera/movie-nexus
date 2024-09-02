import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ArrowButtonProps {
    direction: 'left' | 'right';
    onClick: () => void;
    disabled?: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, disabled = false }) => {
    return (
        <IconButton
            onClick={onClick}
            disabled={disabled}
            sx={{
                position: 'absolute',
                top: '48%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '60px 8px',
                borderRadius: '10px',
                border: '2px solid rgba(255, 255, 255, 0.7)',
                zIndex: 2,
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                left: direction === 'left' ? '1vw' : 'auto',
                right: direction === 'right' ? '2vw' : 'auto',
                opacity: disabled ? 0.5 : 1,
                pointerEvents: disabled ? 'none' : 'auto',
            }}
        >
            {direction === 'left' ? (
                <ArrowBackIosIcon sx={{ fontSize: '2rem' }} />
            ) : (
                <ArrowForwardIosIcon sx={{ fontSize: '2rem' }} />
            )}
        </IconButton>
    );
};

export default ArrowButton;

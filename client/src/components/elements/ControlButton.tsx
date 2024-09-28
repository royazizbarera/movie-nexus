import React from 'react';
import { IconButton } from '@mui/material';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReplayIcon from '@mui/icons-material/Replay';

interface ControlButtonProps {
    type: 'mute' | 'playPause' | 'replay';
    isMuted?: boolean;
    isPlaying?: boolean;
    onClick: () => void;
}

const ControlButton: React.FC<ControlButtonProps> = ({
                                                         type,
                                                         isMuted,
                                                         isPlaying,
                                                         onClick,
                                                     }) => {
    const renderIcon = () => {
        switch (type) {
            case 'mute':
                return isMuted ? <VolumeOffIcon sx={{ fontSize: '2rem' }} /> : <VolumeUpIcon sx={{ fontSize: '2rem' }} />;
            case 'playPause':
                return isPlaying ? <PauseIcon sx={{ fontSize: '2rem' }} /> : <PlayArrowIcon sx={{ fontSize: '2rem' }} />;
            case 'replay':
                return <ReplayIcon sx={{ fontSize: '2rem' }} />;
        }
    };

    return (
        <IconButton
            onClick={onClick}
            sx={{
                position: 'absolute',
                bottom: { md: '23%' },
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.7)',
                zIndex: 2,
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                right: type === 'mute' ? { md: '17vw' } : { md: '11vw' },
            }}
        >
            {renderIcon()}
        </IconButton>
    );
};

export default ControlButton;

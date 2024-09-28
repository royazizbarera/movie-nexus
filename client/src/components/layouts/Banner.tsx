import React, { useState, useRef } from 'react';
import { Box, CardMedia } from '@mui/material';
import ControlButton from '../elements/ControlButton';
import ArrowButton from '../elements/ArrowButton';
import BannerContent from '../modules/BannerContent';
import MoviesDatabase from '../../database/MoviesDatabase';

const Banner: React.FC = () => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const movie = MoviesDatabase[currentMovieIndex];
    const [muted, setMuted] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMuteToggle = () => {
        setMuted(!muted);
    };
    

    const handlePlayPauseToggle = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
                setVideoStarted(true);
            }
        }
    };

    const handleVideoEnd = () => {
        setVideoEnded(true);
        setIsPlaying(false);
    };

    const handlePlay = () => {
        setIsPlaying(true);
        setVideoEnded(false);
        setVideoStarted(true);
    };

    const handlePrevMovie = () => {
        setCurrentMovieIndex((prevIndex) =>
            prevIndex === 0 ? MoviesDatabase.length - 1 : prevIndex - 1
        );
        resetVideoState();
    };

    const handleNextMovie = () => {
        setCurrentMovieIndex((prevIndex) =>
            prevIndex === MoviesDatabase.length - 1 ? 0 : prevIndex + 1
        );
        resetVideoState();
    };

    const resetVideoState = () => {
        setVideoEnded(false);
        setIsPlaying(false);
        setVideoStarted(false);
    };

    React.useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('play', handlePlay);
            videoElement.addEventListener('ended', handleVideoEnd);
        }
        return () => {
            if (videoElement) {
                videoElement.removeEventListener('play', handlePlay);
                videoElement.removeEventListener('ended', handleVideoEnd);
            }
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '41rem',
                overflow: 'hidden',
                top: 0,
            }}
        >
            {!videoEnded ? (
                <CardMedia
                    component="video"
                    src={movie.trailerUrl}
                    poster={movie.posterUrl}
                    autoPlay
                    muted={muted}
                    playsInline
                    ref={videoRef}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '120%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'translateX(-8%)',
                    }}
                />
            ) : (
                <CardMedia
                    component="img"
                    src={movie.posterUrl}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '120%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'translateX(-10%)',
                    }}
                />
            )}
            <BannerContent
                movie = {movie}
            />
            {videoStarted && (
                <>
                    <ControlButton
                        type="mute"
                        isMuted={muted}
                        onClick={handleMuteToggle}
                    />
                    <ControlButton
                        type={videoEnded ? 'replay' : 'playPause'}
                        isPlaying={isPlaying}
                        onClick={handlePlayPauseToggle}
                    />
                </>
            )}
            <ArrowButton direction="left" onClick={handlePrevMovie} />
            <ArrowButton direction="right" onClick={handleNextMovie} />
        </Box>
    );
};

export default Banner;

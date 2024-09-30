import React, {useState, useRef, useEffect} from 'react';
import {Box} from '@mui/material';
import ControlButton from '../elements/ControlButton';
import ArrowButton from '../elements/ArrowButton';
import BannerContent from '../modules/BannerContent';

import {API_URL} from "../../config/constants";

const Banner: React.FC = () => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [movies, setMovies] = useState<{
        id: number;
        videoUrl: string;
        backdropUrl: string;
        title: string;
        synopsis: string;
        releaseDate: Date;
        posterUrl: string
    }[]>([]);
    const [muted, setMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isVideoEnded, setIsVideoEnded] = useState(true); // New state for video ended
    const videoRef = useRef<HTMLIFrameElement>(null);

    const url = API_URL + "/movies?page=2&pageSize=6";

    const fetchMovies = async () => {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error("Failed to fetch movies: ", error);
        }
    };

    const extractYouTubeVideoId = (url: string) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    useEffect(() => {
        fetchMovies().then((data) => {
            setMovies(data.data);
        });
    }, []);

    const movie = movies[currentMovieIndex] || null;

    const postMessageToIframe = (command: string, value: string | boolean = '') => {
        if (videoRef.current && videoRef.current.contentWindow) {
            videoRef.current.contentWindow.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: command,
                    args: [value],
                }),
                '*'
            );
        }
    };

    const handleMuteToggle = () => {
        setMuted((prevMuted) => {
            const newMutedState = !prevMuted;
            postMessageToIframe(newMutedState ? 'mute' : 'unMute');
            return newMutedState;
        });
    };

    const handlePlayPauseToggle = () => {
        postMessageToIframe(isPlaying ? 'pauseVideo' : 'playVideo');
        setIsVideoEnded(false);
        setIsPlaying(!isPlaying);
    };

    const handlePrevMovie = () => {
        setCurrentMovieIndex((prevIndex) => (prevIndex === 0 ? movies.length - 1 : prevIndex - 1));
        resetVideoState();
        autoplayVideo();  // Autoplay when navigating to previous movie
    };

    const handleNextMovie = () => {
        setCurrentMovieIndex((prevIndex) => (prevIndex === movies.length - 1 ? 0 : prevIndex + 1));
        resetVideoState();
        autoplayVideo();  // Autoplay when navigating to next movie
    };

    const resetVideoState = () => {
        setIsPlaying(false);
        setIsVideoEnded(true);
        postMessageToIframe('pauseVideo'); // Pause video before switching
    };

    const autoplayVideo = () => {
        setIsPlaying(true);
        setIsVideoEnded(false);
        postMessageToIframe('playVideo');
        postMessageToIframe('unMute');
    };

    useEffect(() => {
        const onMessageReceived = (event: MessageEvent) => {
            try {
                const data = JSON.parse(event.data);
                if (data.event === 'onStateChange') {
                    if (data.info === 0) { // Video ended
                        setIsPlaying(false);
                        setIsVideoEnded(true); // Set video ended state
                    } else if (data.info === 1) { // Video playing
                        setIsPlaying(true);
                        setIsVideoEnded(false); // Reset video ended state
                    }
                }
            } catch (error) {
                console.error("Failed to parse message:", error);
            }
        };
        window.addEventListener('message', onMessageReceived);
        return () => {
            window.removeEventListener('message', onMessageReceived);
        };
    }, []);

    useEffect(() => {
        // Autoplay video after movie changes or on initial load
        if (videoRef.current) {
            autoplayVideo();
        }
    }, [currentMovieIndex]);

    if (!movie) {
        return <div>Loading...</div>; // Render loading state while fetching movies
    }

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '37rem',
                overflow: 'hidden',
                top: 0,
                background: 'linear-gradient(to top, #141414 10%, rgba(255, 255, 255, 0) 100%)'
            }}
        >
            <iframe
                ref={videoRef}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${extractYouTubeVideoId(movie.videoUrl)}?&enablejsapi=1&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&fs=0&showinfo=0&disablekb=1`}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '154%',
                    height: '90%',
                    objectFit: 'cover',
                    transform: 'translateX(-17.5%)',
                    border: 'none',
                    zIndex: -1
                }}
            />

            <BannerContent movie={movie}/>
            <ControlButton type="mute" isMuted={muted} onClick={handleMuteToggle}/>
            <ControlButton type="playPause" isPlaying={isPlaying} onClick={handlePlayPauseToggle}/>
            <ArrowButton direction="left" onClick={handlePrevMovie}/>
            <ArrowButton direction="right" onClick={handleNextMovie}/>
        </Box>
    );
};

export default Banner;

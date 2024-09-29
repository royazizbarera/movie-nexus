import { Box, Typography, IconButton } from '@mui/material';
import MovieCard from '../modules/MovieCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface MovieListProps {
    title: string;
    movies: { posterUrl: string; title: string }[];
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
    return (
        <Box sx={{ position: 'relative', paddingY: '1rem', paddingLeft: '3rem', overflow: 'hidden', maxWidth: '100%' }}>
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

            <Box
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
                            paddingRight: '8px',
                            maxWidth: '100%',
                        }}
                    >
                        <MovieCard posterUrl={movie.posterUrl} title={movie.title} />
                    </Box>
                ))}
            </Box>

            <IconButton
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

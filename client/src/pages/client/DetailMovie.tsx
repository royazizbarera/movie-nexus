import React from "react";
import {Box} from "@mui/material";
import MovieModel from "../../models/MovieModel";
import MovieHeroSection from "../../components/layouts/MovieHeroSection";
import MovieDescriptionSection from "../../components/layouts/MovieDescriptionSection";
import ActorListSection from "../../components/layouts/ActorListSection";
import MovieReviewSection from "../../components/layouts/MovieReviewSection";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";

// Props detail movie menggunakan MovieModel
interface DetailMovieProps {
    movie: MovieModel;
}

const DetailMovie: React.FC<DetailMovieProps> = ({movie}) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                backgroundColor: "#121212",
                color: "#fff",
                minHeight: "100vh",
            }}
        >
            <Header/>
            {/* Title, Poster, and Trailer with Glassmorphism Background */}
            <MovieHeroSection movie={movie}/>

            {/* Movie Description */}
            <MovieDescriptionSection movie={movie}/>

            {/* Actor List Section */}
            <ActorListSection actors={movie.actors}/>

            {/* Review Section */}
            <MovieReviewSection reviews={movie.reviews!}/>

            <Footer/>
        </Box>
    );
};

export default DetailMovie;

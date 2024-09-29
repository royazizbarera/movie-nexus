import React from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "./DetailMovie";
import MovieModel from "../../models/temp/MovieModel"; // Sesuaikan path import
import MoviesDatabase from "../../database/MoviesDatabase";
import ErrorPage from "../util/ErrorPage";

const DetailMovieWrapper = () => {
  const { id } = useParams<{ id: string }>(); // Ambil parameter id dari URL

  // Misalnya, kita menggunakan data mock untuk film
  const movie: MovieModel | undefined = MoviesDatabase.find((m: MovieModel) => m.id === id);

  // Jika movie tidak ditemukan, Anda bisa menampilkan halaman error atau pesan yang sesuai
  if (!movie) {
    return <ErrorPage/>;
  }

  // Jika movie ditemukan, render DetailMovie
  return <DetailMovie movie={movie} />;
};

export default DetailMovieWrapper;

import { Request, Response } from 'express';
import * as movieService from '../services/MovieService';

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const movie = await movieService.getMovieById(Number(id));
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
};

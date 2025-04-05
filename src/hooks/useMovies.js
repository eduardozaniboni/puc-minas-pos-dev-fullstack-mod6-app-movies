import { useEffect, useState } from 'react';
import { getMovieDetails, getPopularMovies } from '../services/movies.service';

export function useMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(({ data }) => {
            setMovies(data.results);
        });
    }, []);

    return movies;
}

export function useMovie(movieId) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovieDetails(movieId).then(({ data }) => {
            setMovie(data);
        });
    }, [movieId]);

    return movie;
}

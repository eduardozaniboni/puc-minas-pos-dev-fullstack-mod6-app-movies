import styles from './Movies.module.css';
import { useMovies } from '../../hooks/useMovies';
import { useSelector } from 'react-redux';
import { MovieItem } from '../../components/movieItem/MovieItem';

export function Movies() {
    const movies = useMovies();
    const favoriteMovies = useSelector((state) => state.favorite.movies);

    return (
        <section className={styles.movies}>
            <h1>Filmes Populares</h1>
            <div className={styles.moviesList}>
                {movies
                    .filter((movie) => !favoriteMovies.find((m) => m.id === movie.id))
                    .map((movie) => (
                        <MovieItem key={movie.id} movie={movie} />
                    ))}
            </div>
        </section>
    );
}

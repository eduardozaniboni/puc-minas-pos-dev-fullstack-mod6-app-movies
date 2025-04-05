import { useSelector } from 'react-redux';
import styles from './FavoriteMovies.module.css';
import { MovieItem } from '../../components/movieItem/MovieItem';

export const FavoriteMovies = () => {
    const movies = useSelector((state) => state.favorite.movies);

    return (
        <section className={styles.movies}>
            <h1>Meus Filmes Favoritos</h1>
            <div className={styles.moviesList}>
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
};

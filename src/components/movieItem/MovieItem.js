import { Link } from 'react-router-dom';
import styles from './MovieItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/reducers/favorite';

export function MovieItem({ movie }) {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.favorite.movies);
    const isFavorite = movies.find((m) => m.id === movie.id);

    function renderButton() {
        if (isFavorite) {
            return (
                <button
                    className={`${styles.favoriteBtn} ${styles.removeFavoriteBtn}`}
                    onClick={() => dispatch(removeFavorite(movie))}
                >
                    <span>❌</span>
                    Remover dos Favoritos
                </button>
            );
        }
        return (
            <button className={styles.favoriteBtn} onClick={() => dispatch(addFavorite(movie))}>
                <span>⭐</span>
                Adicionar aos Favoritos
            </button>
        );
    }

    return (
        <div className={styles.movie}>
            <div className={styles.imageContainer}>
                {movie.poster_path && (
                    <img
                        className={styles.image}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                )}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{movie.title}</h3>
                <div className={styles.actions}>
                    <Link className={styles.detailsBtn} to={`/movies/${movie.id}`}>
                        <span>🎬 Ver Detalhes</span>
                    </Link>
                    {renderButton()}
                </div>
            </div>
        </div>
    );
}

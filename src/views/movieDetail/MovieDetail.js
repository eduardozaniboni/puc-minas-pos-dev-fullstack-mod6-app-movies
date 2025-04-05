import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks/useMovies';
import styles from './MovieDetail.module.css';

export function MovieDetail() {
    const { id } = useParams();
    const movie = useMovie(id);

    return (
        <div className={styles.container}>
            <div className={styles.movie}>
                <div
                    className={styles.header}
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    }}
                >
                    <div className={styles.headerOverlay} />
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.image}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <div className={styles.metadata}>
                        <span>⭐ {movie.vote_average}/10</span>
                        <span>📅 {new Date(movie.release_date).getFullYear()}</span>
                    </div>
                    <p className={styles.overview}>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

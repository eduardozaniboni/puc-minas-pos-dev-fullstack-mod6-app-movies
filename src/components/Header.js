import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

export function Header() {
    const totalMovies = useSelector((state) => state.favorite.movies.length);

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Aplicação de Filmes</h1>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <Link className={styles.navLink} to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} to={'/movies'}>
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} to={'/favorite'}>
                            Favorite Movies ({totalMovies})
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

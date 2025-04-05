import styles from './Home.module.css';

export function Home() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Descubra Novos Mundos</h1>
                    <p className={styles.subtitle}>
                        Explore os melhores filmes, crie sua lista de favoritos e mergulhe em histórias incríveis
                    </p>
                    <div className={styles.features}>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🎬</span>
                            <h3>Filmes Populares</h3>
                            <p>Acesse os filmes mais populares do momento</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>⭐</span>
                            <h3>Favoritos</h3>
                            <p>Salve seus filmes preferidos</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📱</span>
                            <h3>Responsivo</h3>
                            <p>Acesse de qualquer dispositivo</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

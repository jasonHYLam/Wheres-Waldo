import styles from './LeaderboardEntry.module.css';

export function LeaderboardEntry({entry}) {
    return (
        <section className={styles.entry}>
            <p className={styles.name}>{entry.name}</p>
            <p className={styles.time}>{entry.timeInSeconds} s</p>
        </section>
    )
}
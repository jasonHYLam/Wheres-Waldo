import styles from './LeaderboardEntry.module.css';

export function LeaderboardEntry({entry}) {
    return (
        <section className={styles.entry}>
            <p>{entry.name}</p>
            <p>{entry.timeInSeconds}</p>
        </section>
    )
}
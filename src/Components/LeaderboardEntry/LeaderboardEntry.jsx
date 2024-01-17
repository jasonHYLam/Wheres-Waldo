export function LeaderboardEntry({entry}) {
    return (
        <section key={entry._id}>
            <p>{entry.name}</p>
            <p>{entry.timeInSeconds}</p>
        </section>
    )
}
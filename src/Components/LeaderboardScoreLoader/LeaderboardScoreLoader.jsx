import styles from './LeaderboardScoreLoader.module.css'

export function LeaderboardScoreLoader({map, backgroundUrl, setMapName, setIsChangeSubmitted}) {

    function onClick() {
        setMapName(map)
        setIsChangeSubmitted(false)
    }

    return (
        <>
        <section className={styles.loader} onClick={onClick}>
            <img src={backgroundUrl} alt="" />

        </section>
        </>
    )
}
import styles from './LeaderboardScoreLoader.module.css'

export function LeaderboardScoreLoader({map, backgroundUrl, setMapName, setIsChangeSubmitted}) {

    function onClick() {
        setMapName(map)
        setIsChangeSubmitted(false)
    }

    return (
        <>
        <section className={styles.container} onClick={onClick}>
            <img className={styles.image} src={backgroundUrl} alt="" />

        </section>
        </>
    )
}
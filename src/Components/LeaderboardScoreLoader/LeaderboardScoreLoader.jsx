export function LeaderboardScoreLoader({map, backgroundUrl, setMapName, setIsChangeSubmitted}) {

    function onClick() {
        setMapName(map)
        setIsChangeSubmitted(false)
    }

    return (
        <>
        <section onClick={onClick}>
            <img src={backgroundUrl} alt="" />

        </section>
        </>
    )
}
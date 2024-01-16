export function LeaderboardScoreLoader({map, backgroundUrl, setMapName}) {

    function onClick() {
        setMapName(map)
    }

    return (
        <>
        <section onClick={onClick}>
            <img src={backgroundUrl} alt="" />

        </section>
        </>
    )
}
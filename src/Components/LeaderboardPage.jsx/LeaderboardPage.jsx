import { useEffect, useState } from "react"

export function LeaderboardPage() {

    const [ allScores, setAllScores ] = useState({});

    // may require a LOADING boolean state
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {

        async function getLeaderboard() {
            // need to add name of map, and then correspondingly target that with useParams or something on backend.
            // const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_leaderboard`)
            // hm could i lift state, create a parent component called PageLayout, store mapName there? then use outlet context perhaps
            // or... do something like game/saffron-city/leaderboard, and get mapName via useParams()? that seems more straightforward
            // either option doesn't seem too bad to be honest. 
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_leaderboard`)
            const { allScores } = await response.json();

            setAllScores(allScores);
            setIsLoading(false);
        }

        getLeaderboard()
    },[])

    // need to conditionally display the corresponding map's leaderboard
    // god this is a pita
    return (

        <>
        <h1>Leaderboard</h1>
        <p>Look upon these scores, ye Mighty, and despair</p>


        {isLoading ? <p>Loading</p> :
        allScores.map(score => {
            return (
                <>
                    <p>{score.name}</p>
                    <p>{score.timeInSeconds}</p>
                </>
            )
        })
        }

        </>
    )
}
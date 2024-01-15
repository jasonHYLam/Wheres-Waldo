import { useEffect, useState } from "react"

export function LeaderboardPage() {

    const [ allScores, setAllScores ] = useState({});

    // may require a LOADING boolean state
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {

        async function getLeaderboard() {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_leaderboard`)
            const { allScores } = await response.json();

            setAllScores(allScores);
            setIsLoading(false);
        }

        getLeaderboard()
    },[])

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
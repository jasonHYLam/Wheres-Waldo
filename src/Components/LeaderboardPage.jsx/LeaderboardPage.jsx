import { useEffect } from "react"

export function LeaderboardPage() {

    useEffect(() => {

        async function getLeaderboard() {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_leaderboard`)
            const data = response.json();

            console.log(data)
        }
    })

    return (
        <>
        <h1>Leaderboard</h1>
        <p>Look upon these scores, ye Mighty, and despair</p>

        </>
    )
}
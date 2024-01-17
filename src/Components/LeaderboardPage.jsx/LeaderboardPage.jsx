import { useEffect, useState } from "react"

import { LeaderboardScoreLoader } from "../LeaderboardScoreLoader/LeaderboardScoreLoader";

import saffronCity from "../../assets/saffronCity.jpeg";
import palletTown from "../../assets/palletTown.jpg";
import pokemonHouse from "../../assets/pokemonHouse.jpg";

export function LeaderboardPage() {

    const [ allScores, setAllScores ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    const [ isChangeSubmitted, setIsChangeSubmitted ] = useState(false);
    const [ map, setMap ] = useState(null);


    useEffect(() => {

        async function getLeaderboard() {
            // need to add name of map, and then correspondingly target that with useParams or something on backend.
            // const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_leaderboard`)
            // hm could i lift state, create a parent component called PageLayout, store mapName there? then use outlet context perhaps
            // or... do something like game/saffron-city/leaderboard, and get mapName via useParams()? that seems more straightforward
            // either option doesn't seem too bad to be honest. 
            if (map === null) setIsLoading(false);

            else {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_leaderboard/${map}`)
                const { allScores } = await response.json();

                console.log('checking all scores')
                console.log(allScores)

                setAllScores(allScores);
                // setIsLoading(false);
                setIsChangeSubmitted(true)

            }
        }

        getLeaderboard()
    },[map, isChangeSubmitted])

    // need to conditionally display the corresponding map's leaderboard
    // god this is a pita
    return (

        <>
        <h1>Leaderboard</h1>
        <p>Look upon these scores, ye Mighty, and despair</p>

        <LeaderboardScoreLoader map={'saffron-city'} backgroundUrl={saffronCity} setMapName={setMap} setIsChangeSubmitted={setIsChangeSubmitted} />
        <LeaderboardScoreLoader map={'pallet-town'} backgroundUrl={palletTown} setMapName={setMap}  setIsChangeSubmitted={setIsChangeSubmitted} />
        <LeaderboardScoreLoader map={'pokemon-house'} backgroundUrl={pokemonHouse} setMapName={setMap} setIsChangeSubmitted={setIsChangeSubmitted}  />

        {isLoading ? <p>Loading</p> :

        // map === null ? null :
        isChangeSubmitted === false ? null :
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
import styles from './LeaderboardPage.module.css';
import { Link } from 'react-router-dom';

import { useEffect, useState } from "react"

import { LeaderboardScoreLoader } from "../LeaderboardScoreLoader/LeaderboardScoreLoader";
import { LeaderboardEntry } from '../LeaderboardEntry/LeaderboardEntry';

import saffronCity from "../../assets/saffronCity.jpeg";
import palletTown from "../../assets/palletTown.jpg";
import pokemonHouse from "../../assets/pokemonHouse.jpg";

// Clicking on each map displays its corresponding score.
// This is acheived by setting map when the map is clicked, and the following fetch request passes this on to the backend via dynamic route.
// The fetched scores correspond to the map.

export function LeaderboardPage() {

    const [ allScores, setAllScores ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const [ isChangeSubmitted, setIsChangeSubmitted ] = useState(false);
    const [ map, setMap ] = useState(null);

    useEffect(() => {

        async function getLeaderboard() {
            if (map === null) setIsLoading(false);

            else {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_leaderboard/${map}`)
                const { allScores } = await response.json();

                setAllScores(allScores);
                setIsChangeSubmitted(true)

            }
        }

        getLeaderboard()
    },[map, isChangeSubmitted])

    return (

        <>
        <main className={styles.pageWrapper}>

            <Link to={'/map-select'}>Map Select</Link>
            <h1>Leaderboard</h1>
            <p>Look upon these scores, ye Mighty, and despair</p>
            <p>(Click on the maps to display their scores)</p>
        
            <section className={styles.loaderContainer}>
                <LeaderboardScoreLoader map={'saffron-city'} backgroundUrl={saffronCity} setMapName={setMap} setIsChangeSubmitted={setIsChangeSubmitted} />
                <LeaderboardScoreLoader map={'pallet-town'} backgroundUrl={palletTown} setMapName={setMap}  setIsChangeSubmitted={setIsChangeSubmitted} />
                <LeaderboardScoreLoader map={'pokemon-house'} backgroundUrl={pokemonHouse} setMapName={setMap} setIsChangeSubmitted={setIsChangeSubmitted}  />
            </section>

            {isLoading ? <p>Loading</p> :

            isChangeSubmitted === false ? null :

            <section className={styles.entryContainer}>
                {

                allScores.map(score => {
                    return (
                        < LeaderboardEntry key={score.id} entry={score} />
                    )
                })

                }


            </section>

            
            }

        </main>

        </>
    )
}
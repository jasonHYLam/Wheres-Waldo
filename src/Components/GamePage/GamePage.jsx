import { createContext, useEffect, useRef, useState } from 'react';
import styles from './GamePage.module.css';
import { ImageContainer } from '../ImageContainer/ImageContainer';
import { GameOverModal } from '../GameOverModal/GameOverModal';
import { GameHeader } from '../Header/GameHeader';
import { useParams } from 'react-router-dom';

import saffronCity from "../../assets/saffronCity.jpeg"
import palletTown from "../../assets/palletTown.jpg";
import pokemonHouse from "../../assets/pokemonHouse.jpg";

export const GameContext = createContext({})

export function GamePage() {

    const  { mapName } = useParams();

    // BackgroundImage determined by mapName.
    const [ backgroundImage, setBackgroundImage ] = useState()
    const [ charactersData, setCharactersData ] = useState([{isFound: false}]);
    const imageDimensionsRef = useRef({x: 1, y: 1});
    const imageDimensions = imageDimensionsRef.current;
    const [ showTargetBox, setShowTargetBox ] = useState(false);
    // Required to display targetBox and dropDownBox on click.
    const [ mouseCoords, setMouseCoords ] = useState({x: 0, y: 0});
    // Required for backend verification.
    const normalisedCoords = normaliseCoords(mouseCoords)

    const [ isGameWon, setIsGameWon ] = useState(false);
    const [ timerValue, setTimerValue ] = useState(0)

    function normaliseCoords(coords) {
        return {
            x: 1000 * coords.x / imageDimensions.x,
            y: 1000 * coords.y / imageDimensions.y,
        }
    }

    // useEffect hook to set the background based on the mapName.
    useEffect(() => {
        function getBackground() {
            if (mapName === 'saffron-city') setBackgroundImage(saffronCity)
            else if (mapName === 'pallet-town') setBackgroundImage(palletTown)
            else if (mapName === 'pokemon-house') setBackgroundImage(pokemonHouse)
        }

        getBackground()
    }, [mapName])

    // useEffect hook to fetch the character data, based on mapName.
    useEffect(() => {
        async function getCharacters() {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_char`)
            const data = await response.json();

            const filteredData = data.filter(character => (character.map === mapName))
            const filteredModifiedData = filteredData.map(character => {
                return {
                    name: character.name,
                    isFound: character.is_found,
                }
            })

            setCharactersData(filteredModifiedData)
        }

        getCharacters();
    },
    [mapName])

    // useEffect hook to start the game once the gamePage has rendered.
    useEffect(() => {
        async function startTimer() {
            fetch(`${import.meta.env.VITE_BACKEND_URL}/start_game`)
        }
        startTimer()
    },[])

    // Required to stop the game.
    useEffect(() => {

        if (charactersData.every(character => {
            return character.isFound
        })) {
            setIsGameWon(true)

            async function getTimerValue() {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/stop_game`)

                const { timeTotal } = await response.json();
                setTimerValue(timeTotal)
            }
            getTimerValue()
        }
    }, [ charactersData, isGameWon ])

    
    function toggleTargetBox() {
        showTargetBox ? setShowTargetBox(false) : setShowTargetBox(true);
    }

    function handleClick(e) {
        setMouseCoords({x: e.pageX, y: e.pageY})
        toggleTargetBox()
    }

    return (
        <>
        <main className={styles.gamePage}>


                <GameContext.Provider value={{ mouseCoords, normalisedCoords, charactersData, setCharactersData, isGameWon, imageDimensionsRef, timerValue, setTimerValue, mapName}}>
                    {isGameWon ? <GameOverModal/> : null }

                    <GameHeader mapName={mapName} />

                    <ImageContainer handleClick={handleClick} showTargetBox={showTargetBox} backgroundImage={backgroundImage}>
                    </ImageContainer>

                </GameContext.Provider>

        </main>
        </>
    )
}
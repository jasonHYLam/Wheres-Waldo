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
    console.log('checking map name')
    console.log(mapName)


    const [ backgroundImage, setBackgroundImage ] = useState()
    // this will depend on the name of the map i think.

    const [ charactersData, setCharactersData ] = useState([{isFound: false}]);

    const imageDimensionsRef = useRef({x: 1, y: 1});
    const imageDimensions = imageDimensionsRef.current;

    console.log('checking image dimensions')
    console.log(imageDimensions)

    const [ showTargetBox, setShowTargetBox ] = useState(false);
    // needed to display click properly
    const [ mouseCoords, setMouseCoords ] = useState({x: 0, y: 0});
    // needed for backend verification
    const normalisedCoords = normaliseCoords(mouseCoords)
    // console.log('current normalisedCoords')
    // console.log(normalisedCoords)

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

    // useEffect hook to fetch the character data.
    // need to check that it is only those that match the mapName
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

            console.log('this is filtered modified data. behold')
            console.log(filteredModifiedData)

            setCharactersData(filteredModifiedData)
        }

        getCharacters();
    },
    [
        mapName
    ]
    )

    // useEffect hook to start the game once the gamePage has rendered.
    useEffect(() => {
        async function startTimer() {
            fetch(`${import.meta.env.VITE_BACKEND_URL}/start_game`)
        }
        startTimer()
    },[])

    // can i use this for stopping the game?
    // I will need to check that it is only those that match the mapname
    useEffect(() => {

        if (charactersData.every(character => {
            return character.isFound
        })) {
            console.log('all characters found')
            setIsGameWon(true)

            async function getTimerValue() {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/stop_game`)

                const { timeTotal } = await response.json();
                console.log(timeTotal)
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


                <GameContext.Provider value={{ mouseCoords, normalisedCoords, charactersData, setCharactersData, isGameWon, imageDimensionsRef, timerValue, setTimerValue, }}>
                    {isGameWon ? <GameOverModal/> : null }

                    <GameHeader mapName={mapName} />

                    <ImageContainer handleClick={handleClick} showTargetBox={showTargetBox} backgroundImage={backgroundImage}>
                    </ImageContainer>

                </GameContext.Provider>

        </main>
        </>
    )
}
import { createContext, useEffect, useRef, useState } from 'react';
import styles from './GamePage.module.css';
import { ImageContainer } from '../ImageContainer/ImageContainer';
import { GameOverModal } from '../GameOverModal/GameOverModal';
import { GameHeader } from '../Header/GameHeader';

export const GameContext = createContext({
})

export function GamePage() {

    const imageDimensionsRef = useRef({x: 1, y: 1});
    const imageDimensions = imageDimensionsRef.current;
    const [ showTargetBox, setShowTargetBox ] = useState(false);
    // needed to display click properly
    const [ mouseCoords, setMouseCoords ] = useState({x: 0, y: 0});
    // needed for backend verification
    const normalisedCoords = normaliseCoords(mouseCoords)
    const [ charactersData, setCharactersData ] = useState([{isFound: false}]);
    const [ isGameWon, setIsGameWon ] = useState(false);
    const [ timerValue, setTimerValue ] = useState(0)

    function normaliseCoords(coords) {
        return {
            x: 1000 * coords.x / imageDimensions.x,
            y: 1000 * coords.y / imageDimensions.y,
        }
    }


    // useEffect hook to fetch the character data.
    useEffect(() => {
        async function getCharacters() {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_char`)
            const data = await response.json();

            const modifiedData = data.map(character => {
                return {
                    name: character.name,
                    isFound: character.is_found,
                }
            })

            setCharactersData(modifiedData)
        }

        getCharacters();
    },
    []
    )

    // useEffect hook to start the game once the gamePage has rendered.
    useEffect(() => {
        async function startTimer() {
            fetch(`${import.meta.env.VITE_BACKEND_URL}/start_game`)
        }
        startTimer()
    },[])

    // can i use this for stopping the game?
    useEffect(() => {

        if (charactersData.every(character => {
            return character.isFound
        })) {
            console.log('all characters found')
            // isGameWonRef.current = true;
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


                <GameContext.Provider value={{ mouseCoords, normalisedCoords, charactersData, setCharactersData, isGameWon, imageDimensionsRef, timerValue, setTimerValue }}>
                    {isGameWon ? <GameOverModal/> : null }

                    <GameHeader />

                    <ImageContainer handleClick={handleClick} showTargetBox={showTargetBox}>
                    </ImageContainer>

                </GameContext.Provider>

        </main>
        </>
    )
}
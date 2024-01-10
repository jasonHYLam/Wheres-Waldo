import { createContext, useEffect, useRef, useState } from 'react';
import styles from './GamePage.module.css';
import { ImageContainer } from '../ImageContainer/ImageContainer';

export const GameContext = createContext({
})

export function GamePage() {

    const [ showTargetBox, setShowTargetBox ] = useState(false);
    const [ mouseCoords, setMouseCoords ] = useState({x: 0, y: 0});
    const [ charactersData, setCharactersData ] = useState([{isFound: false}]);
    const isGameWonRef = useRef(false);

    // const normalisedCoords = {
    //     x: mouseCoords.x / window.innerWidth, 
    //     y: mouseCoords.y / window.innerHeight, 
    // }

    function normaliseCoords(e) {
        return {
            x: e.pageX / window.screen.width,
            y: e.pageY / window.screen.height,
        }
    }

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

    
    if (charactersData.every(character => {
        return character.isFound
        })) {
        console.log('all characters found')
        // when all characters found, do something
        isGameWonRef.current = true;
        // disable the game; disable handleClick I guess
        // show you win modal
    }

    function toggleTargetBox() {

        showTargetBox ? setShowTargetBox(false) : setShowTargetBox(true);
        console.log(`showTargetBox: ${showTargetBox}`)
    }

    function getMouseCoords(e) {
        //
        console.log(`${e.pageX/window.screen.width}, ${e.pageY/window.screen.height}`)
        console.log(`${e.pageX}, ${e.pageY}`)
        console.log(`screen width: ${window.screen.width}`)
        console.log(`screen height: ${window.screen.height}`)
        console.log(normaliseCoords(e))
    }

    function handleClick(e) {
        // setMouseCoords({x: e.pageX, y: e.pageY})
        setMouseCoords({x: e.pageX, y: e.pageY})
        toggleTargetBox()
        if (showTargetBox) {
            getMouseCoords(e)
        }
    }

    return (
        <>
        <main className={styles.gamePage}>

            <GameContext.Provider value={{ mouseCoords, charactersData, setCharactersData, isGameWonRef }}>

                <ImageContainer handleClick={handleClick} showTargetBox={showTargetBox}>
                </ImageContainer>

            </GameContext.Provider>

        </main>
        </>
    )
}
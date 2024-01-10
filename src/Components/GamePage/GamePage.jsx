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

    
    const imageDimensionsRef = useRef({x: 1, y: 1});
    const imageDimensions = imageDimensionsRef.current;

    function normaliseCoords(e) {
        return {
            x: 1000 * e.pageX / imageDimensions.x,
            y: 1000 * e.pageY / imageDimensions.y,
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
        console.log(`${e.pageX}, ${e.pageY}`)
        // these ain't right... this is still window... dammit
        // ajjj i need the div dimensions, not window/screen dimensions...
        console.log(`screen width: ${imageDimensionsRef.current.x}`)
        console.log(`screen height: ${imageDimensionsRef.current.y}`)
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

            <GameContext.Provider value={{ mouseCoords, charactersData, setCharactersData, isGameWonRef, imageDimensionsRef }}>

                <ImageContainer handleClick={handleClick} showTargetBox={showTargetBox}>
                </ImageContainer>

            </GameContext.Provider>

        </main>
        </>
    )
}
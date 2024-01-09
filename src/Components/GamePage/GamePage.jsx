import { createContext, useEffect, useState } from 'react';
import styles from './GamePage.module.css';
import { ImageContainer } from '../ImageContainer/ImageContainer';

export const GameContext = createContext({
})

export function GamePage() {

    const [ showTargetBox, setShowTargetBox ] = useState(false);
    const [ mouseCoords, setMouseCoords ] = useState({x: 0, y: 0});
    // intial set up has object with false isFound value, to prevent win condition triggering. 
    const [ charactersData, setCharactersData ] = useState([{isFound: false}]);

    // console.log('sha la la')
    // console.log(charactersData)

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
        // disable the game; disable handleClick I guess
        // show you win modal
    }

    function toggleTargetBox() {

        showTargetBox ? setShowTargetBox(false) : setShowTargetBox(true);
        console.log(`showTargetBox: ${showTargetBox}`)
    }

    function getMouseCoords(e) {
        console.log(`${e.clientX}, ${e.clientY}`)
    }

    function handleClick(e) {
        setMouseCoords({x: e.pageX, y: e.pageY})
        toggleTargetBox()
        if (showTargetBox) {
            getMouseCoords(e)
        }
    }

    return (
        <>
        <GameContext.Provider value={{ mouseCoords, charactersData, setCharactersData }}>

            <ImageContainer handleClick={handleClick} showTargetBox={showTargetBox}>
            </ImageContainer>

        </GameContext.Provider>
        </>
    )
}
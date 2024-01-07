import { createContext, useEffect, useState } from 'react';
import styles from './GamePage.module.css';
import { ImageContainer } from '../ImageContainer/ImageContainer';

export const GameContext = createContext({
})

export function GamePage() {

const [ showTargetBox, setShowTargetBox ] = useState(false);
const [ mouseCoords, setMouseCoords ] = useState({x: 0, y: 0})

// what to do in the useEffect
// fetch
// possibly set state
useEffect(() => {
    async() => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_char`)
        const data = response.json();
        console.log(data)
    }
},
[]
)

function toggleTargetBox() {

    showTargetBox ? setShowTargetBox(false) : setShowTargetBox(true);
    console.log(`showTargetBox: ${showTargetBox}`)
}

function getMouseCoords(e) {
    console.log(`${e.clientX}, ${e.clientY}`)
}

function handleClick(e) {
    toggleTargetBox()
    if (showTargetBox) {
        getMouseCoords(e)
        setMouseCoords({x: e.pageX, y: e.pageY})
    }
}

function determineMouseCoords(e) {
    setMouseCoords({x: e.pageX, y: e.pageY})
}

    return (
        <>
        <GameContext.Provider value={{mouseCoords}}>

            {showTargetBox ? 

            <ImageContainer handleClick={handleClick} showTargetBox={showTargetBox}>
            </ImageContainer>
            :
            <ImageContainer handleClick={handleClick} determineMouseCoords={determineMouseCoords}>
            </ImageContainer>
            }

        </GameContext.Provider>
        </>
    )
}
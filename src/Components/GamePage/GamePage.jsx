import { useState } from 'react';
import styles from './GamePage.module.css';

export function GamePage() {

const [ showTargetBox, setShowTargetBox ] = useState(false);

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
    }
}

// for the box, may need to make a div that is out of flow. and base its centre on mouse, and have fixed width and height.



    return (
        <>
        <p>Fun game</p>
        <section 
            onClick={handleClick}
            className={styles.imageContainer}
            ></section>
        </>
    )
}
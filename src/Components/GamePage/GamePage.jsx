import { useState } from 'react';
import styles from './GamePage.module.css';

export function GamePage() {

const [ showTargetBox, setShowTargetBox ] = useState(false);

function handleClick() {

    showTargetBox ? setShowTargetBox(false) : setShowTargetBox(true);
    console.log(`showTargetBox: ${showTargetBox}`)
}



    return (
        <>
        <p>Fun game</p>
        <section onClick={handleClick} className={styles.imageContainer}></section>
        </>
    )
}
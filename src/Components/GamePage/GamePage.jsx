import { useState } from 'react';
import styles from './GamePage.module.css';

export function GamePage() {

const [ showTargetBox, setShowTargetBox ] = useState(false);
const [ mouseCoords, setMouseCoords ] = useState({x: 0, y: 0})

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

    return (
        <>
            <section 
                onClick={handleClick}
                className={styles.imageContainer}
                onPointerMove={(e) => {setMouseCoords({x: e.pageX, y: e.pageY})}}
            >

                {(showTargetBox) ? 
                <div 
                    className={styles.targetBox} 
                    style={{
                        transform: `translate(${mouseCoords.x}px, ${mouseCoords.y}px)`
                    }}
                    ></div>
                     : null }
            </section>
        </>
    )
}
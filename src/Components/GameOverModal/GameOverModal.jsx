import { useContext } from 'react'
import styles from './GameOverModal.module.css'
import { GameContext } from '../GamePage/GamePage'



export function GameOverModal() {
    const { timerValue } = useContext(GameContext)
    console.log(timerValue)
    return (
        <>
        <section className={styles.gameOverModal}>

            <p>You found em all!</p>
            <p>Your time: {timerValue} </p>

            <p>Submit score:</p>
        </section>
        
        </>
    )
}
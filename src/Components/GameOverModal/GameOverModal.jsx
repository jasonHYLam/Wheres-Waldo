import { useContext } from 'react'
import styles from './GameOverModal.module.css'
import { GameContext } from '../GamePage/GamePage'
import { SubmitForm } from '../SubmitForm/SubmitForm'



export function GameOverModal() {
    const { timerValue } = useContext(GameContext)
    console.log(timerValue)
    return (
        <>
        <section className={styles.gameOverModal}>

            <p>You found em all!</p>
            <p>Your time: {timerValue} </p>

            <p>Submit score:</p>
            <SubmitForm />
        </section>
        
        </>
    )
}
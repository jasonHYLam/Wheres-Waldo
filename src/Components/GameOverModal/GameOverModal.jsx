import { useContext } from 'react'
import styles from './GameOverModal.module.css'
import { GameContext } from '../GamePage/GamePage'
import { SubmitForm } from '../SubmitForm/SubmitForm'



export function GameOverModal() {
    const { timerValue } = useContext(GameContext)
    return (
        <>
        <section className={styles.gameOverModal}>

            <h1>You found em all!</h1>
            <p>Your time: {timerValue / 1000} s </p>

            <SubmitForm />
        </section>
        
        </>
    )
}
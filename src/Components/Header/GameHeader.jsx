import styles from './GameHeader.module.css';
import { TimerDisplay } from '../TimerDisplay/TimerDisplay';

import abra from '../../assets/abra.jpeg'
import dewgong from '../../assets/dewgong.png'
import gloom from '../../assets/gloom.png'

export function GameHeader() {
    return (
        <>
        <header className={styles.gameHeader}>
            <TimerDisplay />

            <img src={abra} alt="" />


        </header>
        </>
    )
}
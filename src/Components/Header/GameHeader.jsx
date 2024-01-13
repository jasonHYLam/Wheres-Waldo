import styles from './GameHeader.module.css';
import { TimerDisplay } from '../TimerDisplay/TimerDisplay';

export function GameHeader() {
    return (
        <>
        <header className={styles.gameHeader}>
            <TimerDisplay />
        </header>
        </>
    )
}
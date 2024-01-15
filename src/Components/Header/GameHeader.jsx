import styles from './GameHeader.module.css';
import { TimerDisplay } from '../TimerDisplay/TimerDisplay';
import { CharacterInHeader } from '../CharacterInHeader/CharacterInHeader';

import abra from '../../assets/abra.jpeg'
import dewgong from '../../assets/dewgong.png'
import gloom from '../../assets/gloom.png'

// how do i make it so that when i guess character, i grey it out? i need separate component i think
// perhaps one that takes name and background url. 
export function GameHeader() {
    return (
        <>
        <header className={styles.gameHeader}>
            <TimerDisplay />
            <CharacterInHeader name='Abra' backgroundUrl={abra} />
            <CharacterInHeader name='Dewgong' backgroundUrl={dewgong} />
            <CharacterInHeader name='Gloom' backgroundUrl={gloom} />
        </header>
        </>
    )
}
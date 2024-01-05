import { useContext } from 'react';
import styles from './TargetBox.module.css';
import { GameContext } from '../GamePage/GamePage';

export function TargetBox() {
    const {mouseCoords} = useContext(GameContext);
    return (
        <>
        <section
        className={styles.targetBox}
        style={{
            transform: `translate(${mouseCoords.x}px, ${mouseCoords.y}px)`
        }}
        ></section>
        </>
    )
}
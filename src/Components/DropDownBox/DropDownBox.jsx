import { useContext } from 'react';
import { GameContext } from '../GamePage/GamePage';
import styles from './DropDownBox.module.css';

export function DropDownBox() {

    const {mouseCoords} = useContext(GameContext);

    return (
        <>
        <section
        className={styles.dropDownBox}
        style={{
            transform: `translate(${mouseCoords.x}px, ${mouseCoords.y}px)`
        }}
        >
            <p>Char 1</p>
            <p>Char 2</p>
            <p>Char 3</p>
        </section>
        
        </>
    )
}
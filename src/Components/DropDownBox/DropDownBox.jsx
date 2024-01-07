import { useContext } from 'react';
import { GameContext } from '../GamePage/GamePage';
import styles from './DropDownBox.module.css';
// import icon from '../../assets/react.svg'

import { DropDownCharacter } from '../DropDownCharacter/DropDownCharacter';


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
            <DropDownCharacter name={'Abra'} backgroundUrl={'../../assets/react.svg'} />
        </section>

        
        </>
    )
}
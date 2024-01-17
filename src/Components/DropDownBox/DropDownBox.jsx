import { useContext } from 'react';
import { GameContext } from '../GamePage/GamePage';
import styles from './DropDownBox.module.css';

import { DropDownCharacter } from '../DropDownCharacter/DropDownCharacter';


export function DropDownBox() {

    const { mouseCoords, charactersData } = useContext(GameContext);

    return (
        <>
        <section
            className={styles.dropDownBox}
            style={{
                transform: `translate(${mouseCoords.x}px, ${mouseCoords.y}px)`
            }}
        >
            {charactersData.map(character => {
                
                if (!character.isFound) {
                    return <DropDownCharacter key={character.name} name={character.name}/>
                }
            })}

        </section>
        </>
    )
}
import { useContext } from 'react';
import styles from './DropDownCharacter.module.css';
import { GameContext } from '../GamePage/GamePage';

import abra from '../../assets/abra.jpeg'
import dewgong from '../../assets/dewgong.png'
import gloom from '../../assets/gloom.png'

export function DropDownCharacter({name}) {

    const { mouseCoords, charactersData, setCharactersData } = useContext(GameContext);

    let backgroundUrl = '';
    if (name === 'Abra') backgroundUrl = abra;
    else if (name === 'Dewgong') backgroundUrl = dewgong;
    else if (name === 'Gloom') backgroundUrl = gloom;

    async function clickCharacter() {
        const dataToSend = {name, mouseCoords}
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_specific_char`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify(dataToSend),
        })

        const { isCorrect } = await response.json()

        if (isCorrect) {
            const modifiedCharacterData = charactersData.map(character => {
                if (character.name === name) {
                    return {name, isFound: true}
                }
                else return character
            })

            setCharactersData(modifiedCharacterData)
        }
    }

    return (

        <>
        <div className={styles.dropDownCharacter} onClick={clickCharacter}>
            <img className={styles.characterImage} src={backgroundUrl} alt="" />
            <p>{name}</p>
        </div>
        </>
    )
}
import { useContext } from 'react';
import styles from './DropDownCharacter.module.css';
import { GameContext } from '../GamePage/GamePage';

import abra from '../../assets/abra.jpeg'
import dewgong from '../../assets/dewgong.png'
import gloom from '../../assets/gloom.png'

export function DropDownCharacter({name}) {

    const { mouseCoords, normalisedCoords, charactersData, setCharactersData } = useContext(GameContext);

    console.log(`mouse coords`)
    // console.log(mouseCoords)
    console.log(`normalised mouse coords`)
    console.log(normalisedCoords)

    let backgroundUrl = '';
    if (name === 'Abra') backgroundUrl = abra;
    else if (name === 'Dewgong') backgroundUrl = dewgong;
    else if (name === 'Gloom') backgroundUrl = gloom;

    async function clickCharacter() {
        const dataToSend = {name, normalisedCoords}
        console.log('checking dataToSend')
        console.log(dataToSend)
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_specific_char`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify(dataToSend),
        })

        const { isCorrect } = await response.json()
        console.log(`is correct? ${isCorrect}`)

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
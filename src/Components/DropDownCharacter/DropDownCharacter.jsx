import { useContext } from 'react';
import styles from './DropDownCharacter.module.css';
import { GameContext } from '../GamePage/GamePage';

// saffron city
import abra from '../../assets/abra.jpeg'
import dewgong from '../../assets/dewgong.png'
import gloom from '../../assets/gloom.png'

// pallet town
import horsea from '../../assets/horsea.png'
import weepinbell from '../../assets/weepinbell.png'
import sandshrew from '../../assets/sandshrew.webp'

// pokemon house
import diglett from '../../assets/diglett.png'
import butterfree from '../../assets/butterfree.png'
import lapras from '../../assets/lapras.png'

export function DropDownCharacter({name}) {

    const { mouseCoords, normalisedCoords, charactersData, setCharactersData } = useContext(GameContext);

    let backgroundUrl = '';
    if (name === 'Abra') backgroundUrl = abra;
    else if (name === 'Dewgong') backgroundUrl = dewgong;
    else if (name === 'Gloom') backgroundUrl = gloom;

    else if (name === 'Horsea') backgroundUrl = horsea;
    else if (name === 'Weepinbell') backgroundUrl = weepinbell;
    else if (name === 'Sandshrew') backgroundUrl = sandshrew;

    else if (name === 'Diglett') backgroundUrl = diglett;
    else if (name === 'Butterfree') backgroundUrl = butterfree;
    else if (name === 'Lapras') backgroundUrl = lapras;

    async function clickCharacter() {
        const dataToSend = {name, normalisedCoords}
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
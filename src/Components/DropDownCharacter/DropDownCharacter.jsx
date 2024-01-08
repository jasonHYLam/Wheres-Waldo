import { useContext } from 'react';
import styles from './DropDownCharacter.module.css';
import { GameContext } from '../GamePage/GamePage';

export function DropDownCharacter({name, backgroundUrl=null}) {

    const { mouseCoords } = useContext(GameContext);
    console.log('checking mouseCoords')
    console.log(mouseCoords)

    async function clickCharacter() {
        console.log(`Clicked ${name}`)
        const dataToSend = {name, mouseCoords}
        console.log(dataToSend)
        console.log(JSON.stringify(dataToSend))
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_specific_char`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify(dataToSend),
        })

        const dataReceived = await response.json()
        console.log('checking data received')
        console.log(dataReceived)

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
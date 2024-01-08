import { useContext } from 'react';
import styles from './DropDownCharacter.module.css';
import { GameContext } from '../GamePage/GamePage';

export function DropDownCharacter({name, backgroundUrl=null}) {

    const { mouseCoords } = useContext(GameContext);
    console.log('checking mouseCoords')
    console.log(mouseCoords)

    async function clickCharacter() {
        console.log(`Clicked ${name}`)
        const data = {name, mouseCoords}
        fetch(`${import.meta.env.VITE_BACKEND_URL}/get_specific_char`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify(data),
        })

        // hmm. could i fetch the data, set state, associate name with id, and then...
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
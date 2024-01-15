import { useContext, useEffect, useState } from "react"
import { GameContext } from "../GamePage/GamePage"
import styles from './CharacterInHeader.module.css'

export function CharacterInHeader({name, backgroundUrl}) {

    const { charactersData } = useContext(GameContext)
    console.log(charactersData)
    const [ isFound, setIsFound ] = useState(false)

    // needs to check if the object corresponding to name has a true isFound, if so, display different style.
    useEffect(() => {

        const character = charactersData.find(character => {
            return character.name === name
        })
        if (character) {
            if (character.isFound === true) setIsFound(true)
        }
    })

    return (
        !isFound ? 
        <>
        <img className={styles.imageNotFound} src={backgroundUrl} alt="" />
        </>
        :
        <>
        <img className={styles.imageFound} src={backgroundUrl} alt="" />
        </>

    )
}
import { useContext, useEffect } from "react"
import { GameContext } from "../GamePage/GamePage"

export function CharacterInHeader({name, backgroundUrl}) {

    const { charactersData } = useContext(GameContext)
    console.log(charactersData)

    // needs to check if the object corresponding to name has a true isFound, if so, display different style.
    useEffect(() => {

        const character = charactersData.find(character => {
            return character.name === name
        })
        console.log(character)
        // const isFound = character.isFound
        console.log(name)
        // console.log(isFound)
        
    })
    return (
        <>
        <img src={backgroundUrl} alt="" />
        </>
    )
}
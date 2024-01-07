import { useContext } from 'react';
import { GameContext } from '../GamePage/GamePage';
import styles from './DropDownBox.module.css';

import abra from '../../assets/abra.jpeg'
import dewgong from '../../assets/dewgong.png'
import gloom from '../../assets/gloom.png'

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
            <DropDownCharacter name={'Abra'} backgroundUrl={abra} />
            <DropDownCharacter name={'Dewgong'} backgroundUrl={dewgong} />
            <DropDownCharacter name={'Gloom'} backgroundUrl={gloom} />
        </section>

        
        </>
    )
}
import { TargetBox } from '../TargetBox/TargetBox';
import { DropDownBox } from '../DropDownBox/DropDownBox';
import styles from './ImageContainer.module.css';
import { useContext } from 'react';
import { GameContext } from '../GamePage/GamePage';
import { GameOverModal } from '../GameOverModal/GameOverModal';

export function ImageContainer({showTargetBox=false, handleClick}) {

    const { isGameWonRef } = useContext(GameContext);
    const isGameWon = isGameWonRef.current;
    console.log('checking isGameWon')
    console.log(isGameWonRef)

    return(

        isGameWon ? 
        <section className={styles.imageContainer}>
            <GameOverModal/>

        </section>
        :
        <>
        <section
        onClick={handleClick}
        className={styles.imageContainer}
        >
            {showTargetBox ? 
            <>
            <TargetBox/> 
            <DropDownBox/>
            </>
            : null }
            
        </section>
        </>
    )

}
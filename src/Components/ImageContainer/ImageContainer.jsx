import { TargetBox } from '../TargetBox/TargetBox';
import { DropDownBox } from '../DropDownBox/DropDownBox';
import styles from './ImageContainer.module.css';
import { useContext } from 'react';
import { GameContext } from '../GamePage/GamePage';
// import { GameOverModal } from '../GameOverModal/GameOverModal';

import backgroundImage from '../../assets/wheresWaldoPokemon.jpeg'

export function ImageContainer({showTargetBox=false, handleClick}) {



    const { isGameWonRef, imageDimensionsRef } = useContext(GameContext);
    const isGameWon = isGameWonRef.current;
    // console.log('checking isGameWon')
    // console.log(isGameWonRef)

    function getImageDimensions(e) {

        console.log(`image height: ${e.target.height}`)
        console.log(`image width: ${e.target.width}`)
        imageDimensionsRef.current = {x: e.target.width, y: e.target.height}

    }

    return(

        isGameWon ? 
        <section className={styles.imageContainer}></section>
        :
        <>
        <section onClick={handleClick}>
            <img src={backgroundImage} className={styles.imageContainer} alt="" onLoad={getImageDimensions} />

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
import { TargetBox } from '../TargetBox/TargetBox';
import { DropDownBox } from '../DropDownBox/DropDownBox';
import styles from './ImageContainer.module.css';

export function ImageContainer({showTargetBox=false, handleClick, determineMouseCoords=null}) {
    return(
        <>
        <section
        onClick={handleClick}
        className={styles.imageContainer}
        // onPointerMove={determineMouseCoords}
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
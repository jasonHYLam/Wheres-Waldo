import styles from './GameHeader.module.css';
import { TimerDisplay } from '../TimerDisplay/TimerDisplay';
import { CharacterInHeader } from '../CharacterInHeader/CharacterInHeader';

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

// how do i make it so that when i guess character, i grey it out? i need separate component i think
// perhaps one that takes name and background url. 

// determine characters based on mapName

export function GameHeader({ mapName }) {
    return (
        <>
        <header className={styles.gameHeader}>
            <TimerDisplay />

            {
            mapName === 'saffron-city' ? 
            <>
                <CharacterInHeader name='Abra' backgroundUrl={abra} />
                <CharacterInHeader name='Dewgong' backgroundUrl={dewgong} />
                <CharacterInHeader name='Gloom' backgroundUrl={gloom} />
            </>
            :

            mapName === 'pallet-town' ? 
            <>
                <CharacterInHeader name='Horsea' backgroundUrl={horsea} />
                <CharacterInHeader name='Weepinbell' backgroundUrl={weepinbell} />
                <CharacterInHeader name='Sandshrew' backgroundUrl={sandshrew} />
            </>
            :
            mapName === 'pokemon-house' ? 
            <>
                <CharacterInHeader name='Diglett' backgroundUrl={diglett} />
                <CharacterInHeader name='Butterfree' backgroundUrl={butterfree} />
                <CharacterInHeader name='Lapras' backgroundUrl={lapras} />
            </>
            :
            null
            
            }
        </header>
        </>
    )
}
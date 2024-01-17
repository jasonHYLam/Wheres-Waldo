import styles from './SelectMapPage.module.css';
import { MapPreview } from "../MapPreview/MapPreview";

import saffronCity from "../../assets/saffronCity.jpeg";
import palletTown from "../../assets/palletTown.jpg";
import pokemonHouse from "../../assets/pokemonHouse.jpg";

export function SelectMapPage() {
    return (
        <>
        
        <p>Choose </p>

        <main className={styles.pageWrapper}>

            <section className={styles.container}>
                <MapPreview backgroundUrl={saffronCity} name={`saffron-city`}/>
                <MapPreview backgroundUrl={palletTown} name={`pallet-town`} />
                <MapPreview backgroundUrl={pokemonHouse} name={`pokemon-house`} />
            </section>



        </main>


        </>
    )
}
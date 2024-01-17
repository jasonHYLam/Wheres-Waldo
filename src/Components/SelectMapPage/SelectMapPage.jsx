import styles from './SelectMapPage.module.css';
import { MapPreview } from "../MapPreview/MapPreview";

import saffronCity from "../../assets/saffronCity.jpeg";
import palletTown from "../../assets/palletTown.jpg";
import pokemonHouse from "../../assets/pokemonHouse.jpg";

export function SelectMapPage() {
    return (
        <>
        

        <main className={styles.pageWrapper}>
        <h1>Choose Map</h1>
        <p>Where's Waldo with a Pokemon theme. Find all the characters before the jumpscare. Click the head for best results.</p>

            <section className={styles.container}>
                <MapPreview backgroundUrl={saffronCity} name={`saffron-city`}/>
                <MapPreview backgroundUrl={palletTown} name={`pallet-town`} />
                <MapPreview backgroundUrl={pokemonHouse} name={`pokemon-house`} />
            </section>

        <p>Art from Let's Find Pokemon! by Kazunori Aihara and Yuki Shimotoku</p>


        </main>


        </>
    )
}
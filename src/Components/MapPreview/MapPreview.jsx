import styles from './MapPreview.module.css';

import { Link } from "react-router-dom"

export function MapPreview({name, backgroundUrl}) {
    return (
        <>
        <section className={styles.mapPreview}>
            <Link to={`/game/${name}`}>
                <img className={styles.image} src={backgroundUrl} alt="" />
            </Link>
        </section>
        </>
    )
}
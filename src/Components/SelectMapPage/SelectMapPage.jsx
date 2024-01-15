import { MapPreview } from "../MapPreview/MapPreview"

import saffronCity from "../../assets/saffronCity.jpeg"

export function SelectMapPage() {
    return (
        <>
        
        <p>Choose </p>

        <MapPreview backgroundUrl={saffronCity} />

        </>
    )
}
import { Link } from "react-router-dom"

export function MapPreview({name, backgroundUrl}) {
    return (
        <>
        <Link to={`/game/${name}`}>
            <img src={backgroundUrl} alt="" />
        </Link>
        </>
    )
}
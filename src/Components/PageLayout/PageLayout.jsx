import { useState } from "react";
import { Outlet } from "react-router-dom"

export function PageLayout() {

    const [ mapName, setMapName ] = useState(null);

    return (
        <>
            <Outlet context={{mapName, setMapName}}/>
        </>
    )
}
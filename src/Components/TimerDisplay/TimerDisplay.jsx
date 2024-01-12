import { useEffect, useState } from "react"

export function TimerDisplay() {
    // how the fuck... won't this be hella expensive...?
    // perhaps this shouldn't even rely on the backend. this is merely a display. 
    // might just be a count value
    const timer = useState(0);
    // useEffect(() => {
    //     async function getTimerValue() {
    //         fetch(`${import.meta.env.VITE_BACKEND_URL}/get_timer`)

    //     }

    // },[]);
    return (
        <>
        <section>

        </section>
        </>
    )
}
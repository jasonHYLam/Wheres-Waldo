import { useEffect, useState } from "react"

export function TimerDisplay() {
    // perhaps this shouldn't even rely on the backend. this is merely a display. 
    // might just be a count value

    const [ timer, setTimer ] = useState(0);

    // useEffect(() => {
    //     async function updateTimer() {

    //         setInterval(() => {
    //             setTimer(timer + 1)

    //         }, 1000)



    //     }

    //     updateTimer()

    // },[timer]);
    return (
        <>
        <section>
            <p>{timer}</p>

        </section>
        </>
    )
}
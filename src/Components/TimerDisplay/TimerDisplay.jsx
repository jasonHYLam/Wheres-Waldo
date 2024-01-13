import { useContext, useEffect, useRef, useState } from "react"
import { GameContext } from "../GamePage/GamePage";

export function TimerDisplay() {

    const { isGameWonRef } = useContext(GameContext)

    const startTimeValue = useRef(new Date().getTime())
    const [ endTimeValue, setEndTimeValue] = useState(new Date().getTime());
    const [ timeDiff, setTimeDiff ] = useState(0)


    const [ formattedTimeDiff, setFormattedTimeDiff ] = useState({})

    useEffect(() => {
        function updateTimer() {

            if (isGameWonRef.current === false) {
                setEndTimeValue(new Date().getTime())
                setTimeDiff( endTimeValue - startTimeValue.current )

                // Convert the time elapsed into the corresponding time increment, and use floor to display integer. Use modulo operator to start counters from 0 after reaching 59.
                // Display 01 -09 if value is less than 10.
                let hours = Math.floor(timeDiff / (60 * 60 * 1000));
                hours = (hours < 10) ? `0${hours}` : `${hours}`;

                let minutes = Math.floor(timeDiff / (60 * 1000)) % 60;
                minutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;

                let seconds = Math.floor(timeDiff / (1000)) % 60;
                seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

                setFormattedTimeDiff({
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                })
            }
        }

        updateTimer()

    },
    [endTimeValue, isGameWonRef, timeDiff]
    );

    return (
        <>
        <section>
            <p>
                {formattedTimeDiff.hours} 
                :
                {formattedTimeDiff.minutes} 
                :
                {formattedTimeDiff.seconds} 
            </p>

        </section>
        </>
    )
}
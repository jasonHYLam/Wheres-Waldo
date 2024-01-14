import { useContext, useEffect, useRef, useState } from "react"
import { GameContext } from "../GamePage/GamePage";

export function TimerDisplay() {

    const { isGameWon } = useContext(GameContext)


    const [ timerCount, setTimerCount ] = useState(0);
    const [ formattedTimerCount, setFormattedTimerCount ] = useState({});

    // refactor.. by using setInterval and clearInterval.

    useEffect(() => {

        if (!isGameWon) {

        const intervalId = setInterval(() => {
            setTimerCount(timerCount + 1)
        }, 1000)

        // Convert the time elapsed into the corresponding time increment, and use floor to display integer. Use modulo operator to start counters from 0 after reaching 59.
        // Display 01 -09 if value is less than 10.
        let hours = Math.floor(timerCount / (60 * 60));
        hours = (hours < 10) ? `0${hours}` : `${hours}`;

        let minutes = Math.floor(timerCount / 60 ) % 60;
        minutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;

        let seconds = (timerCount) % 60;
        seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

        setFormattedTimerCount({
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        })

        return () => clearInterval(intervalId)

        }

        else {
            console.log('GAME WON YESSS ')
        }


    }, [timerCount, isGameWon])

    return (
        <>
        <section>
            <p>{timerCount}</p>
            <p>
                {formattedTimerCount.hours}
                :
                {formattedTimerCount.minutes}
                :
                {formattedTimerCount.seconds}
            </p>

        </section>
        </>
    )
}
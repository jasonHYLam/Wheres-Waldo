import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../GamePage/GamePage";

export function SubmitForm() {

    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit } = useForm();
    const { timerValue, mapName } = useContext(GameContext)

    console.log('checking mapName')
    console.log(mapName)

    async function onSubmit(nameInput) {

        // will also need to post the MAP 
        // will need to modify userAndScore model I think
        const data = JSON.stringify({
            name: nameInput.name,
            timerValue: timerValue,
            mapName: mapName,
        })

        console.log(data)

        fetch(`${import.meta.env.VITE_BACKEND_URL}/submit_score`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        })

        navigate('/leaderboard');
    }

    return (
        <>
        <form method="POST" action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input type="text"
            {...register('name', {
                required: 'Name is required',
            })}
            />
            <p>{errors.username?.message}</p>

            <button type="submit"> Submit Score</button>

        </form>
        </>
    )
}
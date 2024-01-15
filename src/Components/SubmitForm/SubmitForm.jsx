import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GameContext } from "../GamePage/GamePage";

export function SubmitForm() {
    const {register, formState: {errors}, handleSubmit } = useForm();

    const { timerValue } = useContext(GameContext)

    async function onSubmit(nameInput) {

        const data = JSON.stringify({
            name: nameInput.name,
            timerValue: timerValue,
        })

        console.log(data)

        fetch(`${import.meta.env.VITE_BACKEND_URL}/submit_score`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        })

        // add a redirect / navigate
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
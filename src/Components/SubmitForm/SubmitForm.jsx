import { useForm } from "react-hook-form";

export function SubmitForm() {
    const {register, formState: {errors}, handleSubmit } = useForm();

    async function onSubmit(nameInput) {
        console.log(nameInput)
    }
    return (
        <>
        <form method="POST" action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name"></label>
            <input type="text" name="name" 
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
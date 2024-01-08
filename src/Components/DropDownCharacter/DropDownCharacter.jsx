import styles from './DropDownCharacter.module.css';

export function DropDownCharacter({name, backgroundUrl=null}) {

    async function clickCharacter() {
        console.log(`Clicked ${name}`)
        fetch(`${import.meta.env.VITE_BACKEND_URL}/get_char/${name}`)
        // hmm. could i fetch the data, set state, associate name with id, and then...
    }

    return (
        <div className={styles.dropDownCharacter} onClick={clickCharacter}>
            <img className={styles.characterImage} src={backgroundUrl} alt="" />
            <p>{name}</p>
        </div>
    )
}
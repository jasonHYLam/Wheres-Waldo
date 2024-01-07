import styles from './DropDownCharacter.module.css';

export function DropDownCharacter({name, backgroundUrl=null}) {
    return (
        <div>
            <img className={styles.characterImage} src={backgroundUrl} alt="" />
            <p>{name}</p>
        </div>
    )
}
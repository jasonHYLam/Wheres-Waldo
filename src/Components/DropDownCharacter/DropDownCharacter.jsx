export function DropDownCharacter({name, backgroundUrl=null}) {
    return (
        <div>
            <img src={backgroundUrl} alt="" />
            <p>{name}</p>
        </div>
    )
}
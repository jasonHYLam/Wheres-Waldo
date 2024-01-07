export function DropDownCharacter({name, backgroundUrl}) {
    return (
        <div>
            <div style={`background-image(${backgroundUrl})`}></div>
            <p>{name}</p>
        </div>
    )
}
import "./ApplyButton.css"

export const ApplyButton = ({handleClick}: {handleClick: any}) => {
    return (
        <button className="apply-button" onClick={handleClick} type="button">Применить</button>
    )
}
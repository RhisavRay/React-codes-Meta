function Btn()
{
    //const eventHandler = () => console.log("Clicked!")

    const eventHandler = () => console.log("Hovered over me!")

    return(
        <button onMouseOver = {eventHandler}>
            Click Me
        </button>
    )
}

export default Btn
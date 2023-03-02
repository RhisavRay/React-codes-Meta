function Card(props)
{
    const Style = 
    {
        border: "2px solid black",
        borderRadius: "20px",
        padding: "20px"
    }

    return (
        <div className="Cards" style={Style}>
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    )
}

export default Card
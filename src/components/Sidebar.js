function Sidebar(props)
{
    const sidebarStyle =
    {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }

    return <h2 style={sidebarStyle}>{props.greet} from Sidebar!</h2>
}

export default Sidebar
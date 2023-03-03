function ModeToggler()
{
    let darkModeOn = true;
    const darkMode = <h1>Dark mode is On</h1>
    const lightMode = <h1>Light mode is On</h1>

    function clickHandler()
    {
        darkModeOn = !darkModeOn
    }

    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={clickHandler}>
                Click Me!
            </button>
        </div>
    )
}

export default ModeToggler
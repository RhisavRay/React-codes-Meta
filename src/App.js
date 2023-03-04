import React, { useState } from "react"
import Header from "./components/Header"
import './App.css'

function App()
{
  const [word, setWord] = useState ('Eat')

  function handleClick()
  {
    setWord('Drink')
  }

  return (
    <div className="App">
      <Header message = {word + ` at Little Lemon`}/>
      <button onClick={handleClick}>Click Here!</button>
    </div>
  )
}

export default App;
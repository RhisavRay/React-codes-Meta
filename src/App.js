import './App.css'
import rooftop from './assets/central-park.jpg'

function App()
{
  return (
    <div className='App'>
      <h1>Task: Add three images with some styling</h1>
      
      <h3>Using import statement:</h3>
      <img
      height={200}
      src={rooftop}
      alt="A rooftop view of Central Park, New York"/>
      
      <h3>Using require statement:</h3>
      <img
      height={200}
      src={require("./assets/central-park.jpg")}
      alt="A rooftop view of Central Park, New York"/>

      <h3>Using online url:</h3>
      <img
      height={200}
      /*src={randomImageURL}*/
      alt="A rooftop view of Central Park, New York"/>
    </div>
  )
}

export default App;
import './App.css'
import ReactPlayer from 'react-player';

function App()
{
  return (
    <div className='App'>
      <h1>React player example</h1>
      <ReactPlayer
      url={"https://www.youtube.com/watch?v=y1Pjp4rHavY"}
      playing={false}
      controls={true}
      volume={0.5}/>
    </div>
  )
}

export default App;
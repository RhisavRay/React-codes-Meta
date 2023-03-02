import logo from './logo.svg';
import './App.css';

import zoro from './zoro.jpg';

function Logo(props)
{
  const userPic = <img src={zoro}/>
  return userPic
}

function App()
{
  return (
    <div>
      <h1>Hello World!</h1>
      <Logo/>
    </div>
  )
}

export default App
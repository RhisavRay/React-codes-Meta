import './App.css'
import AboutMe from './components/AboutMe';
import Homepage from './components/Homepage';

function App()
{
  return(
    <div className='App'>
      <nav className='nav'>
        <a href='#' className='nav-item'>Homepage</a>
        <a href='#' className='nav-item'>About Me</a>
        <Homepage />
        <AboutMe/>
      </nav>
    </div>
  )
}

export default App;
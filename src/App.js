import './App.css'
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';

function App()
{
  return (
    <div className='App'>
      <nav className='nav'>
        <a href='#' className='nav-item'>Homepage</a>
        <a href='#' className='nav-item'>About Me</a>
      </nav>
      <Homepage/>
      <AboutMe/>
    </div>
  )
}

export default App;
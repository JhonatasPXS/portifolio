import './styles/sass_components/app.scss'
import Header from './components/Header'
import RoutesApp from './Routes'
import astronauta from './assets/img/astronauta.svg'


export default function App() {
  return (
    <div id="portfolio">
      <RoutesApp />
      <div className='astro'>
        <img className='astronauta' src={astronauta} alt="astronauta" />
      </div>
    </div>
  )
}
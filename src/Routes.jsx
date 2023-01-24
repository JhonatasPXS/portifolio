import { BrowserRouter as Router, Routes, Route, Link,} from 'react-router-dom';
import React from 'react'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import Skill from './pages/Skills';
import Skills from './pages/Skills';


export default function RoutesApp() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

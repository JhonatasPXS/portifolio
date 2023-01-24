import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header id='header'>
      <div id='logo1'>
        <Link id='logo' to="/">Jhonatas Soares</Link>
      </div>
      <nav id='navBar'>
        <ul>
          <li><Link className='btn home' to="/">Home</Link></li>
          <li><Link className='btn about' to="/about">Sobre</Link></li>
          <li><Link className='btn skills' to="/skills">Skill</Link></li>
          <li><Link className='btn contact' to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

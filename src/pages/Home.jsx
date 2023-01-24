import React from 'react'
import '/src/styles/sass_pages/home.scss'
import astronauta from '../assets/img/astronauta.svg'
import Typical from 'react-typical'

export default function Home() {
  const text = <Typical className='digit' loop={Infinity} steps={[3000, ' ']} wrapper= "p" />


  return (
    <div id='home'>
        <h1>Bem - vindo!! {text}</h1>
        <p>Olá, meu nome é Jhonatas e esse é meu portfólio, aqui você poderá me conhecer e ver os meus projetos um pouco melhor.</p>
    </div>
  )
}

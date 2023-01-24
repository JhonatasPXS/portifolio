import React from 'react'
import '/src/styles/sass_pages/home.scss'
import Typical from 'react-typical'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {
  const bar = <Typical className='digit' loop={Infinity} steps={[3000, ' ']} wrapper= "p" />

  const el = useRef(null);
  

  useEffect(() => {
    const text = new Typed(el.current, {
      strings: ["Olá, meu nome é Jhonatas e esse é meu portfólio, aqui você poderá me conhecer e ver os meus projetos um pouco melhor."],
      startDelay: 300,
      typeSpeed: 90,
      loop: false,
      showCursor: false
    });
    return () => {
      text.destroy();
    };
  }, []);

  return (
    <div id='home'>
        <h1>Bem - vindo!!</h1>
          <p ref={el}></p>
          <noscript>Olá, meu nome é Jhonatas e esse é meu portfólio, aqui você poderá me conhecer e ver os meus projetos um pouco melhor.</noscript>
    </div>
  )
}

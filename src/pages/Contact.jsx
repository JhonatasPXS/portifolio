import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/sass_pages/contact.scss'
import Typed from "typed.js";

export default function Contact() {

  const [name,  setName] = useState('')
  const [email,  setEmail] = useState('')
  const [message,  setMessage] = useState('')

  function sendEmail (e) {
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert('Preencha todos os campos')
      return;
    }

    const templateParms = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_sko38xm", "template_cxwc8nk", templateParms, "sWUXTKiC75wyOENB9")
    .then((response)=> {
      console.log('mail enviado', response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (error) => {
        console.log('erro', error);
    }) 

  }

  const textArea = useRef(null);
  useEffect(() => {
    const text = new Typed(textArea.current, {
      strings: ["Digite sua mensagem..."],
      startDelay: 200,
      typeSpeed: 90,
      attr: 'placeholder',
      bindInputFocusEvents: true,
      loop: false,
      showCursor: true
    });
    return () => {
      text.destroy();
    };
  }, []);

  return (
    <div id='contact'>
      <h1 className='contact-title'>Envie Sua Mensagem</h1>
      <form className='form' onSubmit={sendEmail}>

        <input type="text" 
        className='contact-name' 
        placeholder='Nome:' 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        />

        <input 
          type="email" 
          className='contact-email' 
          placeholder='Email:' 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}          
        />

        <textarea
          className='contact-message'
          placeholder=' Digite sua mensagem...'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          ref={textArea}
        />

        <button className='submit' type='submit'>Enviar</button>
      </form>
    </div>
  )
}

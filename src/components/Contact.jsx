import React from 'react'
import './contact.css'
import { useState } from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Contact = () => {
  const [name, setName] = useState('')
  const [asunto, setAsunto] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


  const resetForm = () => {
    setTimeout(() => {
      setName('')
      setAsunto('')
      setEmail('')
      setMensaje('')
    }, 1200);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!emailRegex.test(email)) {
      setErrorEmail(true)
      return
    }
    setErrorEmail(false)
    if([name, asunto, mensaje].includes('')) {
      setError(true)
      return
    }
    setError(false)
    resetForm()
  }


  return (
    <div className='contenedor-contact' id='contacto'>
        <h1 className='contact-titulo'>My <span>contact</span></h1>
        <div>
        <form className='formulario-contacto' action='correo.php' method='POST' onSubmit={handleSubmit}>
          
          {error && <p className='error-formulario'>Todos los campos son obligatorios</p>}
          {errorEmail && <p className='error-formulario'>Email no válido!</p>}
          
          <input type="text" name='name' className='item-formulario' value={name}
          placeholder= "Name..."
          onChange={(e)=> {setName(e.target.value)}}
          />

          <input type="text" name='asunto' className='item-formulario' value={asunto}
          placeholder="Subject"
          onChange={(e)=> {setAsunto(e.target.value)}}
          />


          <input type="text"  name='email' className='item-formulario' value={email}
          placeholder="Email..."
          onChange={(e)=> {setEmail(e.target.value)}}
          />

          <textarea name="mensaje" cols="30" rows="10"   className='item-formulario' value={mensaje}
          placeholder="Your message..."
          onChange={(e)=> {setMensaje(e.target.value)}}>
          </textarea>

          <button className='btn-formulario' type='submit'>Send!</button>
         </form>
         
         <p className='parrafo-contacto'>Or you can find me in: </p>
         <div className='contenedor-iconos-contacto'>
            <a href="https://github.com/BenjaminLeguizamon99" target='_blank' rel="noreferrer"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/benjamin-leguizamon/" target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
         </div>
        <div className='arrow-up'>
          <a href="#inicio"><BsFillArrowUpCircleFill /></a>
          
        </div>
        </div>
    </div>
  )
}

export default Contact
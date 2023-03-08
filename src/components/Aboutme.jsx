import React from 'react'
import './about-me.css'
import {IoLocationSharp} from 'react-icons/io5'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {BiWorld} from 'react-icons/bi'
import useVarios from '../hooks/useVarios'

const Aboutme = () => {
  const {conocimientos} = useVarios()
  return (
    <div className='sobre-mi-contenedor' id='sobre-mi'>
        <h1 className='titulo-sobre-mi'>About <span>me</span></h1>
        <div className="contenedor-sobre-mi">
          <div className="texto-sobre-mi">
            <h3>information about me</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis assumenda earum sunt quidem repellendus quod eveniet rerum molestiae, corrupti non dicta quis blanditiis. Natus doloribus veritatis odio adipisci enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptas quia, alias aperiam cupiditate, fugiat eius saepe, praesentium veritatis repellendus vero ex! Modi veniam aspernatur atque eligendi animi. Pariatur, repellendus.</p>
          </div>
          <div className="info-sobre-mi">
            <p className='items-sobre-mi'><IoLocationSharp />Location: <span>Córdoba, Argentina.</span></p>
            <p className='items-sobre-mi'><MdOutlineAlternateEmail />Email: <span>leguizamonbenjamin0@gmail.com</span></p>
            <p className='items-sobre-mi'><AiOutlinePhone /> Mobile number: <span>+54 9 351 595 5387</span></p>
            <p className='items-sobre-mi'><BiWorld /> Languages: <span>Spanish (native) - English (conversational)</span></p>
          </div>
        </div>
      <h3 className='titulo-skills'>My skills</h3>
      <div className="contenedor-skills">
        {conocimientos.map(e=>{
          return(
            <div className='skills-card' key={e.id}>
              <img src={e.logo} alt='logo' className='logos' />
              <h4>{e.tecnologia}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Aboutme
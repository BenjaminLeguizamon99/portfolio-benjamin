import React from 'react'
import './home.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {MdOutlineWork} from 'react-icons/md'
import {TbCertificate} from 'react-icons/tb'
import {IoMdMailOpen} from 'react-icons/io'
import {FiDownload} from 'react-icons/fi'

const Home = () => {
  return (
    <>
     <div className='contenedor-principal-home' id='inicio'>
        <div className="contenedor-img-titulo">
          <img src="../../assets/foto-mia-portfolio.png" alt='Foto mia' className='img-home' />
          
          <div className="contenedor-titulo-home">
            <h1 className='titulo-principal-home'>Hi, I'm <span>Benjamin Leguizamon</span></h1>
            <h2 className='subtitulo-home'>Frontend Developer & System Engineer Student</h2>
            <button className='button-home-cv'>Download CV <FiDownload className='download-icon' /> </button>
          </div>
       
        </div>

        <div className='contenedor-menu'>
            <div className="contenedor-toggle">
              Acá va a ir el icono del menú hamburguesa
            </div>
            <a href='#inicio'><AiOutlineHome className='icono-home'/></a>
            <a href='#sobre-mi'><BsPerson className='icono-home'/></a>
            <a href='#trabajos'><MdOutlineWork className='icono-home'/></a>
            <a href='#certificados'><TbCertificate className='icono-home'/></a>
            <a href='#contacto'><IoMdMailOpen className='icono-home'/></a>
        </div>
    </div>
    </>
   
    
  )
}

export default Home
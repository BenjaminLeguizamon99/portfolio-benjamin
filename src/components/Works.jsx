import React from 'react'
import './works.css'
import useVarios from '../hooks/useVarios'

const Works = () => {

    const {proyectos} = useVarios()
  return (
    <div className='contenedor-works' id='trabajos'>
        <h1 className='titulo-works'>My <span>works</span></h1>
        <div className="contenedor-imagenes">
            {proyectos.map(e=>{ return(
                <div key={e.id}>
                    <img src={e.img} alt="Proyecto" className='img-works' />
                    <button className='btn-works'><a href={e.link} target='_blank' rel='noreferrer' >View project!</a></button>
                </div>
            )
            })}
        </div>
    </div>
  )
}

export default Works
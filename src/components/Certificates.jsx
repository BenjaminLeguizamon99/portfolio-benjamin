import React, {useState} from 'react'
import './certificates.css'
import useVarios from '../hooks/useVarios'

const Certificates = () => {

  const {cursos} = useVarios()

  return (
    <div className='certificates-contenedor' id='certificados'>
        <h1 className='certificates-titulo'>My <span>certificates</span></h1>
        {cursos.map(e => {
          return (
            <div key={e.id}>
              <h3 className='subtitulo-certificados'>{e.nombre}</h3>
              <div className="contenedor-img-descripcion">
                <img src={e.img} className='img-certificado' />
                <p className='descripcion-certificado'>{e.description}</p>
              </div>
            </div>
          )
        })}
    </div>

  )
}

export default Certificates
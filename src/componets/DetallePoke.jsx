import React from 'react'
import Detalle from './Detalle'
import Stats from './Stats'

const DetallePoke = () => {
    return (
        <div>
             <h1>Detalle pokemon</h1>
             <hr />
             <button className="btn btn-dark">Volver</button>
            
            <Detalle />
            <Stats/>
        </div>
    )
}

export default DetallePoke

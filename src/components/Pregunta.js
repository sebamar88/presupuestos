import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types'

const Pregunta = ({setRestante, setPresupuesto, setPregunta}) => {
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)

    // Submit para definir presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return;
        }
        //Si pasa la validación
        setError(false);
        setPresupuesto(cantidad)
        setRestante(cantidad)  
        setPregunta(false)
        //Crear la Cita
        
        //Reiniciar el Form
        

    }

    return ( 
        <>
        <h2>Coloca tu presupuesto</h2>

        {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

        <form
        onSubmit={agregarPresupuesto}
        >
            <input 
                type="number"
                name="presupuesto"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={e => setCantidad( parseInt(e.target.value, 10) )}
            />
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
            />
            </form>
        </>
     );
}

Pregunta.propTypes = {
    setRestante: PropTypes.func.isRequired,
    setPresupuesto: PropTypes.func.isRequired,
    setPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;
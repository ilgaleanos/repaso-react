/*========================================================================
*   Esta es una vista de lo mas simple deberia tener simplemeente los 
*   Componentes que se pegan aquí como un lego y ya si más cosas, minimizar
*   la lógica lo máximo posible y el resto se le deja al css.
========================================================================*/

// ubico todas las funciones dentro de fn para mayor facilidad así todas las 
// demás las puedo pner alias foraneos pero se que fn son las de mi componente
import React, { useState } from 'react';
import { useEffect } from 'react';
import ServicioApi from '../utils/servicios/Servicio.Api'

import fn from './Logica.Red';


const VistaRed = (props) => {
    const { pagina } = props;
    const [datos, setDatos] = useState({});

    // porque 'once' no es necesario a pesar de que datos cambian y llaman render?
    useEffect(() => {
        fn.manejarDatos(setDatos, ServicioApi.get(pagina));
    }, [pagina]);


    return (
        <div className="vista-red">
            <h2> Datos que llegan  {JSON.stringify(datos)}</h2>
        </div>
    )
}

export default VistaRed;
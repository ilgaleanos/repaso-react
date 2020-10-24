/*========================================================================
*   Esta es una vista de lo mas simple deberia tener simplemeente los 
*   Componentes que se pegan aquí como un lego y ya si más cosas, minimizar
*   la lógica lo máximo posible y el resto se le deja al css.
========================================================================*/

import React, { useState } from 'react';
import { useEffect } from 'react';

import VistaLego from '../lego/Vista.Lego';
import VistaRed from '../red/Vista.Red';
import fn from './Logica.Integracion';

const VistaIntegracion = (props) => {

    const { store } = props;
    [store.contador, store.setContador] = useState(0);
    [store.tablero, store.setTablero] = useState(store.tablero);

    useEffect(() => {
        const once = () => {
            setInterval(() => {
                fn.agegoUno(store);
                console.log(store.contador);
            }, 3000)
        };
        once();
    }, [store]);



    return (
        <div className="vista-integracion">

            <VistaRed pagina={3} />

            <VistaLego intVista={1} store={store} />
            <VistaLego intVista={2} store={store} />

            <h2>Cambio cada 3 segundos: {store.contador}</h2>
        </div>
    )
};

export default VistaIntegracion;
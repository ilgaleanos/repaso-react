/*========================================================================
*   Esta es una vista de lo mas simple deberia tener simplemeente los 
*   Componentes que se pegan aquí como un lego y ya si más cosas, minimizar
*   la lógica lo máximo posible y el resto se le deja al css.
========================================================================*/

// ubico todas las funciones dentro de fn para mayor facilidad así todas las 
// demás las puedo pner alias foraneos pero se que fn son las de mi componente
import React, { useState } from 'react';
import { useEffect } from 'react';
import fn from './Logica.Lego';


const VistaLego = (props) => {
    const { store, intVista } = props;
    console.log(store.tablero);

    // fn.main(intVista);


    useEffect(() => {

        const once = () => {
            setInterval(() => {
                fn.ping_pong(store, intVista);
            }, 12000)
        };

        if (intVista == 1) {
            setTimeout(() => { once() }, 6000);
        } else {
            once();
        }
    }, [store, intVista]);


    // Esto falla al descomentarse, se debería leer porque...
    // fn.complejoLog(2);

    return (
        // todos los componentes 'piezas' deberian tener un envolvente div con una clase
        <div className="vista-lego">
            <h2> Hola soy la vista  {intVista} tipo lego -> {store.tablero}</h2>
        </div>
    )
}

export default VistaLego;
/*========================================================================
*   Este es un ejemplo de la implementacion de las funciones que deben
*   manipular la logica de las vistas, se agrupan en objetos, ya que se
*   pretenden usar funciones puras para poder ser importadas y usadas.
========================================================================*/

// Objeto con dos funciones auxiliares que se pueden usar en la vista
const LogicaLego = {


    // las funciones tipo => generan una alteración del contexto this
    main: function(intVista) {
        console.log('Montado componente Logica.Lego');
        this.simpleLog(intVista);
    },


    simpleLog: (intVista) => {
        console.log('Hola te saludo desde la vista lego: ' + intVista);
    },


    // https://derickbailey.com/2015/09/28/do-es6-arrow-functions-really-solve-this-in-javascript/
    // este componente no puede llamar a simple log
    desacoplado: () => {
        console.log('main de Logica.Lego');
        this.simpleLog(1);
    },

    ping_pong: (store, intVista) => {
        if (store.tablero === 'PING') {
            store.setTablero('PONG');
        } else {
            store.setTablero('PING');
        }
        console.log(`Fijado ${store.tablero} desde la vista ${intVista}`);
    }
}

export default LogicaLego;
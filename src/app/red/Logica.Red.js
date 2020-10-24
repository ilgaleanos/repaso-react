/*========================================================================
*   Este es un ejemplo de la implementacion de las funciones que deben
*   manipular la logica de las vistas, se agrupan en objetos, ya que se
*   pretenden usar funciones puras para poder ser importadas y usadas.
========================================================================*/

// Objeto con dos funciones auxiliares que se pueden usar en la vista
const LogicaRed = {


    manejarDatos(manejador, promesaGET) {
        promesaGET
            .then(response => {
                manejador(response.data)
            })
            .catch(err => console.error(err));
    }
}

export default LogicaRed;
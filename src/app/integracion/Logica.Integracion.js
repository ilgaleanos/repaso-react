/*========================================================================
*   Este es un ejemplo de la implementacion de las funciones que deben
*   manipular la logica de las vistas, se agrupan en objetos, ya que se
*   pretenden usar funciones puras para poder ser importadas y usadas.
========================================================================*/


// Objeto con dos funciones auxiliares que se pueden usar en la vista
const LogicaIntegacion = {


    // El nombre de las variables es muy, muy importante ya que nos ayuda
    // visualmente de primera mano a detectar posibles errores o anomalías
    // con solo dar un vistaso
    agegoUno: (store = {}) => {
        store.setContador(store.contador + 1);
        console.log('agegoUno', store.contador);
        return store.contador;
    },


    // el nombre de las funciones puede ser tan largo como sea conveniente
    // y que de una lectura ya este casi que documentada
    adicionoCeroAlosGerentres: (arrGerentes = []) => {
        console.log(arrGerentes.length);
        return arrGerentes.push(0);
    }
}

export default LogicaIntegacion;
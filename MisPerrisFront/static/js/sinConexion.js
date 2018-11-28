/****
 * Archivo: sinConexion.js
 * Caso de uso: Redirige a la pagina de aviso de trabajo sin conexion.
 * Alumno: Daniel Garcia.
 * ---------------------------------------------------------------------------------
 ****/


/****
 * Preparando el contenedor de los perritos rescatados.
 ****/
$(document).ready(function() {
    if (!navigator.onLine) {
        window.location.replace("http://localhost:8000/sinConexion/");
        console.log('weeena estas desconectado');
        return;
    }
    console.log('Holis!');;
});
/****
 * Archivo: erroresAjax.js
 * Caso de uso: Configuración para los errores de las peticiones con la funcion .ajax de jQuery.
 * Alumno: Daniel Garcia.
 * ---------------------------------------------------------------------------------
 ****/


$.ajaxSetup({
    error: function(jqXHR, textStatus, errorThrown) {
        if (jqXHR.status === 0) {
            cadenaError = 'El servidor no esta conectado, verifique la red.';
        } else if (jqXHR.status == 404) {
            cadenaError = 'La página solicitada no existe [404]';
        } else if (jqXHR.status == 500) {
            cadenaError = 'Error interno del servidor [500].';
        } else if (textStatus === 'parsererror') {
            cadenaError = 'Falló la coneversión del archivo json solicitado..';
        } else if (textStatus === 'timeout') {
            cadenaError = 'Tiempo de espera excedido.';
        } else if (textStatus === 'abort') {
            cadenaError = 'Petición Ajax fue cancelada.';
        } else {
            cadenaError = 'Error desconocido: ' + jqXHR.responseText;
        }
        $("#contenedorForm").empty();
        $("#contenedorForm").append('<h1>Error al cargar los datos.</h1>');
        $("#contenedorForm").append('<hr>');
        $("#contenedorForm").append('<p>Ha ocurrido el siguiente error al intentar cargar las mascotas [' + cadenaError + '], intente nuevamente o avise al administrador de Mis Perris.<br>Gracias!</p>');
    }

});
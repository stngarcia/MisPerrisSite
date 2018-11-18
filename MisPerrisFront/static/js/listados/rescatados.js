/****
 * Archivo: rescatados.js
 * Caso de uso: Lista de perritos rescatados.
 * Alumno: Daniel Garcia.
 * ---------------------------------------------------------------------------------
 ****/

/****
 * Preparando el contenedor de los perritos rescatados.
 ****/
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8001/api/v1/mascotas",
        type: "GET",
        dataType: "json",
        crossDomain : true,
        success: function(resultados) { listarRescatados(resultados) }
    });
});



function listarRescatados(datos) {
    $("#contenedorForm").empty();
    $("#contenedorForm").append('<h1>Lista de rescatados.</h1>');
    $("#contenedorForm").append('<hr>');
    if (datos.length == 0) {
        $("#contenedorForm").append('<p>No hay perritos ingresados, pulse el enlace [Agregar nueva mascota].</p>');
    }
};
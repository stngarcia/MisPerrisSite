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
        success: function(result) {
            $("#listaViviendas").append("viviendas");
            $.each(result, function(i, items) {
                $("#listaViviendas").append('<br>');
                $("#listaViviendas").append(result[i].calle + " " + result[i].numero);
                $("#listaViviendas").append('<br>');
            });
        }
    });
})
/****
 * Archivo: mascotas.js
 * Caso de uso: Manejo del formulario de registro de mascotas.
 * Alumno: Daniel Garcia.
 * ---------------------------------------------------------------------------------
 ****/

/****
 * Preparando el formulario al cargar la pagina de registro.
 ****/
$(document).ready(function() {
    $("input").val("");
    $("textarea").val("");
    $("#id_nombre").focus();
});


/****
 *  Validar el envio del formulario.
 ****/
$("#enviar").click(function() {
    // Enviando los datos a la api.
    $.ajax({
        url: "http://localhost:8001/api/v1/mascotas",
        type: "POST",
        data: $("#formularioRescatado").serialize(),
        crossDomain: true,
        success: function(resultados) { listarRescatados(resultados) }
    });
})


function listarRescatados(datos) {
    $("#contenedorForm").empty();
    $("#contenedorForm").append('<h1>Registro correcto.</h1>');
    $("#contenedorForm").append('<hr>');
    $("#contenedorForm").append('<p>La mascota fue registrad, pulse el enlace [Listo] para ir a la lista de mascotas rescatadas.</p><br><br>');
    var cadena = "'/{% url 'listarRescatados' %/}";
    $("#contenedorForm").append('<a href="' + cadena + '">Listo</a>');
};
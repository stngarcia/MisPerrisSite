/****
 * Archivo: login.js
 * Caso de uso: Manejo del formulario de login.
 * Alumno: Daniel Garcia.
 * ---------------------------------------------------------------------------------
 ****/

/****
 * Preparando el formulario al cargar la pagina de postulacion.
 ****/
$(document).ready(function() {
    $("input").val("");
    $("span").text("");
    $("span").hide();
    $("#nombreUsuario").focus();
});


/****
 * Validar el nombre usuario al perder el foco.
 *****/
$("#nombreUsuario").focusout(function() {
    verificarContenidoUsuario();
});


/****
 * Validar el password al perder el foco.
 *****/
$("#password").focusout(function() {
    verificarContenidoPassword();
});


/****
 * Validar el contenido del campo nombre usuario.
 ****/
function verificarContenidoUsuario() {
    if (campoVacio("#nombreUsuario", "#errorNombreUsuario", "El campo nombre de usuario no puede quedar vacio.")) return true;
    return false;
};


/****
 * Validar el contenido del campo password.
 ****/
function verificarContenidoPassword() {
    if (campoVacio("#password", "#errorPassword", "El campo nombrecontraseña no puede quedar vacio.")) return true;
    return false;
};
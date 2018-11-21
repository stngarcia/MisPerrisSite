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
        crossDomain: true,
        success: function(resultados) { listarRescatados(resultados) }
    });
});



function listarRescatados(datos) {
    $("#contenedorForm").empty();
    $("#contenedorForm").append('<h1>Lista de rescatados.</h1>');
    $("#contenedorForm").append('<hr>');
    if (datos.length == 0) {
        $("#contenedorForm").append('<p>No hay perritos ingresados.</p>');
        return;
    }
    // Construyendo el espacio de la lista de perritos.
    $.each(datos, function(i, items) {
        var idFila = 'fila' + datos[i].id + '_' + datos[i].nombre;
        var idItem = 'item' + datos[i].id + '_' + datos[i].nombre;
        var idTexto = 'texto' + datos[i].id + '_' + datos[i].nombre;
        var idEnlaces = 'enlace' + datos[i].id + '_' + datos[i].nombre;
        var idBoton = 'btn' + datos[i].id + '_' + datos[i].nombre;
        //contenedor de la fila del item
        $("#contenedorForm").append('<div id="' + idFila + '" class="contenedor-fila-lista">');
        idFila='#'+idFila;
        // Contenedor par el perrito en curso.
        $(idFila).append('<div id="'+ idItem+'" class="contenedor-item-lista">');
        idItem= '#' + idItem;
        // colocando la imagen.
        var idImg = datos[i].id + '_' + datos[i].nombre;
        $(idItem).append('<img id="' + idImg + '"src="" alt="">');
        idImg='#'+ idImg;
        $(idImg).attr('src',  datos[i].ruta_imagen);
        $(idImg).attr('alt', 'Imagen de ' + datos[i].nombre);

        // Colocando los datos del perrito.
        $(idItem).append('<p id="' + idTexto+'">');
        idTexto='#'+ idTexto;
        $(idTexto).append('<h5>Nombre: ' + datos[i].nombre + '</h5><br>');
        $(idTexto).append('Raza: ' + datos[i].raza + '<br>');
        if (datos[i].estado == 'r') $(idTexto).append('Estado: Rescatado<br>');
        if (datos[i].estado == 'd') $(idTexto).append('Estado: Disponible<br>');
        if (datos[i].estado == 'a') $(idTexto).append('Estado: Adoptado<br>');
        $(idTexto).append('Descripción: ' + datos[i].descripcion + '<br>');
        // Cerrando los contenedores de parrafos y los divs.
        $(idItem).append('</p><br>');
        $(idFila).append('</div>');
        $(idFila).append('<p id="'+ idEnlaces +'">');
        idEnlaces='#'+idEnlaces;
        $(idEnlaces).append('<button id="'+ idBoton  + '" value="' + datos[i].id + '">Ver</button>');
        $(idFila).append('</p>');


        // Colocar el enlace para visualizar datos de las mascota.
        $("#contenedorForm").append('</div>');
    });
};
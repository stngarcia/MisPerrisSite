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
        return;
    }
    // Construyendo el espacio de la lista de perritos.
    $.each(datos, function(i, items) {
        //contenedor de la fila del item
        $("#contenedorForm").append('<div id="contenedorFila" class="contenedor-fila-lista">');
        // Contenedor par el perrito en curso.
        $("#contenedorFila").append('<div id="contenedorItem" class="contenedor-item-lista">');
        // colocando la imagen.
        $("#contenedorItem").append('<img src="' + datos[i].ruta_imagen + '" alt="Imagen de ' + datos[i].nombre + '">');
        // Colocando los datos del perrito.
        $("#contenedorItem").append('<p id="texto">');
        $("#texto").append('<h5>Nombre: ' + datos[i].nombre + '</h5><br>' );
        $("#texto").append('Raza: ' + datos[i].raza+ '<br>' );
        if (datos[i].estado =='r') $("#texto").append('Estado: Rescatado<br>');
        if (datos[i].estado =='d') $("#texto").append('Estado: Disponible<br>');
        if (datos[i].estado =='a') $("#texto").append('Estado: Adoptado<br>');
        $("#texto").append('Descripción: ' + datos[i].descripcion+ '<br>' );
        // Cerrando los contenedores de parrafos y los divs.
        $("#contenedorItem").append('</p>');
        $("#contenedorFila").append('</div>');
        $("#contenedorForm").append('</div>');
    });
};
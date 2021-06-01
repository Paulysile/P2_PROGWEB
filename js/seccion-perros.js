
$(document).ready(function() {

    var nroTotalImagenes = 15;
    var nroColumnasPorFila = 5;
    var selectorTablaHTML = "#lista-perros"
    var url = "https://api.thedogapi.com/v1/images/search?limit="+nroTotalImagenes

    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Mostrar Información");
});

function getBtnActionURL() {
    return "https://api.thedogapi.com/v1/images/search?limit=1";
}



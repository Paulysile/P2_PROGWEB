
$(document).ready(function() {

    var nroTotalImagenes = 15;
    var nroColumnasPorFila = 5;
    var selectorTablaHTML = "#lista-gatos"
    var url = "https://api.thecatapi.com/v1/images/search?limit="+nroTotalImagenes

    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Mostrar Informacion");
});

function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
}
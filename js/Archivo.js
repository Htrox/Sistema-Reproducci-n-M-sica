function mostrarSubirArchivo() {
    document.getElementById('ventanaArchivo').style.display = 'block';
}
function ocultarSubirArchivo() {
    document.getElementById('ventanaArchivo').style.display = 'none';

    Lista = JSON.parse(localStorage.getItem("Lista")) || [];
    paginación(2)
}
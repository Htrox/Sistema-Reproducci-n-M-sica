function mostrarSubirArchivo() {
    document.getElementById('alertaArchivo').style.display = 'block';
}
function ocultarSubirArchivo() {
    document.getElementById('alertaArchivo').style.display = 'none';

    Lista = JSON.parse(localStorage.getItem("Lista")) || [];
    paginación(2)
}
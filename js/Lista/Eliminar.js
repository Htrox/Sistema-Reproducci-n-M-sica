function MostrarEliminarLista(i) {
    document.getElementById('ventanaEliminarLista').style.display = 'block';
    document.getElementById('btnEliminarLista').setAttribute("onclick", "EliminarLista(" + i + ")");
}

function EliminarLista(i) {
    Lista_Musica.Guardado.splice(i, 1);
    localStorage.setItem('Lista_Musica_Guardado', JSON.stringify(Lista_Musica.Guardado))
    MostrarLista()
    document.getElementById('ventanaEliminarLista').style.display = 'none';
}

function CancelarEliminarLista() {
    document.getElementById('ventanaEliminarLista').style.display = 'none';
}
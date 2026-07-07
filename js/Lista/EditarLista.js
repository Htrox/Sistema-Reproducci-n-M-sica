function EditarLista(i) {
    ListaEditar()
    DatosEditarLista(i)
}

function ListaEditar() {
    document.getElementById('ListaCreadas').style.display = 'none';
    
    document.getElementById('divEditarBuscador').style.display = 'block';
    document.getElementById('EditarLista').style.display = 'block';

    document.getElementById('tituloListaEditar').value = '';
    document.getElementById('CancionAñadidaEditar').innerHTML = '';
}

function DatosEditarLista(i) {

    document.getElementById('tituloListaEditar').value = Lista_Musica.Guardado[i].Titulo
    document.getElementById('GuardarEditarLista').setAttribute('onclick', 'GuardarListaEditada(' + i + ')')

    const MaxLoop = Lista_Musica.Guardado[i].Nombre.length-1;
    for (let y = 0; y <= MaxLoop; y++) {
        document.getElementById('CancionAñadidaEditar').innerHTML += "<div class=\"divSpaceBetween, divBordesGrandes\"><span class=\"nombreLista\">" + Lista_Musica.Guardado[i].Nombre[y] + "</span><div class=\"divBordes\"><button class=\"CuboBlanco\" onclick=\"EliminarCancion(" + y  + ", 'Editar')\">🗑</button>" + "<div><button class=\"CuboBlanco\" onclick=\"SubirBajarCancionLista('subir', " + y + ", 'Editar')\">▲</button>" + "<button class=\"CuboBlanco\" onclick=\"SubirBajarCancionLista('bajar', " + y + ", 'Editar')\">▼</button></div></div></div>";

        Lista_Musica.Nuevo.Nombre.push(Lista_Musica.Guardado[i].Nombre[y]);
    }
}

// Función para cancelar el editar la lista y volver a la vista de listas creadas
function CancelarEditarLista() {
    Lista_Musica.Nuevo = {Titulo: "", Nombre: [], Numero: [],};
    document.getElementById('divEditarBuscador').style.display = 'none';
    document.getElementById('EditarLista').style.display = 'none';
    document.getElementById('ListaCreadas').style.display = 'block';
}

// Función para guardar la lista editada
function GuardarListaEditada(i) {
    Lista_Musica.Nuevo.Titulo = document.getElementById('tituloListaEditar').value;
    if (Lista_Musica.Nuevo.Nombre.length != 0 && Lista_Musica.Nuevo.Titulo != '') {
        Lista_Musica.Guardado[i] = {
            Titulo: Lista_Musica.Nuevo.Titulo,
            Nombre: Lista_Musica.Nuevo.Nombre,
            Numero: [],
        };
        CancelarEditarLista()
    } else {
        if (Lista_Musica.Nuevo.Titulo == '') {
            document.getElementById('errorListaEditar').innerText = 'Error: El título no puede estar vacío.';
        } else {
            document.getElementById('errorListaEditar').innerText = 'Error: Debes añadir al menos una canción.';
        };
    }

    OrdenarGuardadoLista()
    localStorage.setItem('Lista_Musica_Guardado', JSON.stringify(Lista_Musica.Guardado))
    MostrarLista()
}
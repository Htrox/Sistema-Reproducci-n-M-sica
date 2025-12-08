Lista_Musica = {
    Cargar: {
        Titulo: "",
        Nombre: [],
        Numero: [],
    },
    Nuevo: {
        Titulo: "",
        Nombre: [],
        Numero: [],
    },
    Guardado: [],
}

function mostrarCrearLista() {
    document.getElementById('alertaCrearLista').style.display = 'block';
}
function ocultarCrearLista() {
    document.getElementById('alertaCrearLista').style.display = 'none';
}



function NuevaLista() {
    Lista_Musica.Nuevo = {Titulo: "", Nombre: [], Numero: [],};
    document.getElementById('ListaCreadas').style.display = 'none';
    document.getElementById('divBuscador').style.display = 'block';
    document.getElementById('CrearLista').style.display = 'block';

    document.getElementById('tituloLista').value = '';
    document.getElementById('CancionAñadida').innerHTML = '';
}
function CancelarNuevaLista() {
    document.getElementById('ListaCreadas').style.display = 'block';
    document.getElementById('divBuscador').style.display = 'none';
    document.getElementById('CrearLista').style.display = 'none';
}


function AñadirCancion(i) {
    Lista_Musica.Nuevo.Nombre.push(Lista[i].nombre);

    document.getElementById('CancionAñadida').innerHTML = '';

    for (let y = 0; y < Lista_Musica.Nuevo.Nombre.length; y++) {
        document.getElementById('CancionAñadida').innerHTML += '<div class="divSpaceBetween">' + 
        Lista_Musica.Nuevo.Nombre[y] + '<button class="" onclick="EliminarCancion(' + y + ')">🗑</button>' + '</div>';
    }
}
function EliminarCancion(i) {
    Lista_Musica.Nuevo.Nombre.splice(i, 1);
    document.getElementById('CancionAñadida').innerHTML = '';

    for (let y = 0; y < Lista_Musica.Nuevo.Nombre.length; y++) {
        document.getElementById('CancionAñadida').innerHTML += '<div class="divSpaceBetween">' + Lista_Musica.Nuevo.Nombre[y] + 
        '<button class="" onclick="EliminarCancion(' + y + ')">🗑</button>' + '</div>';
    }
}
function GuardarLista(i) {
    switch (btn_Lista.Editar) {
        case "off":
            Lista_Musica.Nuevo.Titulo = document.getElementById('tituloLista').value;
            if (Lista_Musica.Nuevo.Nombre.length != 0 && Lista_Musica.Nuevo.Titulo != '') {
                Lista_Musica.Guardado.push({
                    Titulo: Lista_Musica.Nuevo.Titulo,
                    Nombre: Lista_Musica.Nuevo.Nombre,
                });
                CancelarNuevaLista();
                MostrarLista();
            } else {
                if (Lista_Musica.Nuevo.Titulo == '') {
                    document.getElementById('errorLista').innerText = 'Error: El título no puede estar vacío.';
                } else {
                    document.getElementById('errorLista').innerText = 'Error: Debes añadir al menos una canción.';
                };
            }
            break;
        case "on":
            Lista_Musica.Guardado[i] = {
                Titulo: Lista_Musica.Nuevo.Titulo,
                Nombre: Lista_Musica.Nuevo.Nombre,
            }
            Lista_Musica.Guardado[i].Titulo = document.getElementById('tituloLista').value
            break
    }
}

function MostrarLista() {
    document.getElementById('ListasCreada').innerHTML = '';
    for (let i = 0; i < Lista_Musica.Guardado.length; i++) {
        document.getElementById('ListasCreada').innerHTML += '<div class="divSpaceBetween">' + 
        '<button onclick="CargarMusicaLista(' + i + ')">' + Lista_Musica.Guardado[i].Titulo + '</button>' + 
        '<div><button onclick="EliminarLista(' + i + ')">🗑</button>' + 
        '<button onclick="EditarLista(' + i + ')">⚙︎</button>' + '</div></div>'
    }
}

function CargarMusicaLista(i) {
    Lista_Musica.Cargar.Titulo = Lista_Musica.Guardado[i].Titulo;
    Lista_Musica.Cargar.Nombre = Lista_Musica.Guardado[i].Nombre;

    CargarNumeroLista();

    console.log(Lista_Musica.Cargar);
}

function CargarNumeroLista() {
    Lista_Musica.Cargar.Numero = [];
    for (let i = 0; i < Lista_Musica.Cargar.Nombre.length; i++) {
        for (let y = 0; y < Lista.length; y++) {
            if (Lista_Musica.Cargar.Nombre[i] === Lista[y].nombre) {
                Lista_Musica.Cargar.Numero.push(y);
            } else {
                Lista_Musica.Cargar.Numero.push("Error")
            }
        }
        console.log(Lista_Musica.Cargar.Nombre)
    }
}

function EditarLista(i) {
    NuevaLista();
    DatosEditarLista(i);
}

function DatosEditarLista(i) {

    for (let y = 0; y <= Lista.Guardado[i].Nombre.length; y++) {

    }
}
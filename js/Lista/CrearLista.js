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

if (localStorage.getItem('Lista_Musica_Guardado') === null) {
    console.log("NO HAY CONTENIDO GUARDADO")
} else {
    Lista_Musica.Guardado = JSON.parse(localStorage.getItem('Lista_Musica_Guardado'))
}


function mostrarCrearLista() {
    document.getElementById('alertaCrearLista').style.display = 'block';
    MostrarLista()
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
        Lista_Musica.Nuevo.Nombre[y] + '<button class="CuboBlanco" onclick="EliminarCancion(' + y + ')">🗑</button>' + '</div>';
    }
}
function EliminarCancion(i) {
    Lista_Musica.Nuevo.Nombre.splice(i, 1);
    document.getElementById('CancionAñadida').innerHTML = '';

    for (let y = 0; y < Lista_Musica.Nuevo.Nombre.length; y++) {
        document.getElementById('CancionAñadida').innerHTML += '<div class="divSpaceBetween">' + Lista_Musica.Nuevo.Nombre[y] + 
        '<button class="CuboBlanco" onclick="EliminarCancion(' + y + ')">🗑</button>' + '</div>';
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
                CancelarNuevaLista()
            } else {
                if (Lista_Musica.Nuevo.Titulo == '') {
                    document.getElementById('errorLista').innerText = 'Error: El título no puede estar vacío.';
                } else {
                    document.getElementById('errorLista').innerText = 'Error: Debes añadir al menos una canción.';
                };
            }

            OrdenarGuardadoLista()
            localStorage.setItem('Lista_Musica_Guardado', JSON.stringify(Lista_Musica.Guardado))
            MostrarLista()
            break;
        case "on":
            Lista_Musica.Guardado[i] = {
                Titulo: Lista_Musica.Nuevo.Titulo,
                Nombre: Lista_Musica.Nuevo.Nombre,
            }
            Lista_Musica.Guardado[i].Titulo = document.getElementById('tituloLista').value
            
            OrdenarGuardadoLista()
            localStorage.setItem('Lista_Musica_Guardado', JSON.stringify(Lista_Musica.Guardado))
            break;
    }
}

function OrdenarGuardadoLista() {
    Lista_Musica.Guardado.sort((a, b) => {
        // Comparamos los títulos de las canciones de forma alfabética
        if (a.Titulo.toLowerCase() < b.Titulo.toLowerCase()) {
            return -1; // Si "a.Titulo" es alfabéticamente menor que "b.Titulo", "a" viene antes
        } else if (a.Titulo.toLowerCase() > b.Titulo.toLowerCase()) {
            return 1; // Si "a.Titulo" es alfabéticamente mayor que "b.Titulo", "b" viene antes
        } else {
            return 0; // Si ambos títulos son iguales, no hay cambio
        }
    });
}

function MostrarLista() {
    document.getElementById('ListasCreada').innerHTML = '';
    for (let i = 0; i < Lista_Musica.Guardado.length; i++) {
        document.getElementById('ListasCreada').innerHTML += '<div class="divSpaceBetween">' + 
        '<button class="CuboBlancoLista" onclick="CargarMusicaLista(' + i + ')">' + Lista_Musica.Guardado[i].Titulo + '</button>' + 
        '<div><button class="CuboBlanco" onclick="EliminarLista(' + i + ')">🗑</button>' + 
        '<button class="CuboBlanco" onclick="ObservarLista(' + i + ')">👁️</button>' +
        '<button class="CuboBlanco" onclick="EditarLista(' + i + ')">⚙︎</button>' + '</div></div>'
    }
}

function CargarMusicaLista(i) {
    Lista_Musica.Cargar.Titulo = Lista_Musica.Guardado[i].Titulo;
    Lista_Musica.Cargar.Nombre = Lista_Musica.Guardado[i].Nombre;

    CargarNumeroLista()

    btn_Lista.Pag = 1
    btn_Lista.Min = 0
    btn_Lista.Max = 20
}

function CargarNumeroLista() {
    Lista_Musica.Cargar.Numero = [];
    for (let i = 0; i < Lista_Musica.Cargar.Nombre.length; i++) {
        for (let y = 0; y < Lista.length; y++) {
            if (Lista_Musica.Cargar.Nombre[i] === Lista[y].nombre) {
                Lista_Musica.Cargar.Numero.push(y);
            }
        }
    }

    MostrarCancionLista()
    ocultarCrearLista()

    actualizarBotonesLista()
}

function EditarLista(i) {
    NuevaLista()
    DatosEditarLista(i)
}

function DatosEditarLista(i) {

    document.getElementById('tituloLista').value =Lista_Musica.Guardado[i].Titulo

    for (let y = 0; y <= Lista_Musica.Guardado[i].Nombre.length-1; y++) {
        document.getElementById('CancionAñadida').innerHTML += '<div class="divSpaceBetween">' + Lista_Musica.Guardado[i].Nombre[y] +
            '<button class="CuboBlanco" onclick="EliminarCancion(' + y + ')">🗑</button>' + '</div>';
        Lista_Musica.Nuevo.Nombre.push(Lista_Musica.Guardado[i].Nombre[y]);
    }
}

function MostrarCancionLista() {
    document.getElementById('containerAudio').style.display = "none"
    document.getElementById('div_ocultar').style.display = "block"
    document.getElementById('btnLista').style.display = "block"
    document.getElementById('btnBusqueda').style.display = "none"

    btnLista.ENLISTA = "on"

    btn_Lista.Play = "on";
    audioPlay()

    btnLista.Maximo = Math.ceil(Lista_Musica.Cargar.Numero.length / 20) * 20
}
function OcultarCancionLista() {
    document.getElementById('containerAudio').style.display = "flex"
    document.getElementById('div_ocultar').style.display = "none"
    document.getElementById('btnLista').style.display = "none"
    document.getElementById('btnBusqueda').style.display = "block"

    btnLista.ENLISTA = "off"

    btnLista.Play = "on";
    audioPlayLista()
}

function EliminarLista(i) {
    Lista_Musica.Guardado.splice(i, 1);
    localStorage.setItem('Lista_Musica_Guardado', JSON.stringify(Lista_Musica.Guardado))
    MostrarLista()
}

function ObservarLista(i) {
    document.getElementById('ListaCreadas').style.display = "none"
    document.getElementById('MostrarLista').style.display = "block"

    document.getElementById('MostrarTituloLista').innerHTML = Lista_Musica.Guardado[i].Titulo

    document.getElementById('MostrarMusica').innerHTML = ""

    for (let y = 0; y <= Lista_Musica.Guardado[i].Nombre.length-1; y++) {
        document.getElementById('MostrarMusica').innerHTML += Lista_Musica.Guardado[i].Nombre[y] + '<br>';
    }
}

function CerrarObservarLista() {
    document.getElementById('ListaCreadas').style.display = "block"
    document.getElementById('MostrarLista').style.display = "none"
}
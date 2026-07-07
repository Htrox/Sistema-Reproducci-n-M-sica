Lista_Musica = {
    Cargar: {Titulo: "",Nombre: [],Numero: [],},
    Nuevo: {Titulo: "",Nombre: [],Numero: [],},
    Guardado: [],
    Temporal: {Nombre: [],Numero: [],}
}

if (localStorage.getItem('Lista_Musica_Guardado') !== null) {
    Lista_Musica.Guardado = JSON.parse(localStorage.getItem('Lista_Musica_Guardado'))
}


function mostrarCrearLista() {
    document.getElementById('ventanaCrearLista').style.display = 'block';

    MostrarLista()
}
function ocultarCrearLista() {
    document.getElementById('ventanaCrearLista').style.display = 'none';
}



// Función para crear una nueva lista
function NuevaLista() {
    Lista_Musica.Nuevo = {Titulo: "", Nombre: [], Numero: [],};
    document.getElementById('ListaCreadas').style.display = 'none';

    document.getElementById('divBuscador').style.display = 'block';
    document.getElementById('CrearLista').style.display = 'block';

    document.getElementById('tituloLista').value = '';
    document.getElementById('CancionAñadida').innerHTML = '';
}
// Función para cancelar la creación de una nueva lista
function CancelarNuevaLista() {
    document.getElementById('ListaCreadas').style.display = 'block';
    document.getElementById('divBuscador').style.display = 'none';
    document.getElementById('CrearLista').style.display = 'none';
}


function AñadirCancion(i, Lugar) {
    Lista_Musica.Nuevo.Nombre.push(Lista[i].nombre);

    MostrarCanciones(Lugar)
}
function EliminarCancion(i, Lugar) {
    Lista_Musica.Nuevo.Nombre.splice(i, 1);

    MostrarCanciones(Lugar)
}
function GuardarLista() {
    Lista_Musica.Nuevo.Titulo = document.getElementById('tituloLista').value;
    if (Lista_Musica.Nuevo.Nombre.length != 0 && Lista_Musica.Nuevo.Titulo != '') {
        Lista_Musica.Guardado.push({
            Titulo: Lista_Musica.Nuevo.Titulo,
            Nombre: Lista_Musica.Nuevo.Nombre,
        });
        CancelarNuevaLista()
    } else {
        if (Lista_Musica.Nuevo.Titulo == '') {
            document.getElementById('errorLista').innerText = 'ERROR: El título no puede estar vacío.';
        } else {
            document.getElementById('errorLista').innerText = 'ERROR: Debes añadir al menos una canción.';
        };
    }

    OrdenarGuardadoLista()

    localStorage.setItem('Lista_Musica_Guardado', JSON.stringify(Lista_Musica.Guardado))

    Lista_Musica.Nuevo = {Titulo: "", Nombre: [], Numero: [],};

    MostrarLista()
}

function OrdenarGuardadoLista() {
    Lista_Musica.Guardado.sort((a, b) => {
        return a.Titulo.localeCompare(
            b.Titulo,
            'es', // Idioma español
            { sensitivity: 'base' } 
        );
    });
}

let BTN_Lista = ['BotonLista_ReproducirLista', 'BotonLista_BorrarLista', 'BotonLista_VerLista', 'BotonLista_ConfigurarLista'];;
let funcionOnClick = "CargarMusicaLista";
function MostrarLista() {
    const ListaCreadas = document.getElementById('ListasCreada');
    ListaCreadas.innerHTML = '';

    const MaxLoop = Lista_Musica.Guardado.length - 1;
    for (let i = 0; i <= MaxLoop; i++) {
        ListaCreadas.innerHTML += "<button class='" + BTN_Lista[0] + "' id='BotonListaReproduccion_" + i + "' onclick=' " + funcionOnClick + "(" + i + ")'>" + Lista_Musica.Guardado[i].Titulo + "</button>"
    }
}

function CargarMusicaLista(i) {
    Lista_Musica.Cargar.Titulo = Lista_Musica.Guardado[i].Titulo;
    Lista_Musica.Cargar.Nombre = Lista_Musica.Guardado[i].Nombre;

    const totalPaginas = Math.ceil(Lista_Musica.Cargar.Nombre.length / 20);
    if (btnLista.N_Cancion > (Lista_Musica.Cargar.Nombre.length - 1)) {
        btnLista.N_Cancion = Lista_Musica.Cargar.Nombre.length - 1;
        BuscarPaginaCancionLista();
    } else if (btnLista.Pag >= totalPaginas && btnLista.Pag !== 0) {
        btnLista.Pag = totalPaginas - 1;
        BuscarPaginaCancionLista();
    }

    CargarNumeroLista()
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

function MostrarCancionLista() {
    document.getElementById('containerAudio').style.display = 'none';
    document.getElementById('div_ocultar').style.display = 'block';
    document.getElementById('btnLista').style.display = 'block';
    document.getElementById('btnBusqueda').style.display = 'none';

    btnLista.ENLISTA = 'on';

    btn_Lista.Play = 'on';
    audioPlay()

    btnLista.Maximo = Math.ceil(Lista_Musica.Cargar.Numero.length / 20) * 20
}
function OcultarCancionLista() {
    document.getElementById('containerAudio').style.display = 'flex';
    document.getElementById('div_ocultar').style.display = 'none';
    document.getElementById('btnLista').style.display = 'none';
    document.getElementById('btnBusqueda').style.display = 'block';

    btnLista.ENLISTA = 'off';

    btnLista.Play = 'on';
    audioPlayLista()
}

function ObservarLista(i) {
    document.getElementById('ListaCreadas').style.display = 'none';

    document.getElementById('MostrarLista').style.display = 'block';

    document.getElementById('MostrarTituloLista').innerHTML = Lista_Musica.Guardado[i].Titulo

    document.getElementById('MostrarMusica').innerHTML = '';

    const MaxLoop = Lista_Musica.Guardado[i].Nombre.length - 1;
    for (let y = 0; y <= MaxLoop; y++) {
        document.getElementById('MostrarMusica').innerHTML += '<div class="div_NombresListas">' + Lista_Musica.Guardado[i].Nombre[y] + '</div>';
    }
}

function CerrarObservarLista() {
    document.getElementById('ListaCreadas').style.display = 'block';
    document.getElementById('MostrarLista').style.display = 'none';
}

// Función para subir o bajar una canción en la lista
function SubirBajarCancionLista(direccion, i, Lugar) {
    switch (direccion) {
        case "subir":
            if (i > 0) {
                [Lista_Musica.Nuevo.Nombre[i], Lista_Musica.Nuevo.Nombre[i - 1]] =
                [Lista_Musica.Nuevo.Nombre[i - 1], Lista_Musica.Nuevo.Nombre[i]];
                i--;
            }
        break;
        case "bajar":
            if (i < Lista_Musica.Nuevo.Nombre.length - 1) {
                [Lista_Musica.Nuevo.Nombre[i], Lista_Musica.Nuevo.Nombre[i + 1]] =
                [Lista_Musica.Nuevo.Nombre[i + 1], Lista_Musica.Nuevo.Nombre[i]];
                i++;
            }
        break;
    }

    MostrarCanciones(Lugar)
}

// Función para mostrar las canciones de la lista en el orden correcto
function MostrarCanciones(Lugar) {
    if (Lugar === "Crear" || Lugar === "Editar" || Lugar === "Temporal") {
        Lugar = BuscarLugar(Lugar);
    }

    Lugar.innerHTML = '';

    let Lugar2 = "";
    switch (Lugar.id) {
        case "CancionAñadida":
            Lugar2 = "Crear"
            break;
        case "CancionAñadidaEditar":
            Lugar2 = "Editar"
            break;
    }

    const MaxLoop = Lista_Musica.Nuevo.Nombre.length - 1;
    for (let y = 0; y <= MaxLoop; y++) {
        Lugar.innerHTML += '<div class="divSpaceBetween, divBordesGrandes"><span class="nombreLista">' + Lista_Musica.Nuevo.Nombre[y] + '</span><div class="divBordes"><button class="CuboBlanco" onclick="EliminarCancion(' + y + ', \'' + Lugar2 + '\')">🗑</button>' + '<div><button class="CuboBlanco" onclick="SubirBajarCancionLista(\'subir\', ' + y + ', \'' + Lugar2 + '\')">▲</button>' + '<button class="CuboBlanco" onclick="SubirBajarCancionLista(\'bajar\', ' + y + ', \'' + Lugar2 + '\')">▼</button></div></div></div>';
    }
}

function BorrarLista(i) {
    Lista_Musica.Nuevo.Nombre = []

    switch (i) {
        case 0:
            MostrarCanciones()
        break;
        case 1:
            MostrarCancionesTemporal()
        break;
    }
}

function AleatorioLista() {
    const cal = Math.floor(Math.random() * Lista_Musica.Guardado.length);
    CargarMusicaLista(cal);
}

function BuscarLista() {
    document.getElementById('ListaCreadas').style.display = 'none';
}

function OrdenarCanciónLista(a, b) {
    if (a === undefined) {
        switch (b) {
            case "Crear":
                a = document.getElementById('ordenarListaCrear').value;
            break;
            case "Editar":
                a = document.getElementById('ordenarListaEditar').value;
            break;
        }
    }

    // Ordenar alfabéticamente las canciones en la lista
    switch (a) {
        case "A-Z":
            OrdenarLista_AZ()
            break;
        case "Z-A":
            OrdenarLista_ZA()
            break;
        case "⤨":
            Lista_Musica.Nuevo.Nombre.sort(() => Math.random() - 0.5);
            break;
        case "Invertir":
            Lista_Musica.Nuevo.Nombre.reverse()
            break;
    }

    var Lugar = BuscarLugar(b);

    MostrarCanciones(Lugar)
}

// Buscar lugar
function BuscarLugar(b) {
    switch (b) {
        case "Crear":
            return document.getElementById('CancionAñadida');
        case "Editar":
            return document.getElementById('CancionAñadidaEditar');
        case "Temporal":
            return document.getElementById('CancionAñadidaTemporal');
    }
}

// Funciones para ordenar las canciones de la lista alfabéticamente
function OrdenarLista_AZ() { //Ordnar de la A la Z
    return Lista_Musica.Nuevo.Nombre.sort((a, b) =>
        a.localeCompare(b)
    );
}
function OrdenarLista_ZA() { //Ordnar de la Z a la A
    return Lista_Musica.Nuevo.Nombre.sort((a, b) =>
        b.localeCompare(a)
    );
}
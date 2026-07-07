Historial = []

if (localStorage.getItem('HistorialMusica') !== null) {
    Historial = JSON.parse(localStorage.getItem('HistorialMusica'))
}

function mostrarHistorial() {
    document.getElementById('ventanaHistorial').style.display = 'block';
    CargarHistorial();
}
function ocultarHistorial() {
    document.getElementById('ventanaHistorial').style.display = 'none';
}

function CargarHistorial() {
    const listaHistorial = document.getElementById('listaHistorial');
    listaHistorial.innerHTML = '';

    for (i = Historial.length - 1; i >= 0; i--) {
        var canción = 0
        for (let y = 0; y < Lista.length; y++) {
            if (Historial[i] === Lista[y].nombre) {
                var canción = y
            }
        }
        listaHistorial.innerHTML += '<button class="btn_musica2" onclick="reproducirAudioHistorial(' + canción + ')">' + Historial[i] + '</button>';
    }
}

function AgregarAlHistorial(cancion) {
    // Buscar si ya existe la canción
    const index = Historial.indexOf(cancion);

    // Si existe, eliminar la versión antigua
    if (index !== -1) {
        Historial.splice(index, 1);
    }

    // Añadir al inicio
    Historial.push(cancion);

    // Limitar de elementos
    if ((Lista.length/10) > 20) {
        if (Historial.length > Math.ceil(Lista.length/10)) {
            Historial.shift();
        }
    } else {
        if (Historial.length > 20) {
            Historial.shift();
        }
    }

    // Guardar en localStorage
    localStorage.setItem('HistorialMusica', JSON.stringify(Historial));
    CargarHistorial();
}

function BorrarHistorial() {
    Historial = [];
    localStorage.removeItem('HistorialMusica');
    document.getElementById('listaHistorial').innerHTML = '';
}

function reproducirAudioHistorial(i) {
    if (btnLista.ENLISTA === "off") {
        if (btn_Lista.N_Cancion === i) {return}
        document.getElementById('Barra').style.width = "0%";

        const audioElement = document.getElementById('audio');
        audioElement.src = "C:\\Users\\hugol\\Music\\" + Lista[i].src;

        audioElement.play();
        document.getElementById('tituloAudio').innerText = Lista[i].nombre;
        AgregarAlHistorial(Lista[i].nombre);

        btn_Lista.Play = "on";

        btn_Lista.N_Cancion = i
        BuscarPaginaCancion()

        if (btn_Lista.N_Cancion >= btn_Lista.Min && btn_Lista.N_Cancion < btn_Lista.Max) {
            colorearButton(i)
        }
    }
}

function mostrarBorrarHistorial() {
    document.getElementById('ventanaBorrarHistorial').style.display = 'block';
}
function ocultarBorrarHistorial() {
    document.getElementById('ventanaBorrarHistorial').style.display = 'none';
}
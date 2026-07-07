btnLista = {
    Min: 0,
    Max: 20,
    Maximo: 0,

    Pag: 1,

    Bucle: false,
    Play: "off",
    Siguiente: false,
    SiguienteBucle: false,

    ENLISTA: "off",

    N_Cancion: null,
}



function actualizarBotonesLista() {
    document.getElementById('btn_botonesLista').innerHTML = '';
    for (let i = btnLista.Min; i < btnLista.Max && i < btnLista.Maximo; i++) {
        if (i >= Lista_Musica.Cargar.Nombre.length) break;
        document.getElementById('btn_botonesLista').innerHTML += '<button onclick="reproducirAudioLista(' + [i] + ')" class="btn_musica" id="cancionLista_' + i + '">' + Lista_Musica.Cargar.Nombre[i] + '</button>'
    }

    if (btnLista.N_Cancion >= btnLista.Min && btnLista.N_Cancion < btnLista.Max) {
        colorearButtonLista(btnLista.N_Cancion)
    }
}

function reproducirAudioLista(i, y) {
    if (btnLista.ENLISTA === "on") {
        ColocarTítulo = document.getElementById('tituloAudioLista')
        if (btnLista.N_Cancion === i && y === undefined && Lista_Musica.Cargar.Nombre[i] === ColocarTítulo.innerText) {return}
        Título = Lista_Musica.Cargar.Nombre[i] || Lista[Lista_Musica.Cargar.Numero[i]].src;
        document.getElementById('BarraLista').style.width = "0%";

        const audioElement = document.getElementById('audioLista');
        audioElement.src = Preferencias.Dirección + Lista[Lista_Musica.Cargar.Numero[i]].src;

        audioElement.play();
        ColocarTítulo.innerText = Título;

        btnLista.Play = "on";

        btnLista.N_Cancion = i

        if (btnLista.N_Cancion >= btnLista.Min && btnLista.N_Cancion < btnLista.Max) {
            colorearButtonLista(i)
        }
    }
}

function colorearButtonLista(i) {
    for (let y = btnLista.Min; y < btnLista.Max && y < btnLista.Maximo; y++) {
        if (y >= Lista_Musica.Cargar.Nombre.length) break; // Esto evita errores si hay menos canciones que el maximo
        document.getElementById("cancionLista_" + y).className = "btn_musica";
    }

    if (i != null) {
        document.getElementById('cancionLista_'+i).className = "btn_musica_black";
    }
}
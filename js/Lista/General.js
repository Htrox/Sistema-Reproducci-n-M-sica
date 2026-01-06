btnLista = {
    Min: 0,
    Max: 20,
    Maximo: 0,

    Pag: 1,

    Bucle: "off",
    Play: "on",
    Siguiente: "off",

    ENLISTA: "off",

    N_Cancion: 0,
}

function actualizarBotonesLista() {
    document.getElementById('btn_botonesLista').innerHTML = "";
    for (let i = btnLista.Min; i < btnLista.Max && i < btnLista.Maximo; i++) {
        if (i >= Lista_Musica.Cargar.Nombre.length) break;
        document.getElementById('btn_botonesLista').innerHTML += '<button onclick="reproducirAudioLista(' + [i] + ')" class="btn_musica" id="cancionLista_' + i + '">' + Lista_Musica.Cargar.Nombre[i] + '</button>'
    }

    if (btnLista.N_Cancion >= btnLista.Min && btnLista.N_Cancion < btnLista.Max) {
        colorearButtonLista(btnLista.N_Cancion)
    }
}

function reproducirAudioLista(i) {
    const audioElement = document.getElementById('audioLista');
    audioElement.src = Lista[Lista_Musica.Cargar.Numero[i]].src;

    if (btnLista.Bucle === "on") {
        audioElement.loop = true;
    }

    audioElement.play();
    document.getElementById('tituloAudioLista').innerText = Lista_Musica.Cargar.Nombre[i];

    document.getElementById('btn_PlayLista').innerText = "❙❙";
    btnLista.Play = "on";

    btnLista.N_Cancion = i

    if (btnLista.N_Cancion >= btnLista.Min && btnLista.N_Cancion < btnLista.Max) {
        colorearButtonLista(i)
    }
}

function colorearButtonLista(i) {
    for (let y = btnLista.Min; y < btnLista.Max && y < btnLista.Maximo; y++) {
        if (y >= Lista_Musica.Cargar.Nombre.length) break; // Esto evita errores si hay menos canciones que el maximo
        document.getElementById("cancionLista_" + y).style = "background-color: white; color: black;";
    }

    document.getElementById('cancionLista_'+i).style = "background-color: black; color: white;";
}
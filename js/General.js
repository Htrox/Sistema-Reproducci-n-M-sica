btn_Lista = {
    Min: 0,
    Max: 20,
    Maximo: Math.ceil(Lista.length / 20) * 20,

    Pag: 1,

    Bucle: false,
    Play: "off",
    Siguiente: false,
    SiguienteBucle: false,

    Editar: "off",

    N_Cancion: null,
}
Variables_Extras = {
    Otro_1: [],
}



function actualizarBotones() {
    document.getElementById('btn_botones').innerHTML = '';
    for (let i = btn_Lista.Min; i < btn_Lista.Max && i < btn_Lista.Maximo; i++) {
        if (i >= Lista.length) break;
        document.getElementById('btn_botones').innerHTML += '<button onclick="reproducirAudio(' + i + ')" class="btn_musica" id="cancion_' + i + '">' + Lista[i].nombre + '</button>'
    }

    if (btn_Lista.N_Cancion >= btn_Lista.Min && btn_Lista.N_Cancion < btn_Lista.Max) {
        colorearButton(btn_Lista.N_Cancion)
    }
}

actualizarBotones()

function reproducirAudio(i, y) {
    if (btnLista.ENLISTA === "off") {
        ColocarTítulo = document.getElementById('tituloAudio')
        if (btn_Lista.N_Cancion === i && y === undefined && Lista[i].nombre === ColocarTítulo.innerText) {return}
        Título = Lista[i].nombre || Lista[i].src;
        document.getElementById('Barra').style.width = "0%";

        const audioElement = document.getElementById('audio');
        audioElement.src = Preferencias.Dirección + Lista[i].src;

        audioElement.play();
        ColocarTítulo.innerText = Título;
        AgregarAlHistorial(Título);

        btn_Lista.Play = "on";

        btn_Lista.N_Cancion = i

        if (btn_Lista.N_Cancion >= btn_Lista.Min && btn_Lista.N_Cancion < btn_Lista.Max) {
            colorearButton(i)
        }
    }
}

function colorearButton(i) {
    for (let y = btn_Lista.Min; y < btn_Lista.Max && y < btn_Lista.Maximo; y++) {
        if (y >= Lista.length) break;
        document.getElementById("cancion_" + y).className = 'btn_musica';
    }
    if (i != null) {
        document.getElementById('cancion_'+i).className = 'btn_musica_black';
    }
}
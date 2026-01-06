btn_Lista = {
    Min: 0,
    Max: 20,
    Maximo: Math.ceil(Lista.length / 20) * 20,

    Pag: 1,

    Bucle: "off",
    Play: "off",
    Siguiente: "off",

    Editar: "off",

    N_Cancion: 0,
}

function actualizarBotones() {
    document.getElementById('btn_botones').innerHTML = "";
    for (let i = btn_Lista.Min; i < btn_Lista.Max && i < btn_Lista.Maximo; i++) {
        if (i >= Lista.length) break;
        document.getElementById('btn_botones').innerHTML += '<button onclick="reproducirAudio(' + i + ')" class="btn_musica" id="cancion_' + i + '">' + Lista[i].nombre + '</button>'
    }

    if (btn_Lista.N_Cancion >= btn_Lista.Min && btn_Lista.N_Cancion < btn_Lista.Max) {
        colorearButton(btn_Lista.N_Cancion)
    }
}

actualizarBotones()

function reproducirAudio(i) {
    const audioElement = document.getElementById('audio');
    audioElement.src = Lista[i].src;

    if (btn_Lista.Bucle === "on") {
        audioElement.loop = true;
    }

    audioElement.play();
    document.getElementById('tituloAudio').innerText = Lista[i].nombre;
    document.getElementById('numeroCancion').innerText = i;
    document.getElementById('paginaCancion').innerText = btn_Lista.Pag;

    document.getElementById('btn_Play').innerText = "❙❙";
    btn_Lista.Play = "on";

    btn_Lista.N_Cancion = i

    if (btn_Lista.N_Cancion >= btn_Lista.Min && btn_Lista.N_Cancion < btn_Lista.Max) {
        colorearButton(i)
    }
}

function colorearButton(i) {
    for (let y = btn_Lista.Min; y < btn_Lista.Max && y < btn_Lista.Maximo; y++) {
        if (y >= Lista.length) break;
        document.getElementById("cancion_" + y).style = "background-color: white; color: black;";
    }

    document.getElementById('cancion_'+i).style = "background-color: black; color: white;";
}
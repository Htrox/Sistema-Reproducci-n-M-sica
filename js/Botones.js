function audioReiniciar() {
    const audio = document.getElementById('audio');
    audio.currentTime = 0;      // Reiniciar al inicio

    switch (btn_Lista.Play) {
        case "on":
            audio.play()
            break;
        case "off":
            audio.pause()
            break;
    }
}
function audioBucle() {
    switch (btn_Lista.Bucle) {
        case "on":
            document.getElementById('audio').loop = false;
            document.getElementById('btn_Bucle').style = "background: red; color: black";
            btn_Lista.Bucle = "off";
            break;
        case "off":
            document.getElementById('audio').loop = true;
            document.getElementById('btn_Bucle').style = "background: green; color: white";
            btn_Lista.Bucle = "on";
            break;
    }
}
function audioPlay() {
    switch (btn_Lista.Play) {
        case "on":
            document.getElementById('audio').pause();
            document.getElementById('btn_Play').innerText = "▶";
            btn_Lista.Play = "off";
            document.getElementById('btn_Play').title = "Reanudar";
            return;
        case "off":
            document.getElementById('audio').play();
            document.getElementById('btn_Play').innerText = "❙❙";
            btn_Lista.Play = "on";
            document.getElementById('btn_Play').title = "Pausar";
            break;
    }
}

function audioContinue() {
    switch (btn_Lista.Siguiente) {
        case "on":
            document.getElementById('btn_Continuar').style = "background: red; color: black";
            document.getElementById('btn_Continuar').title = "Activar Continuar";
            btn_Lista.Siguiente = "off";
            break;
        case "off":
            document.getElementById('btn_Continuar').style = "background: green; color: white";
            document.getElementById('btn_Continuar').title = "Desactivar Continuar";
            btn_Lista.Siguiente = "on";
            break;
    }
}

function cambiarAudio(i) {
    switch (i) {
        case 1: // Para Atras
            if (btn_Lista.N_Cancion > 0) {
                btn_Lista.N_Cancion -= 1;
                
                if (btn_Lista.N_Cancion < btn_Lista.Min) {
                    paginación(0);
                }

                reproducirAudio(btn_Lista.N_Cancion);
            }
            break;
        case 2: // Para Adelante
            if (btn_Lista.N_Cancion < Lista.length - 1) {
                btn_Lista.N_Cancion += 1;
                
                if (btn_Lista.N_Cancion+1 > btn_Lista.Max) {
                    paginación(1);
                }

                reproducirAudio(btn_Lista.N_Cancion);
            }
            break;
    }
}



// EJECUCIÓN DE LOS BOTONES
document.addEventListener("keydown", function (event) {
    if (document.activeElement.id === "buscadorLista") return;
    if (document.activeElement.id === "tituloLista") return;
    if (document.activeElement.id === "buscadorPlay") return;

    // Control de reproducción con Barra Espaciadora
    if (event.code === "Space" && btnLista.ENLISTA === "off") {
        event.preventDefault();
        audioPlay();
    }

    // Control de reinicio con R
    if (event.code === "KeyR" && btnLista.ENLISTA === "off") {
        event.preventDefault();
        audioReiniciar();
    }

    // Control de bucle con B
    if (event.code === "KeyB" && btnLista.ENLISTA === "off") {
        event.preventDefault();
        audioBucle();
    }

    // Control de siguiente canción con S
    if (event.code === "KeyS" && btnLista.ENLISTA === "off") {
        event.preventDefault();
    }
    
    // Controles de paginación con Ctrl + Flechas
    if (event.code === "ArrowLeft" && event.ctrlKey && btnLista.ENLISTA === "off") {
        event.preventDefault();
        paginación(0)
        return;
    }
    if (event.code === "ArrowRight" && event.ctrlKey && btnLista.ENLISTA === "off") {
        event.preventDefault();
        paginación(1)
        return;
    }

    // Cambiar canción con Flechas
    if (event.code === "ArrowLeft" && btnLista.ENLISTA === "off") {
        event.preventDefault();
        cambiarAudio(1);
    }
    if (event.code === "ArrowRight" && btnLista.ENLISTA === "off") {
        event.preventDefault();
        cambiarAudio(2);
    }
});
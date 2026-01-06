function audioReiniciarLista() {
    const audio = document.getElementById('audioLista');
    audio.currentTime = 0;      // Reiniciar al inicio
}
function audioBucleLista() {
    switch (btnLista.Bucle) {
        case "on":
            document.getElementById('audioLista').loop = false;
            document.getElementById('btn_BucleLista').style = "background: red; color: black";
            btnLista.Bucle = "off";
            break;
        case "off":
            document.getElementById('audioLista').loop = true;
            document.getElementById('btn_BucleLista').style = "background: green; color: white";
            btnLista.Bucle = "on";
            break;
    }
}
function audioPlayLista() {
    switch (btnLista.Play) {
        case "on":
            document.getElementById('audioLista').pause();
            document.getElementById('btn_PlayLista').innerText = "▶";
            btnLista.Play = "off";
            document.getElementById('btn_PlayLista').title = "Reanudar";
            return;
        case "off":
            document.getElementById('audioLista').play();
            document.getElementById('btn_PlayLista').innerText = "❙❙";
            btnLista.Play = "on";
            document.getElementById('btn_PlayLista').title = "Pausar";
            break;
    }
}

function audioContinueLista() {
    switch (btnLista.Siguiente) {
        case "on":
            document.getElementById('btn_ContinuarLista').style = "background: red; color: black";
            document.getElementById('btn_ContinuarLista').title = "Activar Continuar";
            btnLista.Siguiente = "off";
            break;
        case "off":
            document.getElementById('btn_ContinuarLista').style = "background: green; color: white";
            document.getElementById('btn_ContinuarLista').title = "Desactivar Continuar";
            btnLista.Siguiente = "on";
            break;
    }
}

function cambiarAudioLista(i) {
    switch (i) {
        case 1: // Para Atras
            if (btnLista.N_Cancion > 0) {
                btnLista.N_Cancion -= 1;
                
                if (btnLista.N_Cancion < btnLista.Min) {
                    paginaciónLista(0);
                }

                reproducirAudioLista(btnLista.N_Cancion);
            }
            break;
        case 2: // Para Adelante
            if (btnLista.N_Cancion < Lista_Musica.Cargar.Nombre.length - 1) {
                btnLista.N_Cancion += 1;
                
                if (btnLista.N_Cancion+1 > btnLista.Max) {
                    paginaciónLista(1);
                }

                reproducirAudioLista(btnLista.N_Cancion);
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
    if (event.code === "Space" && btnLista.ENLISTA === "on") {
        event.preventDefault();
        audioPlayLista();
    }

    // Control de reinicio con R
    if (event.code === "KeyR" && btnLista.ENLISTA === "on") {
        event.preventDefault();
        audioReiniciarLista();
    }

    // Control de bucle con B
    if (event.code === "KeyB" && btnLista.ENLISTA === "on") {
        event.preventDefault();
        audioBucleLista();
    }

    // Control de siguiente canción con S
    if (event.code === "KeyS" && btnLista.ENLISTA === "on") {
        event.preventDefault();
    }
    
    // Controles de paginación con Ctrl + Flechas
    if (event.code === "ArrowLeft" && event.ctrlKey && btnLista.ENLISTA === "on") {
        event.preventDefault();
        paginaciónLista(0)
        return;
    }
    if (event.code === "ArrowRight" && event.ctrlKey && btnLista.ENLISTA === "on") {
        event.preventDefault();
        paginaciónLista(1)
        return;
    }

    // Cambiar canción con Flechas
    if (event.code === "ArrowLeft" && btnLista.ENLISTA === "on") {
        event.preventDefault();
        cambiarAudioLista(1);
    }
    if (event.code === "ArrowRight" && btnLista.ENLISTA === "on") {
        event.preventDefault();
        cambiarAudioLista(2);
    }
});
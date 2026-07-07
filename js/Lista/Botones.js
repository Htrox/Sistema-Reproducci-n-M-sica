function audioReiniciarLista() {
    if (document.getElementById('audioLista').src === null) {return};

    document.getElementById('BarraLista').style.width = "0%";

    const audio = document.getElementById('audioLista');
    audio.currentTime = 0;      // Reiniciar al inicio

    switch (btnLista.Play) {
        case "on":
            audio.play()
            break;
        case "off":
            audio.pause()
            break;
    }
}
function audioBucleLista() {
    const Audio = document.getElementById('audioLista');
    const Button = document.getElementById('btn_BucleLista');

    if (Audio.src === "") {return};

    switch (Audio.loop) {
        case true:
            Button.classList.replace('btn_controls_Green', 'btn_controls_Red');
            Audio.loop = false;
            btnLista.Bucle = false;
            break;
        case false:
            Button.classList.replace('btn_controls_Red', 'btn_controls_Green');
            Audio.loop = true;
            btnLista.Bucle = true;
            break;
    }
}
function audioPlayLista() {
    const Audio = document.getElementById('audioLista');

    if (Audio.src === "") {return};

    switch (btnLista.Play) {
        case "on":
            Audio.pause();
            btnLista.Play = "off";
            return;
        case "off":
            Audio.play();
            btnLista.Play = "on";
            break;
    }
}

function audioContinueLista() {
    const Audio = document.getElementById('audioLista');
    const Button1 = document.getElementById('btn_ContinuarLista');
    const Button2 = document.getElementById('btn_SiguienteBucleLista');

    if (Audio.src === "") {return};

    switch (btnLista.Siguiente) {
        case true:
            Button1.classList.replace('btn_controls_Green', 'btn_controls_Red');
            Button1.title = 'Activar Continuar';
            Button2.style.display = 'none';

            btnLista.Siguiente = false;
            break;
        case false:
            Button1.classList.replace('btn_controls_Red', 'btn_controls_Green');
            Button1.title = 'Desactivar Continuar';
            Button2.style.display = 'block';

            btnLista.Siguiente = true;
            break;
    }
}

function cambiarAudioLista(i) {
    
    if (btnLista.N_Cancion === null) {return};

    switch (i) {
        case 1: // Para Atras
            if (btnLista.N_Cancion > 0) {
                btnLista.N_Cancion -= 1;
                
                if (btnLista.N_Cancion < btnLista.Min) {
                    paginaciónLista(0);
                }

                reproducirAudioLista(btnLista.N_Cancion, btnLista.N_Cancion);
            }
            break;
        case 2: // Para Adelante
            if (btnLista.N_Cancion < Lista_Musica.Cargar.Nombre.length - 1) {
                btnLista.N_Cancion += 1;
                
                if (btnLista.N_Cancion+1 > btnLista.Max) {
                    paginaciónLista(1);
                }

                reproducirAudioLista(btnLista.N_Cancion, btnLista.N_Cancion);
            }
            break;
    }
}

function audioContinueBucleLista() {
    const Audio = document.getElementById('audioLista');
    const Button = document.getElementById('btn_SiguienteBucleLista');

    if (Audio.src === "") {return}


    if (btnLista.Siguiente) {
        switch (btnLista.SiguienteBucle) {
            case true:
                Button.classList.replace('btn_controls_Green', 'btn_controls_Red');
                Button.title = 'Activar Bucle de Continuar';
                Button.style.display = 'block';

                btnLista.SiguienteBucle = false;
                break;
            case false:
                Button.classList.replace('btn_controls_Red', 'btn_controls_Green');
                Button.title = 'Desactivar Bucle de Continuar';
                Button.style.display = 'block';

                btnLista.SiguienteBucle = true;
                break;
        }
    }
}

function aleatorioLista() {
    reproducirAudioLista(Math.floor(Math.random() * Lista_Musica.Cargar.Nombre.length))
    BuscarPaginaCancionLista()
}
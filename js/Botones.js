function audioReiniciar() {
    const Audio = document.getElementById('audio');

    if (Audio.src === "") {return};

    document.getElementById('Barra').style.width = "0%";

    Audio.currentTime = 0;      // Reiniciar al inicio

    switch (btn_Lista.Play) {
        case "on":
            Audio.play()
            break;
        case "off":
            Audio.pause()
            break;
    }
}
function audioBucle() {
    const Audio = document.getElementById('audio');
    const Button = document.getElementById('btn_Bucle');

    if (Audio.src === "") {return};

    switch (Audio.loop) {
        case true:
            Button.classList.replace('btn_controls_Green', 'btn_controls_Red');
            Audio.loop = false;
            btn_Lista.Bucle = false;
            break;
        case false:
            Button.classList.replace('btn_controls_Red', 'btn_controls_Green');
            Audio.loop = true;
            btn_Lista.Bucle = true;
            break;
    }
}
function audioPlay() {
    const Audio = document.getElementById('audio');

    if (Audio.src === "") {return};
    
    switch (btn_Lista.Play) {
        case "on":
            Audio.pause();
            btn_Lista.Play = "off";
            return;
        case "off":
            Audio.play();
            btn_Lista.Play = "on";
            break;
    }
}

function audioContinue() {
    const Audio = document.getElementById('audio');
    const Button1 = document.getElementById('btn_Continuar');
    const Button2 = document.getElementById('btn_SiguienteBucle');

    if (Audio.src === "") {return};

    switch (btn_Lista.Siguiente) {
        case true:
            Button1.classList.replace('btn_controls_Green', 'btn_controls_Red');
            Button1.title = 'Activar Continuar';
            Button2.style.display = 'none';

            btn_Lista.Siguiente = false;
            break;
        case false:
            Button1.classList.replace('btn_controls_Red', 'btn_controls_Green');
            Button1.title = 'Desactivar Continuar';
            Button2.style.display = 'block';

            btn_Lista.Siguiente = true;
            break;
    }
}

function cambiarAudio(i) {
    if (btn_Lista.N_Cancion === null) {return};

    switch (i) {
        case 1: // Para Atras
            if (btn_Lista.N_Cancion > 0) {
                btn_Lista.N_Cancion -= 1;
                
                if (btn_Lista.N_Cancion < btn_Lista.Min) {
                    paginación(0);
                }

                reproducirAudio(btn_Lista.N_Cancion, btn_Lista.N_Cancion);
            }
            break;
        case 2: // Para Adelante
            if (btn_Lista.N_Cancion < Lista.length - 1) {
                btn_Lista.N_Cancion += 1;
                
                if (btn_Lista.N_Cancion+1 > btn_Lista.Max) {
                    paginación(1);
                }

                reproducirAudio(btn_Lista.N_Cancion, btn_Lista.N_Cancion);
            }
            break;
    }
}

function audioContinueBucle() {
    const Audio = document.getElementById('audio');
    const Button = document.getElementById('btn_SiguienteBucle');

    if (Audio.src === "") {return};

    if (btn_Lista.Siguiente) {
        switch (btn_Lista.SiguienteBucle) {
            case true:
                Button.classList.replace('btn_controls_Green', 'btn_controls_Red');
                Button.title = 'Activar Bucle de Continuar';
                Button.style.display = 'block';
                
                btn_Lista.SiguienteBucle = false;
                break;
            case false:
                Button.classList.replace('btn_controls_Red', 'btn_controls_Green');
                Button.title = 'Desactivar Bucle de Continuar';
                Button.style.display = 'block';
                
                btn_Lista.SiguienteBucle = true;
                break;
        }
    }
}
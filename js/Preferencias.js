Preferencias = {
    // Preferencias de TIEMPO
    MostrarBarraTiempo: true,
    MostrarTiempo: true,
    MostrarBarraTiempoLista: true,
    MostrarTiempoLista: true,

    // Preferencias de BUCLE
    BucleCancion: false,
    SiguienteCancion: false,
    BucleTodasCanciones: false,
    BucleCancionLista: false,
    SiguienteCancionLista: false,
    BucleTodasCancionesLista: false,

    // Preferencias al INICIAR
    ReproduciralIniciarCancion: [false, "", ""],
    AleatorizarListaTemporal: false,
    ReproduciralIniciarListaTemporal: [false, ""],

    Dirección: "C:\\Users\\User\\Music\\",
}



if (localStorage.getItem('PreferenciasMusica') !== null) {
    Preferencias = JSON.parse(localStorage.getItem('PreferenciasMusica'));

    document.getElementById("prefe_1").checked = Preferencias["MostrarBarraTiempo"];
    document.getElementById("prefe_2").checked = Preferencias["MostrarTiempo"];
    document.getElementById("prefe_3").checked = Preferencias["MostrarBarraTiempoLista"];
    document.getElementById("prefe_4").checked = Preferencias["MostrarTiempoLista"];

    document.getElementById("prefe_5").checked = Preferencias["BucleCancion"];
    document.getElementById("prefe_6").checked = Preferencias["SiguienteCancion"];
    document.getElementById("prefe_7").checked = Preferencias["BucleTodasCanciones"];
    document.getElementById("prefe_8").checked = Preferencias["BucleCancionLista"];
    document.getElementById("prefe_9").checked = Preferencias["SiguienteCancionLista"];
    document.getElementById("prefe_10").checked = Preferencias["BucleTodasCancionesLista"];

    document.getElementById("prefe_11").checked = Preferencias["ReproduciralIniciarCancion"][0];
    document.getElementById("prefe_12").checked = Preferencias["AleatorizarListaTemporal"];
    document.getElementById("prefe_13").checked = Preferencias["ReproduciralIniciarListaTemporal"][0];

    document.getElementById("prefe_14").value = Preferencias.Dirección;

    CrearVariablesFaltantes()

    // Poner las opciones de reproducir al iniciar la canción
    if (Preferencias["ReproduciralIniciarCancion"][0]) {
        document.getElementById('opciones_1').style.display = 'block';
        seleccionarPreferencia(Preferencias.ReproduciralIniciarCancion[1]);
    }
    // Poner las opciones de reproducir al iniciar la lista temporal
    if (Preferencias["ReproduciralIniciarListaTemporal"][0]) {
        document.getElementById('opciones_2').style.display = 'block';
        ReproducirListaTemporal(1, true)
        seleccionarPreferencia(Preferencias.ReproduciralIniciarListaTemporal[1])
    }

    for (let i = 1; i <= Object.keys(Preferencias).length; i++) {
        cargarPreferencias("prefe_" + i);
    }
}

function cargarPreferencias(preferencias, opcion) {
    const preferencias2 = document.getElementById(preferencias).checked;

    switch (preferencias) {
        // TIEMPO
        case "prefe_1":// MostrarBarraTiempo
            Preferencias.MostrarBarraTiempo = preferencias2;
            if (!Preferencias.MostrarBarraTiempo) {
                document.getElementById("divBarra").style.display = "none";
            } else if (Preferencias.MostrarBarraTiempo) {
                document.getElementById("divBarra").style.display = "block";
            }
            break;
        case "prefe_2":// MostrarTiempo
            Preferencias.MostrarTiempo = preferencias2;
            if (!Preferencias.MostrarTiempo) {
                document.getElementById("divTiempoActual").style.display = "none";
            } else if (Preferencias.MostrarTiempo) {
                document.getElementById("divTiempoActual").style.display = "block";
            }
            break;
        case "prefe_3":// MostrarBarraTiempoLista
            Preferencias.MostrarBarraTiempoLista = preferencias2;
            if (!Preferencias.MostrarBarraTiempoLista) {
                document.getElementById("divBarraLista").style.display = "none";
            } else if (Preferencias.MostrarBarraTiempoLista) {
                document.getElementById("divBarraLista").style.display = "block";
            }
            break;
        case "prefe_4":// MostrarTiempoLista
            Preferencias.MostrarTiempoLista = preferencias2;
            if (!Preferencias.MostrarTiempoLista) {
                document.getElementById("divTiempoActualLista").style.display = "none";
            } else if (Preferencias.MostrarTiempoLista) {
                document.getElementById("divTiempoActualLista").style.display = "block";
            }
            break;

        // ACTIVACIÓN DE BOTONES
        case "prefe_5":// BucleCancion
            Preferencias.BucleCancion = preferencias2;

            if (Preferencias.BucleCancion) {
                document.getElementById('btn_Bucle').classList.replace('btn_controls_Red', 'btn_controls_Green');
                document.getElementById('audio').loop = Preferencias.BucleCancion;
                btn_Lista.Bucle = true;
            }
            break;
        case "prefe_6":// SiguienteCancion
            Preferencias.SiguienteCancion = preferencias2;
            if (Preferencias.SiguienteCancion) {
                document.getElementById('btn_Continuar').classList.replace('btn_controls_Red', 'btn_controls_Green');
                document.getElementById('btn_Continuar').title = 'Desactivar Continuar';
                document.getElementById('btn_SiguienteBucle').style.display = 'block';
                btn_Lista.Siguiente = true;
            }

            const check6 = document.getElementById("prefe_6");
            const check7 = document.getElementById("prefe_7");
            check7.disabled = !check6.checked
            if (!check6.checked) {
                check7.checked = false;
            }
            break;
        case "prefe_7":// BucleTodasCanciones
            Preferencias.BucleTodasCanciones = preferencias2;
            if (Preferencias.BucleTodasCanciones) {
                document.getElementById('btn_SiguienteBucle').classList.replace('btn_controls_Red', 'btn_controls_Green');
                document.getElementById('btn_SiguienteBucle').title = 'Desactivar Bucle de Continuar';
                document.getElementById('btn_SiguienteBucle').style.display = 'block';
                btn_Lista.SiguienteBucle = true;
            }
            break;
        case "prefe_8":// BucleCancionLista
            Preferencias.BucleCancionLista = preferencias2;
            if (Preferencias.BucleCancionLista) {
                document.getElementById('btn_BucleLista').classList.replace('btn_controls_Red', 'btn_controls_Green');
                document.getElementById('audioLista').loop = Preferencias.BucleCancionLista;
                btnLista.Bucle = true;
            }
            break;
        case "prefe_9":// "SiguienteCancionLista" + SiguienteCancionLista
            Preferencias.SiguienteCancionLista = preferencias2;
            if (Preferencias.SiguienteCancionLista) {
                document.getElementById('btn_ContinuarLista').classList.replace('btn_controls_Red', 'btn_controls_Green');
                document.getElementById('btn_ContinuarLista').title = 'Desactivar Continuar';
                document.getElementById('btn_SiguienteBucleLista').style.display = 'block';
                btnLista.Siguiente = true;
            }
            
            const check9 = document.getElementById("prefe_9");
            const check10 = document.getElementById("prefe_10");
            check10.disabled = !check9.checked
            if (!check9.checked) {
                check10.checked = false;
            }
            break;
        case "prefe_10":// BucleTodasCancionesLista
            Preferencias.BucleTodasCancionesLista = preferencias2;
            if (Preferencias.BucleTodasCancionesLista) {
                document.getElementById('btn_SiguienteBucleLista').classList.replace('btn_controls_Red', 'btn_controls_Green');
                document.getElementById('btn_SiguienteBucleLista').title = 'Desactivar Bucle de Continuar';
                document.getElementById('btn_SiguienteBucleLista').style.display = 'block';
                btnLista.SiguienteBucle = true;
            }
            break;

        // PREFERENCIAS AL INICIAR
        case "prefe_11":// Al iniciar se reproduzca una canción
            Preferencias.ReproduciralIniciarCancion[0] = preferencias2;
            const checkbox1 = document.getElementById('prefe_11');
            const opciones1 = document.getElementById('opciones_1');

            checkbox1.addEventListener('change', function() {
                if (this.checked) {
                opciones1.style.display = 'block';
                } else {
                opciones1.style.display = 'none';
                }
            });

            if (opcion !== undefined) {
                Preferencias.ReproduciralIniciarCancion[1] = opcion;
            } else if (preferencias2 === false) {
                Preferencias.ReproduciralIniciarCancion[1] = "";
            }
            break;
        case "prefe_12":// Aleatorizar lista temporal
            Preferencias.AleatorizarListaTemporal = preferencias2;
            // Me cago en todo, está parte lo he intentado hacer y no funcióna
            break
        case "prefe_13":// Al iniciar poner la lista temporal
            Preferencias.ReproduciralIniciarListaTemporal[0] = preferencias2;
            const checkbox2 = document.getElementById('prefe_13');
            const opciones2 = document.getElementById('opciones_2');

            checkbox2.addEventListener('change', function() {
                if (this.checked) {
                opciones2.style.display = 'block';
                } else {
                opciones2.style.display = 'none';
                }
            });

            if (opcion !== undefined) {
                Preferencias.ReproduciralIniciarListaTemporal[1] = opcion;
            } else if (preferencias2 === false) {
                Preferencias.ReproduciralIniciarListaTemporal[1] = "";
            }
            break;
        case "prefe_14":// Dirección de la música
            Preferencias.Dirección = document.getElementById("prefe_14").value;
            break;
    }
    
    localStorage.setItem('PreferenciasMusica', JSON.stringify(Preferencias))
}

function resetearPreferencias() {
    document.getElementById("prefe_1").checked = true;
    document.getElementById("prefe_2").checked = true;
    document.getElementById("prefe_3").checked = true;
    document.getElementById("prefe_4").checked = true;

    document.getElementById("prefe_5").checked = false;
    document.getElementById("prefe_6").checked = false;
    document.getElementById("prefe_7").checked = false;
    document.getElementById("prefe_8").checked = false;
    document.getElementById("prefe_9").checked = false;
    document.getElementById("prefe_10").checked = false;

    document.getElementById("prefe_11").checked = false;
    document.getElementById('opciones_1').style.display = 'none';
    document.getElementById("prefe_13").checked = false;
    document.getElementById('opciones_2').style.display = 'none';
    document.getElementById("prefe_14").value = "C:\\Users\\User\\Music\\";



    for (let i = 1; i < Object.keys(Preferencias).length; i++) {
        cargarPreferencias("prefe_" + i);
    }

    localStorage.removeItem('PreferenciasMusica');
}

function seleccionarPreferencia(opcion) {
    if (opcion === undefined) {return;}
    document.getElementById(opcion).checked = true;
    switch (opcion) {
        case "prefe_11_1":
            reproducirAudio(0)
            break;
        case "prefe_11_2":
            reproducirAudioHistorial(Lista.length - 1)
            break;
        case "prefe_11_3":
            const cancionAleatoria = Math.floor(Math.random() * Lista.length);
            reproducirAudioHistorial(cancionAleatoria)
            break;
        case "prefe_11_4":
            const ultimaCancion = Historial[Historial.length - 1];
            let index = Lista.findIndex(c => c.nombre === ultimaCancion);
            reproducirAudioHistorial(index)
            break;
        case "prefe_11_5":
            break;

        case "prefe_13_1":
            break;
        case "prefe_13_2":
            reproducirAudioLista(0)
            break;
        case "prefe_13_3":
            aleatorioLista()
            break;
    }
}



// FORMATEAR
function formatear(cosa, verificar) {
    switch (cosa) {
        case "lista_canciones":
            if (verificar) {
                document.getElementById("lista_canciones").style.backgroundColor = "red";
            }
        break;
        case "lista_reproduccion":
            if (verificar) {
                document.getElementById("lista_reproduccion").style.backgroundColor = "red";
            }
        break
    }
}

function CrearVariablesFaltantes() {
    if (Preferencias.MostrarBarraTiempo === undefined) {Preferencias.MostrarBarraTiempo = true}
    if (Preferencias.MostrarTiempo === undefined) {Preferencias.MostrarTiempo = true}
    if (Preferencias.MostrarBarraTiempoLista === undefined) {Preferencias.MostrarBarraTiempoLista = true}
    if (Preferencias.MostrarTiempoLista === undefined) {Preferencias.MostrarTiempoLista = true}

    if (Preferencias.BucleCancion === undefined) {Preferencias.BucleCancion = false}
    if (Preferencias.SiguienteCancion === undefined) {Preferencias.SiguienteCancion = false}
    if (Preferencias.BucleTodasCanciones === undefined) {Preferencias.BucleTodasCanciones = false}
    if (Preferencias.BucleCancionLista === undefined) {Preferencias.BucleCancionLista = false}
    if (Preferencias.SiguienteCancionLista === undefined) {Preferencias.SiguienteCancionLista = false}
    if (Preferencias.BucleTodasCancionesLista === undefined) {Preferencias.BucleTodasCancionesLista = false}

    if (Preferencias.ReproduciralIniciarCancion === undefined) {Preferencias.ReproduciralIniciarCancion = [false, "", ""]}
    if (Preferencias.AleatorizarListaTemporal === undefined) {Preferencias.AleatorizarListaTemporal = false}
    if (Preferencias.ReproduciralIniciarListaTemporal === undefined) {Preferencias.ReproduciralIniciarListaTemporal = [false, ""]}

    if (Preferencias.Dirección === undefined) {Preferencias.Dirección = "C:\\Users\\User\\Music\\"}
}
// EJECUCIÓN DE LOS BOTONES
document.addEventListener("keydown", function (event) {
    if (document.activeElement.id === "buscadorLista"
        || document.activeElement.id === "buscadorListaCanciónTemporal"
        || document.activeElement.id === "buscadorEditarLista"
        || document.activeElement.id === "tituloLista"
        || document.activeElement.id === "tituloListaEditar"
        || document.activeElement.id === "buscadorPlay"
        || document.activeElement.id === "buscadorListaCreando"
        || document.activeElement.id === "prefe_14")
    return;



    switch (true) {
        // Control de reproducción con Barra Espaciadora
        case (event.code === "Space" && btnLista.ENLISTA === "off"):
            event.preventDefault();
            audioPlay();
            return;
        case (event.code === "Space" && btnLista.ENLISTA === "on"):
            event.preventDefault();
            audioPlayLista();
            return;

        // Cambiar canción con Flechas
        case (event.code === "ArrowLeft" && btnLista.ENLISTA === "off" && !event.ctrlKey):
            event.preventDefault();
            cambiarAudio(1);
            return;
        case (event.code === "ArrowRight" && btnLista.ENLISTA === "off" && !event.ctrlKey):
            event.preventDefault();
            cambiarAudio(2);
            return;
        case (event.code === "ArrowLeft" && btnLista.ENLISTA === "on" && !event.ctrlKey):
            event.preventDefault();
            cambiarAudioLista(1);
            return;
        case (event.code === "ArrowRight" && btnLista.ENLISTA === "on" && !event.ctrlKey):
            event.preventDefault();
            cambiarAudioLista(2);
            return;
        
        // Controles de paginación con Ctrl + Flechas
        case (event.code === "ArrowLeft" && event.ctrlKey && btnLista.ENLISTA === "off"):
            event.preventDefault();
            paginación(0);
            return;
        case (event.code === "ArrowRight" && event.ctrlKey && btnLista.ENLISTA === "off"):
            event.preventDefault();
            paginación(1);
            return;
        case (event.code === "ArrowLeft" && event.ctrlKey && btnLista.ENLISTA === "on"):
            event.preventDefault();
            paginaciónLista(0);
            return;
        case (event.code === "ArrowRight" && event.ctrlKey && btnLista.ENLISTA === "on"):
            event.preventDefault();
            paginaciónLista(1);
            return;

        // Control de bucle con B
        case (event.code === "KeyB" && !event.ctrlKey && btnLista.ENLISTA === "off"):
            event.preventDefault();
            audioBucle();
            return;
        case (event.code === "KeyB" && !event.ctrlKey && btnLista.ENLISTA === "on"):
            event.preventDefault();
            audioBucleLista();
            return;
        
        // Control de bucle de las siguiente con Ctrl + B
        case (event.code === "KeyB" && event.ctrlKey && btnLista.ENLISTA === "off"):
            event.preventDefault();
            audioContinueBucle();
            return;
        case (event.code === "KeyB" && event.ctrlKey && btnLista.ENLISTA === "on"):
            event.preventDefault();
            audioContinueBucleLista();
            return;

        // Control de siguiente canción con S
        case (event.code === "KeyS" && btnLista.ENLISTA === "off"):
            event.preventDefault();
            audioContinue()
            return;
        case (event.code === "KeyS" && btnLista.ENLISTA === "on"):
            event.preventDefault();
            audioContinueLista();
            return;
        
        // Control de reinicio con R
        case (event.code === "KeyR" && btnLista.ENLISTA === "off" && !event.ctrlKey):
            event.preventDefault();
            audioReiniciar();
            return;
        case (event.code === "KeyR" && btnLista.ENLISTA === "on" && !event.ctrlKey):
            event.preventDefault();
            audioReiniciarLista();
            return;

        case (event.code === "ArrowDown" && btnLista.ENLISTA === "off"):
            event.preventDefault();
            BuscarPaginaCancion();
            return;
        case (event.code === "ArrowDown" && btnLista.ENLISTA === "on"):
            event.preventDefault();
            BuscarPaginaCancionLista();
            return;
    }



    // Control de cierre de ventanas con Escape
    switch (true) {
        // Cerrar ventana de Subir música
        case (event.code === "Escape" && document.getElementById('ventanaArchivo').style.display === "block"):
            event.preventDefault();
            ocultarSubirArchivo();
            return;

        // Cerrar ventana de eliminación de lista
        case (event.code === "Escape" && document.getElementById('ventanaEliminarLista').style.display === "block"):
            event.preventDefault();
            CancelarEliminarLista();
            return;
        
        // Cerrar ventana de lista
        case (event.code === "Escape" && document.getElementById('ventanaCrearLista').style.display === "block"):
            event.preventDefault();
            ocultarCrearLista();
            return;

        // Cerrar ventana de eliminar historial
        case (event.code === "Escape" && document.getElementById('ventanaBorrarHistorial').style.display === "block"):
            event.preventDefault();
            ocultarBorrarHistorial();
            return;

        // Cerrar ventana dehistorial
        case (event.code === "Escape" && document.getElementById('ventanaHistorial').style.display === "block"):
            event.preventDefault();
            ocultarHistorial();
            return;

        // Cerrar ventana de configuración
        case (event.code === "Escape" && document.getElementById('ventanaConfiguracion').style.display === "block"):
            event.preventDefault();
            ocultarConfiguaracion();
            return;

        // Cerrar ventana de navegador
        case (event.code === "Escape" && document.getElementById('ventanaNavegador').style.display === "block"):
            event.preventDefault();
            ocultarNavegador();
            return;
    }


    // Control de botones de lista con números
    if (document.getElementById('ListaCreadas').style.display === "block" && document.getElementById('ventanaCrearLista').style.display === "block") {
        switch (event.key) {
            case "1":
                event.preventDefault();
                CambiarClaseBoton('ReproducirLista')
                return;
            case "2":
                event.preventDefault();
                CambiarClaseBoton('BorrarLista')
                return;
            case "3":
                event.preventDefault();
                CambiarClaseBoton('VerLista')
                return;
            case "4":
                event.preventDefault();
                CambiarClaseBoton('ConfigurarLista')
                return;
        }
    }
});
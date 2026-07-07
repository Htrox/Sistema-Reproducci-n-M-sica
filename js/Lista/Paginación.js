function paginaciónLista(i) {
    switch (i) {
        case 0:
            if (btnLista.Min - 20 >= 0) {
                btnLista.Pag -= 1;
                document.getElementById('paginaActualLista').innerText = btnLista.Pag;

                btnLista.Min -= 20;
                btnLista.Max -= 20;

                actualizarBotonesLista()
            }
            break;
        case 1:
            if (btnLista.Max + 20 <= btnLista.Maximo) {
                btnLista.Pag += 1;
                document.getElementById('paginaActualLista').innerText = btnLista.Pag;
                
                btnLista.Min += 20;
                btnLista.Max += 20;

                actualizarBotonesLista()
            }
            break;
        case 2:
            document.getElementById('paginaActualLista').innerText = btnLista.Pag;
            actualizarBotonesLista()
            break;
    }
}

function BuscarPaginaCancionLista() {
    for (let i = 1; i <= Math.ceil(Lista.length / 20); i++) {
        btnLista.Pag = i
        btnLista.Min = (i*20)-20
        btnLista.Max = (i*20)

        if (btnLista.Min <= btnLista.N_Cancion && btnLista.Max >= btnLista.N_Cancion) {
            if (btnLista.N_Cancion !== 0 && btnLista.N_Cancion % 20 === 0) {
                btnLista.Pag += 1
                btnLista.Min += 20
                btnLista.Max += 20
            }
            paginaciónLista(2)
            break;
        }
    }
}
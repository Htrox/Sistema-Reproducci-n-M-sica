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
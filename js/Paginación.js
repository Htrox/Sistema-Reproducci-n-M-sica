function paginación(i) {
    switch (i) {
        case 0:
            if (btn_Lista.Min - 20 >= 0) {
                btn_Lista.Pag -= 1;
                document.getElementById('paginaActual').innerText = btn_Lista.Pag;

                btn_Lista.Min -= 20;
                btn_Lista.Max -= 20;

                actualizarBotones()
            }
            break;
        case 1:
            if (btn_Lista.Max + 20 <= btn_Lista.Maximo) {
                btn_Lista.Pag += 1;
                document.getElementById('paginaActual').innerText = btn_Lista.Pag;
                
                btn_Lista.Min += 20;
                btn_Lista.Max += 20;

                actualizarBotones()
            }
            break;
        case 2:
            actualizarBotones()
            break;
    }
}
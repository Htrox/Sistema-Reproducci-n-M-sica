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
            document.getElementById('paginaActual').innerText = btn_Lista.Pag;
            actualizarBotones()
            break;
    }
}

function BuscarPaginaCancion() {
    for (let i = 1; i <= Math.ceil(Lista.length / 20); i++) {
        btn_Lista.Pag = i
        btn_Lista.Min = (i*20)-20
        btn_Lista.Max = (i*20)

        if (btn_Lista.Min <= btn_Lista.N_Cancion && btn_Lista.Max >= btn_Lista.N_Cancion) {
            if (btn_Lista.N_Cancion % 20 === 0) {
                btn_Lista.Pag += 1
                btn_Lista.Min += 20
                btn_Lista.Max += 20
            }
            paginación(2)
            break;
        }
    }
}
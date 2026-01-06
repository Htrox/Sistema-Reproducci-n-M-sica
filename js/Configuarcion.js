function mostrarConfiguaracion() {
    document.getElementById('ventanaConfiguracion').style.display = 'block';
}
function ocultarConfiguaracion() {
    document.getElementById('ventanaConfiguracion').style.display = 'none';
}



function cambiarConfiguaracion(i) {
    escondercambiarConfiguaracion()
    document.getElementById('configuracion_'+i).style.display = 'block'
}

function escondercambiarConfiguaracion() {
    for (let i = 1; i <= 2; i++) {
        document.getElementById('configuracion_'+i).style.display = 'none'
    }
}
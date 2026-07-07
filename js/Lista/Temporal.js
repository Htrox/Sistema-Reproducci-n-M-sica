if (localStorage.getItem('Lista_Musica_Temporal') !== null) {
    Lista_Musica.Temporal.Nombre = JSON.parse(localStorage.getItem('Lista_Musica_Temporal'))
}



function ListaTemporal() {
    Lista_Musica.Nuevo = {Titulo: "", Nombre: Lista_Musica.Temporal.Nombre, Numero: [],};
    document.getElementById('ListaCreadas').style.display = 'none';
    
    document.getElementById('divBuscadorTemporal').style.display = 'block';
    document.getElementById('CrearListaTemporal').style.display = 'block';

    MostrarCancionesTemporal()
    MostrarListasGuardadas()
}

function CancelarListaTemporal() {
    document.getElementById('ListaCreadas').style.display = 'block';
    document.getElementById('divBuscadorTemporal').style.display = 'none';
    document.getElementById('CrearListaTemporal').style.display = 'none';

    if (localStorage.getItem('Lista_Musica_Temporal') !== null) {
        Lista_Musica.Temporal.Nombre = JSON.parse(localStorage.getItem('Lista_Musica_Temporal'))
    }
}

function AñadirCancionTemporal(i) {
    Lista_Musica.Nuevo.Nombre.push(Lista[i].nombre);

    MostrarCancionesTemporal()
}
function EliminarCancionTemporal(i) {
    Lista_Musica.Nuevo.Nombre.splice(i, 1);
    
    MostrarCancionesTemporal()
}

function ReproducirListaTemporal(i, y) {
    if (i === 0) {
        Lista_Musica.Cargar.Nombre = Lista_Musica.Nuevo.Nombre;
    } else if (i === 1) {
        Lista_Musica.Cargar.Nombre = Lista_Musica.Temporal.Nombre;
    }

    if (Preferencias.AleatorizarListaTemporal && y) {
        for (let i = Lista_Musica.Cargar.Nombre.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [Lista_Musica.Cargar.Nombre[i], Lista_Musica.Cargar.Nombre[j]] = [Lista_Musica.Cargar.Nombre[j], Lista_Musica.Cargar.Nombre[i]];
        }
    }

    if (Lista_Musica.Cargar.Nombre.length > 0 && Lista_Musica.Nuevo.Nombre != 0) {
        localStorage.setItem('Lista_Musica_Temporal', JSON.stringify(Lista_Musica.Nuevo.Nombre))
        Lista_Musica.Nuevo = {Titulo: "",Nombre: [],Numero: [],}
    }

    CargarNumeroLista()
    CancelarListaTemporal()
}

function MostrarCancionesTemporal() {
    document.getElementById('CancionAñadidaTemporal').innerHTML = '';

    for (let y = 0; y < Lista_Musica.Nuevo.Nombre.length; y++) {
        document.getElementById('CancionAñadidaTemporal').innerHTML += '<div class="divSpaceBetween, divBordesGrandes"><span class="nombreLista">' + Lista_Musica.Nuevo.Nombre[y] + '</span><div class="divBordes"><button class="CuboBlanco" onclick="EliminarCancionTemporal(' + y + ')">🗑</button>' + '<div><button class="CuboBlanco" onclick="SubirBajarCancionListaTemporal(\'subir\', ' + y + ')">▲</button>' + '<button class="CuboBlanco" onclick="SubirBajarCancionListaTemporal(\'bajar\', ' + y + ')">▼</button></div></div></div>';
    }

    document.getElementById('totalCancionesTemporal').innerText = Lista_Musica.Nuevo.Nombre.length;
}

function SubirBajarCancionListaTemporal(direccion, i) {
    
    switch (direccion) {
        case "subir":
            if (i > 0) {
                [Lista_Musica.Nuevo.Nombre[i], Lista_Musica.Nuevo.Nombre[i - 1]] =
                [Lista_Musica.Nuevo.Nombre[i - 1], Lista_Musica.Nuevo.Nombre[i]];
                i--;
            }
        break;
        case "bajar":
            if (i < Lista_Musica.Nuevo.Nombre.length - 1) {
                [Lista_Musica.Nuevo.Nombre[i], Lista_Musica.Nuevo.Nombre[i + 1]] =
                [Lista_Musica.Nuevo.Nombre[i + 1], Lista_Musica.Nuevo.Nombre[i]];
                i++;
            }
        break;
    }

    MostrarCancionesTemporal()
}

function CambiarBTNTemporal(i) {
    switch (i) {
        case 1:
            document.getElementById('divSearchCancion').style.display = 'block';
            document.getElementById('divSearchLista').style.display = 'none';

            document.getElementById('btnCancion').style.fontWeight = 'bold';
            document.getElementById('btnListas').style.fontWeight = 'normal';
        break;
        case 2:
            document.getElementById('divSearchCancion').style.display = 'none';
            document.getElementById('divSearchLista').style.display = 'block';

            document.getElementById('btnCancion').style.fontWeight = 'normal';
            document.getElementById('btnListas').style.fontWeight = 'bold';
            MostrarListasGuardadas()
        break;
    }
}

function AñadirListaTemporal(i) {
    const variable = Lista_Musica.Guardado[i].Nombre

    for (let y = 0; y < variable.length; y++) {
        Lista_Musica.Nuevo.Nombre.push(variable[y]);
    }

    MostrarCancionesTemporal()
}

function AleatorioListaTemporal() {
    for (let i = Lista_Musica.Nuevo.Nombre.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Lista_Musica.Nuevo.Nombre[i], Lista_Musica.Nuevo.Nombre[j]] = [Lista_Musica.Nuevo.Nombre[j], Lista_Musica.Nuevo.Nombre[i]];
    }
    MostrarCancionesTemporal()
}

function OrdenarCanciónListaTemporal(a) {
    if (a === undefined) {
        a = document.getElementById('ordenarListaTemporal').value;
    }
    switch (a) {
        case "A-Z":
            OrdenarLista_AZ()
            break;
        case "Z-A":
            OrdenarLista_ZA()
            break;
        case "⤨":
            Lista_Musica.Nuevo.Nombre.sort(() => Math.random() - 0.5);
            break;
        case "Invertir":
            Lista_Musica.Nuevo.Nombre.reverse()
            break;
    }

    MostrarCancionesTemporal()
}

function MostrarListasGuardadas() {
    document.getElementById('resultadosListaTemporal').innerHTML = "";
    
    for (let i = 0; i < Lista_Musica.Guardado.length; i++) {
        const button = document.createElement('button');
        button.textContent = Lista_Musica.Guardado[i].Titulo;
        button.addEventListener('click', () => {
            Seleccionar(button);
        });
        button.classList.add('CuboBlanco_Lista');
        document.getElementById('resultadosListaTemporal').appendChild(button);
    }
}
Variables_Extras = {
    Otro_1: [],
}
function Seleccionar(button) {
    if (button.classList.contains('CuboBlanco_Lista')) {
        button.classList.remove('CuboBlanco_Lista');
        button.classList.add('CuboRojo_Lista');
        Variables_Extras.Otro_1.push(button.textContent);
    } else {
        button.classList.remove('CuboRojo_Lista');
        button.classList.add('CuboBlanco_Lista');
        const index = Variables_Extras.Otro_1.indexOf(button.textContent);
        if (index > -1) {
            Variables_Extras.Otro_1.splice(index, 1);
        }
    }
}
MostrarListasGuardadas()

function Agregar() {
    for (let i = 0; i < Variables_Extras.Otro_1.length; i++) {
        const posicion = Lista_Musica.Guardado.findIndex(item => item.Titulo.includes(Variables_Extras.Otro_1[i]));
        for (let y = 0; y < Lista_Musica.Guardado[posicion].Nombre.length; y++) {
            Lista_Musica.Nuevo.Nombre.push(Lista_Musica.Guardado[posicion].Nombre[y]);
        }
    }
    // Quitar selección visual
    document.querySelectorAll('#resultadosListaTemporal button.CuboRojo_Lista').forEach(button => {
        button.classList.remove('CuboRojo_Lista');
        button.classList.add('CuboBlanco_Lista');
    });

    MostrarCancionesTemporal()

    Variables_Extras.Otro_1 = [];
}
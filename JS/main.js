// TODO: VARIABLES /////////////////////////////////////////////
const JUGADAS = [
    {
        colocaciones: [
            "caballoN%1-8e",
            "reyN%1-8f",
            "torreN%1-7a",
            "peonN%1-7b",
            "torreB%1-7d",
            "caballoN%2-7e",
            "peonN%2-7g",
            "peonN%3-7h",
            "caballoB%1-6b",
            "peonN%4-6f",
            "peonB%1-5c",
            "peonB%2-4a",
            "peonN%5-4f",
            "peonB%3-3f",
            "reyB%1-2b",
            "alfilB%1-2f",
            "peonB%4-2h"
        ],
        jugada: [
            "torreB%1-7e",
            "reyN%1-7e",
            "caballoB%1-8c",
            "reyN%1-7d",
            "caballoB%1-7a"
        ]
    },
    {
        colocaciones: [
            "torreN%1-8a",
            "caballoN%1-8b",
            "torreN%2-8f",
            "reyN%1-8g",
            "peonN%1-7a",
            "peonN%2-7b",
            "peonN%3-7c",
            "alfilN%1-7e",
            "peonN%4-7f",
            "peonN%5-7g",
            "peonN%6-7h",
            "reinaN%1-5d",
            "alfilN%2-5f",
            "peonB%1-4d",
            "caballoN%2-4e",
            "alfilB%1-3d",
            "caballoB%1-3f",
            "peonB%2-2a",
            "peonB%3-2b",
            "peonB%4-2f",
            "peonB%5-2g",
            "peonB%6-2h",
            "torreB%1-1a",
            "caballoB%2-1b",
            "alfilB%2-1c",
            "reinaB%1-1d",
            "torreB%2-1f",
            "reyB%1-1g"
        ],
        jugada:[
            "alfilB%1-4e",
            "alfilN%2-4e",
            "caballoB%2-3c",
            "alfilN%2-3f",
            "caballoB%2-5d",
            "alfilN%2-1d",
            "caballoB%2-7e"
        ]
    },
    {
        colocaciones: [
            "peonB%1-7a",
            "torreB%1-7b",
            "peonN%1-6e",
            "torreN%1-5a",
            "peonN%2-5h",
            "reyN%1-4d",
            "peonN%3-4e",
            "peonB%2-4h",
            "peonB%3-3b",
            "reyB%1-2e"
        ],
        jugada:[
            "torreB%1-4b",
            "reyN%1-3c",
            "torreB%1-4a",
            "torreN%1-7a",
            "torreB%1-7a"
        ]
    },
    {
        colocaciones:[
            "torreN%1-8f",
            "reyN%1-8g",
            "peonN%1-7a",
            "torreB%1-7d",
            "peonN%2-7f",
            "peonN%3-6b",
            "peonN%4-6e",
            "peonN%5-6g",
            "peonB%1-5e",
            "peonN%6-5h",
            "reinaN%1-4h",
            "reinaB%1-3e",
            "peonB%2-2a",
            "torreN%2-2c",
            "peonB%3-2f",
            "peonB%4-2g",
            "peonB%5-2h",
            "torreB%2-1d",
            "reyB%1-1g",
        ],
        jugada:[
            "torreB%2-4d",
            "reinaN%1-4d",
            "torreB%1-4d",
        ]
    },
    {
        colocaciones:[
            "torreN%1-8a",
            "caballoN%1-8b",
            "alfilN%1-8c",
            "reinaN%1-8d",
            "reyN%1-8e",
            "alfilN%2-8f",
            "caballoN%2-8g",
            "torreN%2-8h",
            "peonN%1-7a",
            "peonN%2-7b",
            "peonN%3-7c",
            "peonN%4-7d",
            "peonN%5-7e",
            "peonN%6-7f",
            "peonN%7-7g",
            "peonN%8-7h",
            "peonB%1-2a",
            "peonB%2-2b",
            "peonB%3-2c",
            "peonB%4-2d",
            "peonB%5-2e",
            "peonB%6-2f",
            "peonB%7-2g",
            "peonB%8-2h",
            "torreB%1-1a",
            "caballoB%1-1b",
            "alfilB%1-1c",
            "reinaB%1-1d",
            "reyB%1-1e",
            "alfilB%2-1f",
            "caballoB%2-1g",
            "torreB%2-1h",
        ],
        jugada:[
            "peonB%5-4e",
            "peonN%6-6f",
            "peonB%4-4d",
            "peonN%7-5g",
            "reinaB%1-5h"
        ]
    },
    {
        colocaciones:[
            "torreN%1-8a",
            "caballoN%1-8b",
            "alfilN%1-8c",
            "reinaN%1-8d",
            "reyN%1-8e",
            "alfilN%2-8f",
            "caballoN%2-8g",
            "torreN%2-8h",
            "peonN%1-7a",
            "peonN%2-7b",
            "peonN%3-7c",
            "peonN%4-7d",
            "peonN%5-7e",
            "peonN%6-7f",
            "peonN%7-7g",
            "peonN%8-7h",
            "peonB%1-2a",
            "peonB%2-2b",
            "peonB%3-2c",
            "peonB%4-2d",
            "peonB%5-2e",
            "peonB%6-2f",
            "peonB%7-2g",
            "peonB%8-2h",
            "torreB%1-1a",
            "caballoB%1-1b",
            "alfilB%1-1c",
            "reinaB%1-1d",
            "reyB%1-1e",
            "alfilB%2-1f",
            "caballoB%2-1g",
            "torreB%2-1h",
        ],
        jugada:[
            "peonB%4-4d",
            "peonN%6-5f",
            "alfilB%1-5g",
            "peonN%8-6h",
            "alfilB%1-4h",
            "peonN%7-5g",
            "peonB%5-4e",
            "peonN%7-4h",
            "reinaB%1-5h"
        ]
    }
];

/**
 * Dificultades disponibles
 * 0 -- Fácil
 * 1 -- Medio
 * 2 -- Difícil
 */
const DIFICULTADES = [
    {
        intentos: 3,
        suma: 2,
        velocidad: 1,
        error: 1,
    },
    {
        intentos: 2,
        suma: 1,
        velocidad: 0.75,
        error: 1,
    },
    {
        intentos: 1,
        suma: 1,
        velocidad: 0.5,
        error: 1,
    }
];



/**
 * Parámetros de la partida:
 * 
 */
let configuracionPartida = {
    dificultad: DIFICULTADES[0],
    intentosRestante: DIFICULTADES[0].intentos,
    aciertos: 0,
    jugadaActual: JUGADAS[JUGADAS.length-1],
    movimientosRealizados: 0,
    movimientosIniciales: 0,
    errores: 0,
    jugadasRealizadas: []
}



//! TODO: VARIABLES /////////////////////////////////////////////



// TODO: MÉTODOS //////////////////////////////////////////////

//$ CONFIGURACIÓN PARTIDA

/**Cambia la dificultad seleccionada por el usuario*/
function cambiarDificultad(value){
    configuracionPartida.dificultad = DIFICULTADES[parseInt(value)];
    configuracionPartida.intentosRestante = DIFICULTADES[parseInt(value)].intentos;
}

//$ PARTIDA

/**
 * Inicia las configuraciones necesarias para empezar la partida.
 */
function iniciarPartida(){
    document.querySelector(".ventana").classList.add("noVer");
    document.querySelector(".inicio").classList.add("noVer");
    document.querySelector(".partida").classList.remove("noVer");
    cambiarJugada();
    document.querySelector("#intentosRestantes").innerText = configuracionPartida.dificultad.intentos;
}

/**
 * Genera el tablero de juego.
 */
function generarTablero(){
    document.querySelector(".tablero").innerHTML = "";
    let linea1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let linea2 = ['8', '7', '6', '5', '4', '3', '2', '1'];
    const TABLERO = document.querySelector(".tablero");
    linea2.forEach((pos2)=>{
        linea1.forEach((pos1)=>{
            const FICHA = document.createElement("div");
            FICHA.classList.add("ficha");
            FICHA.id = pos2 + pos1;
            if((linea1.indexOf(pos1) % 2 != 0 && linea2.indexOf(pos2) % 2 == 0) || linea1.indexOf(pos1) % 2 == 0 && linea2.indexOf(pos2) % 2 != 0){
                FICHA.classList.add("blanca");
            }else{
                FICHA.classList.add("negra");
            }

            FICHA.addEventListener("drop", (ev)=>{
                verificarMovimiento(ev);
            });

            FICHA.addEventListener("dragover", (ev)=>{
                permitirMovimiento(ev);
            });

            TABLERO.appendChild(FICHA);
        })
    });
    situarTablero();
}

/**
 * Situa las fichas iniciales en el tablero según la jugada que se quiere realizar.
 */
function situarTablero(){
    configuracionPartida.jugadaActual.colocaciones.forEach((jugada)=>{
        const CONTENIDO = jugada.split("-");
        const NOMBREPIEZA = CONTENIDO[0].split("%");

        const POSICION = document.getElementById(CONTENIDO[1]);
        const PIEZA = document.createElement("img");
        PIEZA.id = NOMBREPIEZA[0]+NOMBREPIEZA[1];
        
        if(NOMBREPIEZA[0].includes("B")){
            PIEZA.draggable = "true";
            PIEZA.addEventListener("dragstart", (ev)=>{
                cogerFicha(ev)
            });
        }

        PIEZA.src = `./ASSETS/piezas/${NOMBREPIEZA[0]}.png`;
        POSICION.innerHTML = "";
        POSICION.appendChild(PIEZA);
    })
}

/**
 * Muestra los movimientos que debe recrear el jugador.
 */
function replicarMovimientos(){
    const BLOQUEO =  document.querySelector(".bloqueo");
    BLOQUEO.classList.remove("noVer");
    if(configuracionPartida.movimientosIniciales < configuracionPartida.jugadaActual.jugada.length){
        const TIEMPO = configuracionPartida.dificultad.velocidad * 1000;
        const MOVIMIENTO = configuracionPartida.jugadaActual.jugada[configuracionPartida.movimientosIniciales].split("-");
        configuracionPartida.movimientosIniciales++;
        const NOMBREPIEZA = MOVIMIENTO[0].replace("%", "");
        const PIEZA = document.getElementById(NOMBREPIEZA);

        const CASILLA = document.getElementById(MOVIMIENTO[1]);
        CASILLA.innerHTML = "";
        CASILLA.appendChild(PIEZA);
        setTimeout(replicarMovimientos, TIEMPO);
    }else{
        BLOQUEO.classList.add("noVer");
        generarTablero();
    }
}


/**
 * Verifica el movimiento realizado por el jugador.
 * Si es correcto sigue la partida o pasa a la siguiente jugada.
 * Si es incorrecto se aumenta los errores y se reduce los intentos.
 * @param {*} ev - Casilla en la que el jugador quiere dejar la ficha.
 */
function verificarMovimiento(ev){
    const NOMBRECASILLA = (ev.target.id.length > 2)? document.getElementById(ev.target.id).parentElement.id : ev.target.id;
    const NOMBREFICHA = ev.dataTransfer.getData("nombrePieza");
    let MOVIMIENTOACTUAL = configuracionPartida.jugadaActual.jugada[configuracionPartida.movimientosRealizados];
    MOVIMIENTOACTUAL = MOVIMIENTOACTUAL.replace("%", "");
    const MOVIMIENTOREALIZADO = `${NOMBREFICHA}-${NOMBRECASILLA}`;

    if(MOVIMIENTOACTUAL == MOVIMIENTOREALIZADO){
        const POSICION = document.getElementById(NOMBRECASILLA);
        const PIEZA = document.getElementById(NOMBREFICHA);
        POSICION.innerHTML = "";
        POSICION.appendChild(PIEZA);
        configuracionPartida.movimientosRealizados++;

        anadirHistorico(1, NOMBREFICHA, NOMBRECASILLA);

        if(configuracionPartida.movimientosRealizados == configuracionPartida.jugadaActual.jugada.length){
            aumentarAciertos();
        }else{
            movimientoAutomatico();
        }
        
    }else{
        aumentarErrores();
    }
}

/**
 * Reproduce el siguiente movimiento requerido por las fichas negras.
 */
function movimientoAutomatico(){
    let MOVIMIENTOACTUAL = configuracionPartida.jugadaActual.jugada[configuracionPartida.movimientosRealizados].split("-");
    const NOMBREPIEZA = MOVIMIENTOACTUAL[0].replace("%", "");
    const NOMBRECASILLA = MOVIMIENTOACTUAL[1];

    const PIEZA = document.getElementById(NOMBREPIEZA);
    const CASILLA = document.getElementById(NOMBRECASILLA);
    CASILLA.innerHTML = "";
    CASILLA.appendChild(PIEZA);

    anadirHistorico(2, NOMBREPIEZA, NOMBRECASILLA);
    configuracionPartida.movimientosRealizados++
}

/**
 * Previene la acción predefinida.
 * @param {*} ev - Captura el elemento del evento.
 */
function permitirMovimiento(ev){
    ev.preventDefault();
}

/**
 * Obtiene la ficha que se quiere mover.
 * @param {*} ev - Captura el elemento del evento. 
 */
function cogerFicha(ev){
    ev.dataTransfer.setData("nombrePieza", ev.target.id);
}

/**
 * Aumenta la cantidad de errores y reduce los intentos de juego según la dificultad.
 */
function aumentarErrores(){
    configuracionPartida.errores++;
    configuracionPartida.intentosRestante -= configuracionPartida.dificultad.error;
    document.getElementById("errores").innerText = configuracionPartida.errores;
    document.getElementById("intentosRestantes").innerText = configuracionPartida.intentosRestante;

    if(configuracionPartida.intentosRestante < 1){
        gameOver();
    }
}

/**
 * Cambia la jugada que se debe repoducir aleatoriamente.
 * 
 */
function cambiarJugada(){
    let encontrada = false;
    while(!encontrada){
        const RANDOM = Math.floor(Math.random() * JUGADAS.length);
        if(!configuracionPartida.jugadasRealizadas.includes(RANDOM)){
            configuracionPartida.jugadaActual = JUGADAS[RANDOM];
            configuracionPartida.jugadasRealizadas.push(RANDOM);
            encontrada = true; 
        }
    }
    document.querySelector(".contenido-historico").innerHTML = "";
    configuracionPartida.movimientosIniciales = 0;
    configuracionPartida.movimientosRealizados = 0;
    generarTablero();
    setTimeout(replicarMovimientos, configuracionPartida.dificultad.velocidad * 1000);
}

/**
 * Aumenta los aciertos del jugador.
 * Si ha llegado a 5 muestra la ventana de victoria.
 * Si no, cambia de jugada y aumenta el tiempo.
 */
function aumentarAciertos(){
    configuracionPartida.aciertos++;
    const ACIERTOS = document.getElementById("aciertos");
    ACIERTOS.innerText = configuracionPartida.aciertos;

    if(configuracionPartida.aciertos == 5){
        victoria();
    }else{
        configuracionPartida.intentosRestante += configuracionPartida.dificultad.suma;
        document.getElementById("intentosRestantes").innerText = configuracionPartida.intentosRestante;
        cambiarJugada();
    }
}

/**
 * Añade un histórico de los movimientos realizados por el jugador.
 * @param {number} jugador - Determina si es el jugador 1 o 2. 
 * @param {string} pieza - Nombre de la pieza. 
 * @param {string} posicion - Posición a la que se ha movido la pieza.
 */
function anadirHistorico(jugador, pieza, posicion){
    const HISTORICO = document.querySelector(".contenido-historico");
    const PARRAFO = document.createElement("p");
    
    const SPAN = document.createElement("span");
    SPAN.innerText = (jugador == 1)? "Tu" : "Bot";
    SPAN.classList.add((jugador == 1)? "pj1" : "pj2");
    PARRAFO.appendChild(SPAN);
    PARRAFO.innerHTML += ` ${pieza} &#x2192; ${posicion}`;

    HISTORICO.appendChild(PARRAFO);
}

/**
 * Muestra la ventana de victoria
 */
function victoria(){
    document.querySelector(".ventana").classList.remove("noVer");
    document.querySelector("#mensajeTitulo").innerText = "Enhorabuena!";
    document.querySelector("#mensajeTxt").innerText = "Has superado con exito el reto...";
    document.querySelector("#intentosFinales").innerText = configuracionPartida.intentosRestante;
    document.querySelector("#erroresFinales").innerText = configuracionPartida.errores;
    restaurarValores();
}

/**
 * Muestra la ventana de derrota.
 */
function gameOver(){
    document.querySelector(".ventana").classList.remove("noVer");
    document.querySelector("#mensajeTitulo").innerText = "La proxima será!";
    document.querySelector("#mensajeTxt").innerText = "Casi lo consigues...";
    document.querySelector("#intentosFinales").innerText = configuracionPartida.intentosRestante;
    document.querySelector("#erroresFinales").innerText = configuracionPartida.errores;
    restaurarValores();
}

/**
 * Restaura la configuración de la partida a los parámetros iniciales.
 */
function restaurarValores(){
    configuracionPartida.intentosRestante = configuracionPartida.dificultad.intentos;
    configuracionPartida.aciertos = 0;
    configuracionPartida.movimientosRealizados = 0;
    configuracionPartida.movimientosIniciales = 0;
    configuracionPartida.errores = 0;
    configuracionPartida.jugadasRealizadas = [];
    document.getElementById("aciertos").innerText = "0";
    document.getElementById("errores").innerText = "0";
}


/**
 * Vuelve a la pantalla de seleccion.
 */
function volver(){
    document.querySelector(".ventana").classList.add("noVer");
    document.querySelector(".inicio").classList.remove("noVer");
    document.querySelector(".partida").classList.add("noVer");
}

//! TODO: MÉTODOS //////////////////////////////////////////////

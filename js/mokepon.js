let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let selectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    selectionSeleccionarAtaque.style.display = 'none'

    let selectionReiniciar = document.getElementById('reiniciar')
    selectionReiniciar.style.display = 'none'



    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert("No ha elegido mascotas")
        return
    }

    let selectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    selectionSeleccionarAtaque.style.display = 'flex'

    let selectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    selectionSeleccionarMascota.style.display = 'none'
    
    seleccionMascotaEnemigo()
}

function seleccionMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    AtaqueEnemigoAleatorio()
}


function ataqueAgua() {
    ataqueJugador = "AGUA"
    AtaqueEnemigoAleatorio()
}


function ataqueTierra() {
    ataqueJugador = "TIERRA"
    AtaqueEnemigoAleatorio()
}

function AtaqueEnemigoAleatorio() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}
 
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function combate() {

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador) {
        crearMensajes("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensajes("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensajes("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensajes("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensajes("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasJugador === 0) {
        crearMensajeFinal("LO SIENTO! PERDISTE CHUCHA 🤣👎🏻")
    } else if (vidasEnemigo === 0) {
        crearMensajeFinal("FELICITACIONES!,MUY PRO PRO PARCE 🥳👍🏻:)")
    }
}

function crearMensajes(resultado) {
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    notificacion.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    /* let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota de tu enemigo ataco con " + ataqueEnemigo + " - " + resultado */

    sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFInal) {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFInal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    sectionMensajes.appendChild(parrafo)

    let selectionReiniciar = document.getElementById('reiniciar')
    selectionReiniciar.style.display = 'block'

}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)
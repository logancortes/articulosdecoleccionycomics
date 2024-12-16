// Referencia al audio de Mario 

// Obtener el evento de click
const reproducirAudioMarioQueVaALaIzquierda = document.getElementById("mario");
const reproducirAudioMarioQueVaALaDerecha = document.getElementById("mario-izquierda");


// Crear objeto Audio Mario va a la izquierda
const audio = new Audio("Audios/mario-bros-woo-hoo.mp3");

// Agregar evento de clic al elemento de la imagen
reproducirAudioMarioQueVaALaIzquierda.addEventListener("click", function() {
    audio.play();
});

// Crear objeto Audio Mario va a la derecha
const audio2 = new Audio("Audios/mario-bros-mamma-mia.mp3");

// Agregar evento de clic al elemento de la imagen
reproducirAudioMarioQueVaALaDerecha.addEventListener("click", function() {
    audio2.play();
});







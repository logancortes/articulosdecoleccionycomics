// Referencia al icono audio comic Batman Begins

// Obtener el evento de click
const reproducirComicBatmanBegins = document.getElementById("reproducir-comic-batman-begins");
const pararComicBatmanBegins = document.getElementById("parar-comic-batman-begins");
const textoComicBatmanBegins = document.getElementById("texto-audio-comic-batman-begins");


// Crear objeto Audio
const audio = new Audio("Audios/08 - Antrozous.mp3");

// Agregar evento de clic al elemento de la imagen
reproducirComicBatmanBegins.addEventListener("click", function() {
  
  if (audio.paused) {
    audio.play();
    reproducirComicBatmanBegins.setAttribute('src', 'imgs/icono sonido pausa 64px.png');
    textoComicBatmanBegins.style.display = 'block';
  } else {
    audio.pause();
    reproducirComicBatmanBegins.setAttribute('src', 'imgs/icono sonido 64px.png');
    pararComicBatmanBegins.style.display = 'none';
    textoComicBatmanBegins.style.display = 'none';
  }

});








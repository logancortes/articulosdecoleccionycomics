
marioIzquierda.addEventListener("click", () => {
  // Código para mover a Mario
  console.log("Clic Mario Izquierda activado.");
  let minX = 0; // Posición cuando Mario ya llegue a la izquierda
  const intervalo2 = setInterval(() => {
    if (izquierda <= minX) {
      clearInterval(intervalo2); // Detener la animación
      marioIzquierda.style.display = "none";
      mario.style.display = "block";
      mario.style.left = izquierda + "px";
      console.log("Valor de Izquierda MarioIzquierda: " + izquierda);
    } else {
      izquierda -= 5; // Reducir la posición de Mario a la derecha
      marioIzquierda.style.left = izquierda + "px"; // Actualizar la posición de Mario
    }
  }, 10); // Ejecutar la función cada 10 milisegundos
});


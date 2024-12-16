const mario = document.getElementById("mario");
const marioIzquierda = document.getElementById("mario-izquierda");
let izquierda = 0; // Posición inicial de Mario a la izquierda

mario.addEventListener("click", () => {
  // Código para mover a Mario
  console.log("Clic Mario activado.");
  const intervalo = setInterval(() => {
    if (izquierda >= window.innerWidth - mario.width) {
      clearInterval(intervalo); // Detener la animación
      mario.style.display = "none";
      marioIzquierda.style.display = "block";
      marioIzquierda.style.left = izquierda + "px";
      console.log("Valor de Izquierda Mario: " + izquierda);
    } else {
      izquierda += 5; // Incrementar la posición de Mario
      mario.style.left = izquierda + "px"; // Actualizar la posición de Mario
    }
  }, 10); // Ejecutar la función cada 10 milisegundos
});



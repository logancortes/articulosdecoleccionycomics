const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const enviar = document.getElementById('btn-enviar');

enviar.addEventListener('click', validarCampos);

function validarCampos() {
  // Validar nombre y apellido
  if (nombre.value === '') {
    alert('Por favor ingrese su nombre');
    nombre.focus();
    return false;
  }

  if (apellido.value === '') {
    alert('Por favor ingrese su apellido');
    apellido.focus();
    return false;
  }
  
  // Validar email
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegEx.test(email.value)) {
    alert('Por favor ingrese un email válido');
    email.focus();
    return false;
  }

  // Validar mensaje
  if (mensaje.value === '') {
    alert('Por favor ingrese su mensaje');
    mensaje.focus();
    return false;
  }

  // Si se llega a este punto, todos los campos son válidos
  alert('Formulario enviado correctamente');
  return true;
}

/*

Explicación de la expresión regular:

 ^ - Indica el inicio de la cadena de texto.
[^\s@]+ - Corresponde a uno o más caracteres que no sean espacios en blanco ni el símbolo "@".
@ - Corresponde al símbolo "@".
[^\s@]+\. - Corresponde a uno o más caracteres que no sean espacios en blanco ni el símbolo "@" seguidos de un punto.
[^\s@]+$ - Corresponde a uno o más caracteres que no sean espacios en blanco ni el símbolo "@" hasta el final de la cadena de texto.
$ - Indica el final de la cadena de texto.
*/
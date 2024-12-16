// Obtener el contenedor del menú
const menuContenedor = document.getElementById('menu-contenedor');

// Cargar el contenido del archivo menu.html
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    // Insertar el contenido del menú en el contenedor
    menuContenedor.innerHTML = data;
  });

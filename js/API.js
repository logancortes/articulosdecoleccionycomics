const API = require('dotenv').config();

const publicKey = '1015f67bb88ccaebff84774b0b2739fa';
const privateKey = process.env.MARVEL_API_KEY
const textoFuenteAPI = document.getElementById('texto-API-personajes-marvel');

const boton = document.getElementById('btn-personajes-marvel');
boton.addEventListener('click', () => {
  console.log("Clic API activado.");
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey);
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
            console.log(data);
            // Obtener el array de personajes
            const personajes = data.data.results;
            // Obtener el elemento <ul> de página coleccionables
            const listaPersonajes = document.getElementById('lista-personajes');
            // Iterar sobre el array de personajes
            personajes.forEach(personaje => {
                // Crear un elemento <li> y agregar el nombre del personaje
                const objetoPersonaje = document.createElement('li');
                objetoPersonaje.textContent = personaje.name;
                //objetoPersonaje.textContent = personaje.description;
                // Agregar el <li> creado al <ul> de tu página HTML
                listaPersonajes.appendChild(objetoPersonaje);
                textoFuenteAPI.style.display = 'block';
            });
         
        }
     )
    .catch(error => console.error(error));
});




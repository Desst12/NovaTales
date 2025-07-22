// Botón para cambiar de tema

const btn = document.getElementById('switch-theme');
let futuristaActiva = false;

// Cambiar imagenes en el portafolio

const img1 = document.getElementById('img-1');
const title1 = document.getElementById('title-1');
const desc1 = document.getElementById('desc-1');

const img2 = document.getElementById('img-2');
const title2 = document.getElementById('title-2');
const desc2 = document.getElementById('desc-2');

const img3 = document.getElementById('img-3');
const title3 = document.getElementById('title-3');
const desc3 = document.getElementById('desc-3');

// Recursos medievales

const medievalData = [
  {
    img: 'Images/portafolio-1.png',
    title: 'El guardián de las llanuras',
    desc: 'Una vigía ancestral custodiando secretos olvidados.'
  },
  {
    img: 'Images/portafolio-3.png',
    title: 'Alaescarcha, el dragón',
    desc: 'Coloso alado surgido de los hielos eternos.'
  },
  {
    img: 'Images/portafolio-5.png',
    title: 'Espadas de cristal',
    desc: 'Forjadas con magia pura y antiguas leyendas.'
  }
];

// Recursos futuristas

const futuristaData = [
  {
    img: 'Images/portafolio-2.png',
    title: 'Centinela de las Nubes Digitales',
    desc: 'Una IA protectora de datos ancestrales.'
  },
  {
    img: 'Images/portafolio-4.png',
    title: 'CRYO-X: Unidad Dracónica',
    desc: 'Drone de asalto de criogenia avanzada.'
  },
  {
    img: 'Images/portafolio-6.png',
    title: 'Lanzas de Fotones',
    desc: 'Armas energéticas forjadas en campos de plasma.'
  }
];


// Función para no repetir datos

function aplicarDatos(data) {
  img1.src = data[0].img;
  title1.textContent = data[0].title;
  desc1.textContent = data[0].desc;

  img2.src = data[1].img;
  title2.textContent = data[1].title;
  desc2.textContent = data[1].desc;

  img3.src = data[2].img;
  title3.textContent = data[2].title;
  desc3.textContent = data[2].desc;
}

// Botón

btn.addEventListener('click', () => {
  futuristaActiva = !futuristaActiva;
  document.body.classList.toggle('futurista');

  if (futuristaActiva) {
    btn.textContent = 'Cambio de modo';
    aplicarDatos(futuristaData);
  } else {
    btn.textContent = 'Cambio de modo';
    aplicarDatos(medievalData);
  }
});


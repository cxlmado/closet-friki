const miembros = [
  { nombre: 'cxlmado', avatar: 'img/avatar1.jpg' },
  { nombre: 'Diego', avatar: 'img/avatar2.jpg' },
  { nombre: 'Scofield', avatar: 'img/avatar3.jpg' },
  { nombre: 'Rayo', avatar: 'img/avatar4.jpg' },
  { nombre: 'Skr', avatar: 'img/avatar5.jpg' }
];

// Generar HTML dinámicamente
const lista = document.querySelector('.lista-miembros');

miembros.forEach(miembro => {
  const div = document.createElement('div');
  div.classList.add('miembro');

  div.innerHTML = `
    <img src="${miembro.avatar}" alt="${miembro.nombre}">
    <h2>${miembro.nombre}</h2>
    <div class="secciones-miembro">
      <h3>Mejores Puntuados</h3>
      <ul class="mejores-puntuados"></ul>

      <h3>Completados Viendo</h3>
      <ul class="completados-viendo"></ul>

      <h3>En Lista</h3>
      <ul class="en-lista"></ul>
    </div>
  `;

  lista.appendChild(div);
});

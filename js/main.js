function abrirDetalle(nombre) {
  // Guardamos la serie en localStorage para pasarla a la página de detalle
  localStorage.setItem('serieSeleccionada', nombre);
  window.location.href = 'detalles.html';
}

// Al cargar detalles.html
window.addEventListener('DOMContentLoaded', () => {
  const nombre = localStorage.getItem('serieSeleccionada');
  if (nombre) {
    document.getElementById('detalle-titulo').innerText = nombre;
    document.getElementById('detalle-img').src = `img/${nombre.toLowerCase().replace(/ /g, '')}.jpg`;

    // Aquí se podrían cargar calificaciones de forma dinámica
    const calificaciones = [
      {nombre: 'Ro', nota: 9},
      {nombre: 'Anne', nota: 10}
    ];

    const lista = document.getElementById('lista-calificaciones');
    calificaciones.forEach(c => {
      const li = document.createElement('li');
      li.textContent = `${c.nombre} - ${c.nota}/10`;
      lista.appendChild(li);
    });
  }
});

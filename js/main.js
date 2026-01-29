// Abrir detalles de la serie
function abrirDetalle(nombre) {
  localStorage.setItem('serieSeleccionada', nombre);
  window.location.href = 'detalle.html';
}

// Cargar detalles en detalle.html
window.addEventListener('DOMContentLoaded', () => {
  const detalleTitulo = document.getElementById('detalle-titulo');
  const detalleImg = document.getElementById('detalle-img');
  const listaCalificaciones = document.getElementById('lista-calificaciones');

  if (detalleTitulo && detalleImg && listaCalificaciones) {
    const nombre = localStorage.getItem('serieSeleccionada');
    if (nombre) {
      detalleTitulo.innerText = nombre;
      detalleImg.src = `img/${nombre.toLowerCase().replace(/ /g, '')}.jpg`;

      const calificaciones = [
        {nombre: 'Ro', nota: 9},
        {nombre: 'Anne', nota: 10},
        {nombre: 'Miembro3', nota: 8}
      ];

      calificaciones.forEach(c => {
        const li = document.createElement('li');
        li.textContent = `${c.nombre} - ${c.nota}/10`;
        listaCalificaciones.appendChild(li);
      });
    }
  }
});

// Funcionalidad de tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const miembro = button.dataset.miembro;

    // Activar botón
    tabButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    // Mostrar contenido del miembro
    tabContents.forEach(content => {
      if (content.id === miembro) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});

// Activar primer miembro al cargar
document.addEventListener('DOMContentLoaded', () => {
  tabButtons[0].click();
});

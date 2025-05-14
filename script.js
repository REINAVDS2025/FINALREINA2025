const form = document.getElementById('votingForm');
const sheetURL = 'https://script.google.com/macros/s/AKfycbzR8vXTVQdLB1Lj4OwUgZt2ewyM23Jx1nT6W9IGCXTVZglkTET9FJ8H7GeIDBwtESWx/exec';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validar si ya votó
  if (document.cookie.includes('votado=true')) {
    alert("¡Gracias por participar! Tu voto ya ha sido registrado. Solo se permite un voto por persona.");
    return;
  }

  const candidata = document.querySelector('input[name="candidata"]:checked');
  if (!candidata) {
    alert("Selecciona una candidata antes de votar.");
    return;
  }

  // Enviar el voto
  fetch(sheetURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `voto=${encodeURIComponent(candidata.value)}`
  });

  // Guardar cookie para evitar otro voto
  document.cookie = "votado=true; max-age=" + (60 * 60 * 24 * 30); // 30 días

  // Redirigir a la página de agradecimiento
  window.location.href = "gracias.html";
});

const form = document.getElementById('votingForm');
const sheetURL = 'https://script.google.com/macros/s/AKfycbz-I5wJROiVC6yx6Lr98rsRFOKQugH50Nm6O_eSw-Qso3QUJMQDlGikRXIUbZZSHE7_nA/exec';

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

  fetch(sheetURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `voto=${encodeURIComponent(candidata.value)}`
  });

  document.cookie = "votado=true; max-age=" + (60 * 60 * 24 * 30); // 30 días
  alert("¡Gracias por tu voto!");
  form.reset();
});

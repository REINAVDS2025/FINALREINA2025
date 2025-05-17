document.getElementById("votingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Validar si ya votó
  if (document.cookie.includes("votado=true")) {
    alert("¡Gracias por participar! Tu voto ya ha sido registrado. Solo se permite un voto por persona.");
    return;
  }

  const seleccion = document.querySelector('input[name="candidata"]:checked');
  if (!seleccion) return alert("Selecciona una candidata.");

  const voto = seleccion.value;

  const urls = [
    "https://script.google.com/macros/s/AKfycbzcuA6W3UERKn0cIIsuTPZkZx2iIqL89VOsDfubUUfTxXgkacUphgX67NQH-2Wd-lI8xA/exec",
    "https://script.google.com/macros/s/AKfycbzpNcPpgx807b8QMW11RWatvjWyTqCCJ00o4x42yyHR3qcxivZfvvNSmoLIw1BDjlh8/exec",
    "https://script.google.com/macros/s/AKfycbxDUA7eV2TSdO-MAWp4S7YCstoS4LKylkuTUQ_a2z7Dvr3Mp2p3KQzoyz02RkWZmW7I/exec",
    "https://script.google.com/macros/s/AKfycbyzvNn27Dgg5nf4ZpPni10iq3MoIshJUoT_qGFk4zKB8thDmlChBgWeW0ZtnniUt48p/exec",
    "https://script.google.com/macros/s/AKfycbyrtI9nAkDALmDAxiomfIExhcNgok6BmWkrHiDWKHkQwYVdwOEc1MSNvAWky5mYlJKJ/exec",
    "https://script.google.com/macros/s/AKfycbyz53OOKxgMndso-gDxH54iT5zTuq88GtENq_Qt3sFd8grnbRr1Lji3ifgz7yxrE2rKdA/exec"
  ];

  const url = urls[Math.floor(Math.random() * urls.length)];

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `voto=${encodeURIComponent(voto)}`
  });

  document.cookie = "votado=true; max-age=" + (60 * 60 * 24 * 30); // 30 días
  window.location.href = "gracias.html";
});

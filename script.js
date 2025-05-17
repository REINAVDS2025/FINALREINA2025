document.getElementById("votingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Revisar si ya votó — se bloquea el voto doble sin alertas
  if (document.cookie.includes("votado=true")) {
    window.location.href = "gracias.html";
    return;
  }

  const seleccion = document.querySelector('input[name="candidata"]:checked');
  if (!seleccion) {
    alert("Selecciona una candidata.");
    return;
  }

  const voto = seleccion.value;

  const urls = [
    "https://script.google.com/macros/s/AKfycbzcuA6W3UERKn0cIIsuTPZkZx2iIqL89VOsDfubUUfTxXgkacUphgX67NQH-2Wd-lI8xA/exec",
    "https://script.google.com/macros/s/AKfycbzpNcPpgx807b8QMW11RWatvjWyTqCCJ00o4x42yyHR3qcxivZfvvNSmoLIw1BDjlh8/exec",
    "https://script.google.com/macros/s/AKfycbwFWi1p_b5MrKPY15FSXSuz5Dxso1Oyfj0WqX39wEV7I21PtaEU07EKsEZypXyuBn2O/exec",
    "https://script.google.com/macros/s/AKfycbyzvNn27Dgg5nf4ZpPni10iq3MoIshJUoT_qGFk4zKB8thDmlChBgWeW0ZtnniUt48p/exec",
    "https://script.google.com/macros/s/AKfycbyrtI9nAkDALmDAxiomfIExhcNgok6BmWkrHiDWKHkQwYVdwOEc1MSNvAWky5mYlJKJ/exec",
    "https://script.google.com/macros/s/AKfycbyz53OOKxgMndso-gDxH54iT5zTuq88GtENq_Qt3sFd8grnbRr1Lji3ifgz7yxrE2rKdA/exec"
  ];

  const url = urls[Math.floor(Math.random() * urls.length)];

  // Enviar el voto
  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `voto=${encodeURIComponent(voto)}`
  });

  // Guardar cookie para bloquear múltiples votos
  document.cookie = "votado=true; max-age=" + (60 * 60 * 24 * 30); // 30 días

  // Redirigir directamente a gracias
  window.location.href = "gracias.html";
});

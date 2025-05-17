document.getElementById('votingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const candidata = form.candidata.value;

  if (!candidata) {
    alert("Por favor selecciona una candidata.");
    return;
  }

  // URLs de los endpoints
  const urls = [
    "https://script.google.com/macros/s/AKfycbzcuA6W3UERKn0cIIsuTPZkZx2iIqL89VOsDfubUUfTxXgkacUphgX67NQH-2Wd-lI8xA/exec",
    "https://script.google.com/macros/s/AKfycbzpNcPpgx807b8QMW11RWatvjWyTqCCJ00o4x42yyHR3qcxivZfvvNSmoLIw1BDjlh8/exec",
    "https://script.google.com/macros/s/AKfycbwFWi1p_b5MrKPY15FSXSuz5Dxso1Oyfj0WqX39wEV7I21PtaEU07EKsEZypXyuBn2O/exec",
    "https://script.google.com/macros/s/AKfycbyzvNn27Dgg5nf4ZpPni10iq3MoIshJUoT_qGFk4zKB8thDmlChBgWeW0ZtnniUt48p/exec",
    "https://script.google.com/macros/s/AKfycbyrtI9nAkDALmDAxiomfIExhcNgok6BmWkrHiDWKHkQwYVdwOEc1MSNvAWky5mYlJKJ/exec",
    "https://script.google.com/macros/s/AKfycbyz53OOKxgMndso-gDxH54iT5zTuq88GtENq_Qt3sFd8grnbRr1Lji3ifgz7yxrE2rKdA/exec"
  ];

  // Selección aleatoria de una URL
  const endpoint = urls[Math.floor(Math.random() * urls.length)];

  // Enviar voto (formato x-www-form-urlencoded)
const formData = new URLSearchParams();
formData.append("voto", candidata);

fetch(endpoint, {
  method: "POST",
  body: formData,
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
})
.then(response => {
  if (response.ok) {
    document.cookie = "votado=true; max-age=31536000"; // Cookie por 1 año
    window.location.href = "gracias.html";
  } else {
    throw new Error("Respuesta no OK");
  }
})
.catch(error => {
  alert("Error al registrar el voto. Intenta de nuevo.");
  console.error("Error:", error);
});
});

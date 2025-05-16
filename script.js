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
    "https://script.google.com/macros/s/AKfycbyN-9IjGJ_B2FgJYgI43IBvAvQu-GYa-B5Hx8LgMfUrAlaVV8AfWuM2LbjB-JsTZAoAqA/exec",
    "https://script.google.com/macros/s/AKfycbwOVFeXMXteDtxqtfFdgTaW57PyvL2HecVGac5VPsVAc-xG-mqFjv4gaifdrTjIRKS8/exec",
    "https://script.google.com/macros/s/AKfycbzTkqt73RNbgzZSsDe99GRzULuJktBSFUCWOshBWdhU8Z0lUcan7q-dR--Usm71_Kub/exec",
    "https://script.google.com/macros/s/AKfycbxkiWDuodOSjobjRnPHpUNcgNZDa29GyQTo1Qw9qANUurrp_0MG4sCNHilKEHZnQxv1/exec",
    "https://script.google.com/macros/s/AKfycbwGd8O_mOV-TBnaWeJDc_9EIFgCs-TJqQo3necRnXkiECOJcugjwThcsRkjNQ2uNQYG/exec",
    "https://script.google.com/macros/s/AKfycbw5bhPuuEiif8STDDHgHa76bPhngBS9l2MhH8wS8ebeLoAbMch4OPdBOrFGxvmrsz1CvA/exec"
  ];

  // Selección aleatoria de una URL
  const endpoint = urls[Math.floor(Math.random() * urls.length)];

  // Enviar voto
  fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({ candidata }),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => {
      document.cookie = "votado=true; max-age=31536000"; // Cookie por 1 año
      window.location.href = "gracias.html";
    })
    .catch(error => {
      alert("Error al registrar el voto. Intenta de nuevo.");
      console.error("Error:", error);
    });
});

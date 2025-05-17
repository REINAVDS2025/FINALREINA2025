document.getElementById("votingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Bloquear si ya votó
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
    "https://script.google.com/macros/s/AKfycbyN-9IjGJ_B2FgJYgI43IBvAvQu-GYa-B5Hx8LgMfUrAlaVV8AfWuM2LbjB-JsTZAoAqA/exec",
    "https://script.google.com/macros/s/AKfycbwOVFeXMXteDtxqtfFdgTaW57PyvL2HecVGac5VPsVAc-xG-mqFjv4gaifdrTjIRKS8/exec",
    "https://script.google.com/macros/s/AKfycbzTkqt73RNbgzZSsDe99GRzULuJktBSFUCWOshBWdhU8Z0lUcan7q-dR--Usm71_Kub/exec",
    "https://script.google.com/macros/s/AKfycbxkiWDuodOSjobjRnPHpUNcgNZDa29GyQTo1Qw9qANUurrp_0MG4sCNHilKEHZnQxv1/exec",
    "https://script.google.com/macros/s/AKfycbwGd8O_mOV-TBnaWeJDc_9EIFgCs-TJqQo3necRnXkiECOJcugjwThcsRkjNQ2uNQYG/exec",
    "https://script.google.com/macros/s/AKfycbw5bhPuuEiif8STDDHgHa76bPhngBS9l2MhH8wS8ebeLoAbMch4OPdBOrFGxvmrsz1CvA/exec"
  ];

  const url = urls[Math.floor(Math.random() * urls.length)];

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `voto=${encodeURIComponent(voto)}`
  });

  // Poner cookie correctamente (en todo el sitio)
  document.cookie = "votado=true; max-age=" + (60 * 60 * 24 * 30) + "; path=/";

  // Redirigir a "gracias"
  window.location.href = "gracias.html";
});

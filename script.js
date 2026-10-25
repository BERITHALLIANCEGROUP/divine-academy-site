document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function () {
      const button = form.querySelector('button[type="submit"]');

      if (button) {
        button.textContent = "Envoi en cours...";
      }
    });
  }
});

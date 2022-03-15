document.addEventListener("DOMContentLoaded", (event) => {
  let button = document.getElementById("button");
  let compteur = document.getElementById("compteur");
  let counterVal = 0;

  button.addEventListener("click", function addone() {
    compteur.innerHTML = ++counterVal;
  });
});

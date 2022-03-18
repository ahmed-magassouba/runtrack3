document.addEventListener("DOMContentLoaded", (event) => {
  let input = document.querySelectorAll("input");
  let p = document.querySelectorAll("p");


  let regexUpperCase= /[a-z]{1,}/;
  let regexLowerCase= /[A-Z]{1,}/;
  let regexNumber = /[0-9]{1,}/;

  input[0].addEventListener("keyup", function () {
    console.log(this.value);
    if (this.value.length === 0) {
      champVide(input[0], p[0], "le champ nom est vide");
    } else if (this.value.length <= 1) {
      p[0].innerHTML = "Le champ nom doit contenir plus de 3 lettres";
      p[0].style.color = "red";
      input[0].style.color = "red";
      input[0].style.borderColor = "red";
    } else {
      ok(input[0], p[0], "le champ nom est vide");
    }
  });

  input[1].addEventListener("keyup", function () {
    console.log(this.value);
    if (this.value.length === 0) {
      champVide(input[1], p[1], "le champ nom est vide");
    } else if (this.value.length <= 3) {
      p[1].innerHTML = "Le champ nom doit contenir plus de 3 lettres";
      p[1].style.color = "red";
      input[1].style.color = "red";
      input[1].style.borderColor = "red";
    } else {
      ok(input[1], p[1], "le champ prénom est vide");
    }
  });

  function champVide(champ, paragraphe, message) {
    paragraphe.innerHTML = message;
    paragraphe.style.color = "red";
    champ.style.borderColor = "red";
  }

  function ok(champ, paragraphe) {
    paragraphe.innerHTML = "";
    champ.style.borderColor = "green";
    champ.style.color = "green";
  }
});

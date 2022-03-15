document.addEventListener("DOMContentLoaded", (event) => {
  
  let b = document.body;

  let article = document.createElement("article");
  article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

  b.prepend(article);
  // prepend Ajoute l'article comme premier element du body
  // append Ajoute l'article comme dernier element du body
  //appendChild() de l’interface Node qui permet d’ajouter un nœud en tant que dernier enfant d’un nœud parent

  article.style.display = "none";

  let button = document.getElementById("button");

  button.addEventListener("click", function showhide() {

    if (article.style.display == "none") {

      article.style.display = "block";

    } else {

      article.style.display = "none";

    }

  });
});

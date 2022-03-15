// document.addEventListener("DOMContentLoaded", (event) => {
//   let footer = document.querySelector("footer");

//   let couleur = "red";

//   document.addEventListener("scroll", (event) => {
//     console.log(event);
//     let scrollTaille = 3516;
//     let scrollPosition = event.target.scrollingElement.scrollTop;

//     if (scrollPosition < scrollTaille) {
//       console.log(event.target.scrollingElement.scrollTop);
//       footer.style.backgroundColor = couleur;
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", (event) => {

  const footer = document.querySelector("footer");

  window.addEventListener("scroll", () => {

    var y = window.scrollY;
    let pourcentage = Math.round((y * 100 / 3516));

    if(pourcentage > 10 && pourcentage < 25) {

      footer.className = 'red';
    }
    else if(pourcentage > 25 && pourcentage < 50){

      footer.className = 'yellow';
    }
    else if(pourcentage > 50 && pourcentage < 75){

      footer.className = 'orange';
    }
    else if(pourcentage > 75 && pourcentage <= 100){

      footer.className = 'black';
    }
    else{

      footer.className = 'red';
    }

    
  })
});


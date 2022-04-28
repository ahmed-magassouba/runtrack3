document.addEventListener("DOMContentLoaded", (event) => {
  let btn1 = document.getElementById("btn1");
  let jumbo = document.getElementById("jumbo");
  let citations = [
    "Eldon Tyrell : Le commerce est notre seul but chez Tyrell. ...",
    "Leon Kowalski : T'endors pas, c'est l'heure de mourir.",
    "Roy Batty : Quelle expérience de vivre dans la peur ! ...",
    "Roy Batty : J'ai vu tant de choses que vous, humains, ne pourriez pas croire. ...",
    "Gaff : Dommage qu'elle doive mourir, mais c'est notre lot à tous.",
  ];

  console.log(citations);

  btn1.addEventListener("click", function () {
    jumbo.innerHTML = citations[Math.floor(Math.random() * citations.length)];
  });

  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");
  let page3 = document.getElementById("page3");
  let jumbotron = document.getElementById("jumbotron");
  let img = document.createElement("img");


  page1.addEventListener("click", (event) => {
    img.src = "12.jpg";
    img.style.width = "100%";
    jumbotron.innerHTML = "";
    jumbotron.append(img);
  });

  page2.addEventListener("click", (event) => {
    img.src = "10.jpg";
    img.style.width = "100%";
    jumbotron.innerHTML = "";
    jumbotron.append(img);
  });

  page3.addEventListener("click", (event) => {
    img.src = "11.jpg";
    img.style.width = "100%";
    jumbotron.innerHTML = "";
    jumbotron.append(img);
  });


  let ul = document.querySelectorAll("#ul");
  let listes = ul[0].children;
  console.log(listes)
  for (const liste of listes) {
    liste.addEventListener('click', (event) => {
      liste.classList.add('active');
    })
  }

  let moins = document.getElementById("plus");
  let plus = document.getElementById("moins");
  let progressBar = document.querySelector(".progress-bar");

  let progressNumber = 0;
  plus.addEventListener("click", function () {
    if (progressNumber < 100) {
      progressNumber++;
      progressBar.style.width = progressNumber + "%";
      progressBar.ariaValueNow = progressNumber;
      console.log(progressBar.ariaValueNow)
    }
  })

  moins.addEventListener("click", function () {
    if (progressNumber > 0) {
      progressNumber--;
      progressBar.style.width = progressNumber + "%";
      progressBar.ariaValueNow = progressNumber;
      console.log(progressBar.ariaValueNow);
    }
  })

  let code = 'D'+ 'G'+ 'C';
  let touche = [];

  
  document.addEventListener("keyup", (event) => {
    console.log(event.key);
    touche.push(event.key);
    touche.splice(-code.length - 1, touche.lenth - code.length);
    console.log(touche);
    if(touche.join('').includes(code)){
      console.log('SALUT')
    }

  })

});

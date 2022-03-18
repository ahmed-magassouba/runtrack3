document.addEventListener("DOMContentLoaded", (event) => {
  let input = document.querySelectorAll("input");
  console.log(input);

  let id = input[0];
  console.log(id);

  let name = input[1];
  console.log(name);

  let button = input[2];
  console.log(button);

  let select = document.querySelector("select");

  let type = [];

  let ul = document.querySelector("ul");

  fetch("pokemon.json")
    .then((response) => response.json())
    .then((response) => {
      // console.log(response[0].type[0]);

      for (let i = 0; i < response.length; i++) {
        // console.log(response[i].type.length);

        for (let j = 0; j < response[i].type.length; j++) {
          type.push(response[i].type[j]);
        }
      }

      let final = [...new Set(type)];

      for (let i = 0; i < final.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = final[i];
        select.append(option);
      }
      // console.log(type);
      // console.log(final);
    });

  button.addEventListener("click", (event) => {
    fetch("pokemon.json")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          let newli = document.createElement("li");
          newli.innerHTML =
            "ID : " +
            response[i].id +
            " || " +
            "NAME : " +
            response[i].name.chinese +
            " , " +
            response[i].name.english +
            " , " +
            response[i].name.french +
            " , " +
            response[i].name.japanese +
            " || BASE : " +
            response[i].base.Attack +
            " , " +
            response[i].base.Defense +
            " , " +
            response[i].base.HP +
            " , " +
            response[i].base.Speed;

          ul.append(newli);

          console.log(response[i]);
        }
      });
  });
});

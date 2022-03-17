$(document).ready(function () {
  let melangees = $("#melangees");

  let images = $("img");

  let melangeur = $("button");

  let rangees = $("#rangees");

  // console.log(melangees[0]);

  // console.log(melangeur);

  melangeur.click(function () {
    let melange = melangees[0];
    // console.log(melange.children[2])

    for (let i = 0; i <= melange.children.length; i++) {
      melange.appendChild(melange.children[(Math.random() * i) | 0]);
    }

    // melangees.shuffleChildren();
  });

  // jQuery.fn.shuffleChildren = function () {
  //   let element = this[0];
  //   for (let i = element.children.length; i >= 0; i--) {
  //     element.appendChild(element.children[(Math.random() * i) | 0]);
  //   }
  // };
  images.click(function () {
    let range = rangees[0];
    let valeur = $(this).attr("src");

    for (let i = 0; i < images.length; i++) {
      let src = $(images[i]).attr("src");
      if (src == valeur) {
        console.log(images[i]);

        images[i].append('body');
      }
    }
    range.append(valeur);
    $(this).detach();
  });
});

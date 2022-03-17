$(document).ready(function () {

  let texte ="le $ est un bon élémentmonétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec laclasse pour cacher cet élément.";
  let button = $("#button");
  
  let p = $('<p>').text(texte).appendTo('body').hide();

  let button2=$('<button>').text('Disparraitre').appendTo('body').hide()

  button.click(function () {
    p.show()
    button2.show()
  });

  button2.click(function () {
   $('body').hide()
  });


});

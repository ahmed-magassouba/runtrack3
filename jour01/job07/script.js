function jourtravaille(date) {
 
  jourferier = [
    "01/01/2020",
    "13/04/2020",
    "01/05/2020",
    "08/05/2020",
    "21/05/2020",
    "01/06/2020",
    "14/07/2020",
    "15/08/2020",
    "01/11/2020",
    "11/11/2020",
    "25/12/2020",
  ];

  for (jour of jourferier) {
    if (date == jour) {
      console.log(date + " est un jour ferié ");
    }
  }

  var enter = new Date(date);
 
console.log(enter.toLocaleDateString("fr"))

  if (enter.getDay() == 0 || enter.getDay == 6) {
    console.log("Non "+date + " est un week-end ");
  }else{
    console.log("Oui "+date + " est un jour travaillé "); 
  }
}

jourtravaille("5/10/2020");

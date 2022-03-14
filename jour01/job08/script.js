function sommenombrespremiers(nbre1, nbre2) {

  if (nbre1 > 2 && nbre2 > 2) {

    var value1 = true
    var value2 = true

    for (let i = 2; i < nbre1; i++) {
      if (nbre1 % i == 0) {
        console.log(false);
        value1 = false
      }
    }

    for (let j = 2; j < nbre2; j++) {
      if (nbre2 % j == 0) {
        console.log("false");
        value2 = false
      }
    }

    if (value1 == true && value2 == true) {
      console.log(nbre1 + nbre2);
    }
  }
}

sommenombrespremiers(3, 3);

function sommenombrespremiers(nbre1, nbre2) {
    
  if(nbre1 > 2) {

    for (let i = 2; i < nbre1; i++) {

      if (nbre1 % i == 0 ) {
        console.log("niveau1");
      }
          
    }


  } else if(nbre2 > 2) {

    for (let j = 2; j < nbre2; j++) {

      if (nbre2 % j == 0) {
        console.log("niveau2");
      }

    }

  } else {
    console.log(nbre1 + nbre2);
  }
  
}

sommenombrespremiers(5,5);

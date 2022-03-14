function bisextile(année) {
  if ((année % 4 == 0 && année % 100 != 0) || année % 400 == 0) {
    return true +" est une année bisextile";
  } else {
    return false + " n'est pas une année bisextile";
  }
}

console.log(bisextile(2004))
console.log(bisextile(2008))
console.log(bisextile(2020))
console.log(bisextile(2021))
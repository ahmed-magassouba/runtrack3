function tri(numbers, order) {



  for (var i = 0; i <= numbers.length; i++) {
    for (var j = i + 1; j <= numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        var tampon = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = tampon
      }
    }

  }
  if (order == "asc") {
    console.log(numbers)
  } else if (order == "desc") {
    numbers.reverse()
    console.log(numbers)
  }

}


tri([5, 7, 9, 10, 4, 8], "desc")
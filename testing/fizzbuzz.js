function fizzbuzz(number) {
  let numberArr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      numberArr.push("fizz");
    } else if (i % 5 === 0) {
      numberArr.push("buzz");
    } else if (i % 5 === 0 && i % 3 === 0) {
      numberArr.push("fizzbuzz");
    } else {
      numberArr.push(i);
    }
  }
  return numberArr.join(",");
}

export default fizzbuzz;

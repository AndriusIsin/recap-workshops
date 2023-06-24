import fizzbuzz from "./fizzbuzz";

test("it should return 1 when passed 1 as an argument", () => {
  // arrange
  let number = 1;
  // act
  let result = fizzbuzz(number);
  // assert
  expect(result).toEqual("1");
});
test("it should return 1,2 when passed 2 as an argument", () => {
  // arrange
  let number = 2;
  // act
  let result = fizzbuzz(number);
  // assert
  expect(result).toEqual("1,2");
});

test("it should return 1,2,fizz when passed 3 as an argument", () => {
  // arrange
  let number = 3;
  // act
  let result = fizzbuzz(number);
  // assert
  expect(result).toEqual("1,2,fizz");
});

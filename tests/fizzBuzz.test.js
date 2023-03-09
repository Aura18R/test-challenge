const { default: expect } = require("expect");
const fizzBuzz = require("../fizzBuzz");

test("fizzBuzz(num) return Fizz with numbers divisible by 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  test("fizzBuzz(num) return Buzz with numbers divisible by 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  test("fizzBuzz(num) return FizzBuzz with numbers divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  test("fizzBuzz(num) return num with numbers are not divisible by 3 and 5", () => {
    expect(fizzBuzz(2)).toBe(8);
  });
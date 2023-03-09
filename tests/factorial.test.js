const { default: expect } = require("expect");
const factorial = require("../factorial");

test("factorial(num) return num!", () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(3)).toBe(6);
  });
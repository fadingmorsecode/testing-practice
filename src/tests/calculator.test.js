import calculator from "../functions/calculator";

const input = [25, 25];

describe("object that contains functions for the basic operations: add, subtract, divide, and multiply", () => {
  test("takes two numbers and adds them together to return the correct calculation", () => {
    const actual = calculator.add(input);
    const expected = 50;
    expect(actual).toBe(expected);
  });
  test("takes two number and performs a subtraction to return the correct calculation", () => {
    const actual = calculator.subtract(input);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  test("takes two numbers and divides them to return the correct calculation", () => {
    const actual = calculator.divide(input);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  test("takes two numbers and multiplies them together to return the correct calculation", () => {
    const actual = calculator.multiplpy(input);
    const expected = 625;
    expect(actual).toBe(expected);
  });
});

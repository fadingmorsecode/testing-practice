import calculator from "../functions/calculator";

const input = [25, 25];

describe("object that contains functions for the basic operations: add, subtract, divide, and multiply", () => {
  test("takes two numbers and adds them together to return the correct calculation", () => {
    const actual = calculator.add(input);
    const expected = 50;
    expect(actual).toBe(expected);
  });
});

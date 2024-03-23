import analyzeArray from "../functions/analyzeArray";

describe("takes an array of numbers and returns an object with the following properties: average, min, max, and length", () => {
  test("object returns average from array", () => {
    const input = [1, 8, 3, 4, 2, 6];
    const actual = analyzeArray(input);
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});

import analyzeArray from "../functions/analyzeArray";

describe("takes an array of numbers and returns an object with the following properties: average, min, max, and length", () => {
  test("object returns average from array", () => {
    const input = [1, 8, 3, 4, 2, 6];
    const actual = analyzeArray(input).average;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
  test("object returns min from array", () => {
    const input = [1, 8, 3, 4, 2, 6];
    const actual = analyzeArray(input).min;
    const expected = 1;
    expect(actual).toEqual(expected);
  });
  test("object returns max from array", () => {
    const input = [1, 8, 3, 4, 2, 6];
    const actual = analyzeArray(input).max;
    const expected = 8;
    expect(actual).toEqual(expected);
  });
  test("object returns length of array", () => {
    const input = [1, 8, 3, 4, 2, 6];
    const actual = analyzeArray(input).length;
    const expected = 6;
    expect(actual).toEqual(expected);
  });
});

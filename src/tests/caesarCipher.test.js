import caesarCipher from "../functions/caesarCipher";

describe("function that takes a string and a shift factor and returns it with each character “shifted”", () => {
  test("works with apost and shift factor of 3", () => {
    const input = ["I'm a believer", 3];
    const expected = `L'P D EHOLHYHU`;
    const actual = caesarCipher(input[0], input[1]);
    expect(actual).toEqual(expected);
  });
  test("works with string and shift factor of 6", () => {});
});

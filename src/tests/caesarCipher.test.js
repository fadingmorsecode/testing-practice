import caesarCipher from "../functions/caesarCipher.js";

describe("function that takes a string and a shift factor and returns it with each character “shifted”", () => {
  test("works with shift factor of 3", () => {
    const input = ["i'm a believer", 3];
    const expected = `l'p d eholhyhu`;
    const actual = caesarCipher(input[0], input[1]);
    expect(actual).toEqual(expected);
  });
  test("works with shift factor of 15", () => {
    const input = ["i'm a believer", 15];
    const expected = `x'b p qtaxtktg`;
    const actual = caesarCipher(input[0], input[1]);
    expect(actual).toEqual(expected);
  });
  test("works with shift factor of 26", () => {
    const input = ["i'm a believer", 26];
    const expected = `i'm a believer`;
    const actual = caesarCipher(input[0], input[1]);
    expect(actual).toEqual(expected);
  });
  test("works with shift factor of 29", () => {
    const input = ["i'm a belieVer", 29];
    const expected = `l'p d eholhYhu`;
    const actual = caesarCipher(input[0], input[1]);
    expect(actual).toEqual(expected);
  });
  test("works with shift factor of 31", () => {
    const input = ["i'm a believer", 31];
    const expected = `n'r f gjqnjajw`;
    const actual = caesarCipher(input[0], input[1]);
    expect(actual).toEqual(expected);
  });
  test("works with varying cases and a shift factor of 31", () => {
    const input = ["I'M a BelIeVeR", 31];
    const expected = `N'R f GjqNjAjW`;
    const actual = caesarCipher(input[0], input[1]);
    expect(actual).toEqual(expected);
  });
  test("works with all uppercase and a shift factor of 48", () => {
    const input = ["THERE'S SOMETHING IN THE WATER", 48];
    const expected = `PDANA'O OKIAPDEJC EJ PDA SWPAN`;
    const actual = caesarCipher(input[0], input[1]);
    expect(actual).toEqual(expected);
  });
});

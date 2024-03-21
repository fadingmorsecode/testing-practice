import capitalize from "../functions/capitalize";

describe("Capitalize Function", () => {
  test("should take a string and return it with the first character capitalized", () => {
    const input = "gangster lean";
    const actual = capitalize(input);
    const expected = "Gangster lean";
    expect(actual).toEqual(expected);
    const input2 = "just a dreamer";
    const actual2 = capitalize(input2);
    const expected2 = "Just a dreamer";
    expect(actual2).toEqual(expected2);
  });
});

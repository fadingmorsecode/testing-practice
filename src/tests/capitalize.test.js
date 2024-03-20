import capitalize from "../modules/capitalize";

test("should exist", () => {
  expect(capitalize).toBeDefined();
});

test("should take a string and returns it with the first character capitalized", () => {
  const input = "gangster lean";
  const actual = capitalize(input);
  const expected = "Gangster lean";
  expect(actual).toEqual(expected);
});

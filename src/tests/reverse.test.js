import reverse from "../functions/reverseString";

describe("Reverse String", () => {
  test("should take a string and return it reversed", () => {
    const input = "moonlight on the river";
    const actual = reverse(input);
    const expected = "revir eht no thgilnoom";
    expect(actual).toEqual(expected);
  });
});

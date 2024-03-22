const uAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const alphabetLength = 26;

function getCharacterCase(char) {
  if (lAlphabet.includes(char)) {
    return "lower";
  }
  if (uAlphabet.includes(char)) {
    return "upper";
  }
  return false;
}

export default function caesarCipher(string, sFactor) {
  const encrypted = [];

  const split = string.split("");
  split.forEach((char) => {
    const charCase = getCharacterCase(char);

    const upper = char.toUpperCase();
    // find index of character and push with necessary wrapping and case
    if (charCase === "lower" || charCase === "upper") {
      const index = uAlphabet.indexOf(upper);
      let newIndex = (index + sFactor) % alphabetLength; // wrap if necessary

      if (newIndex < 0) {
        newIndex += alphabetLength; // negative shifts
      }

      if (charCase === "lower") {
        encrypted.push(lAlphabet[newIndex]);
      } else {
        encrypted.push(uAlphabet[newIndex]);
      }
    } else {
      // all other non-alphabetical chars
      encrypted.push(char);
    }
  });

  return encrypted.join("");
}

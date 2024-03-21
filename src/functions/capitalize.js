export default function capitalize(input) {
  const firstLetter = input.charAt(0);
  const rest = input.slice(1);
  const manipulatedLetter = firstLetter.toUpperCase();
  const joined = manipulatedLetter + rest;
  return joined;
}

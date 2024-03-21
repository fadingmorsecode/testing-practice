export default function reverse(input) {
  const split = input.split("");
  const reversed = split.reverse();
  const joined = reversed.join("");
  return joined;
}

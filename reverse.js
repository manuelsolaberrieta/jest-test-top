export default function reverseString(str) {
  let rts = "";
  for (let i = 0; i < str.length; i++) {
    rts += str[str.length - 1 - i];
  }
  return rts;
}

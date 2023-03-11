export default function cesar(str, factor) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  let message = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      message += " ";
    } else {
      let index = abc.indexOf(str[i]);
      let extra = index + factor;
      if (extra > abc.length - 1) {
        while (extra > abc.length - 1) {
          extra -= abc.length;
        }
        message += abc[extra];
      } else {
        message += abc[index + factor];
      }
    }
  }
  return message;
}

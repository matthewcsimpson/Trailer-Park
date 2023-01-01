const replaceCharCode = (string) => {
  let regex = /\&\#[0-9]+\;/;
  let numreg = /[0-9]+/;

  let stringarr = string.split(" ");

  for (let i = 0; i < stringarr.length; i++) {
    if (stringarr[i].includes(stringarr[i].match(regex))) {
      let replacement = String.fromCharCode(stringarr[i].match(numreg));

      let stringr = stringarr[i].split("&");

      for (let i = 0; i < stringr.length; i++) {
        if (stringr[i].match(numreg)) {
          stringr[i] = replacement;
        }
      }
      stringarr[i] = stringr.join("");
    }
  }

  return stringarr.join(" ");
};

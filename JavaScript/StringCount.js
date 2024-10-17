function countChars(str){
  // create an object with keys and values
  let result = {};
  // loop over the characters in the string
  for(let char of str) {
      char = char.toLowerCase();
      // if the char is a letter/number, increment its count
      let regex = /[a-z0-9]/;
      if(regex.test(char)) {
          result[char] = ++result[char] || 1;
      }
  }


  return result;  // return the character count object
}

console.log(countChars("Hello 112"));

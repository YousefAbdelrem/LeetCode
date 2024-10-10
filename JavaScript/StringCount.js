

function countChars(str){
    // create an object with keys values
    let result = {};
    // loop over the keys
    for(let char of str)
    {
      char = char.toLowerCase();
     // if the char is letter/number then add count++;
     let regex =/[a-z0-9]/;
     if(regex.test(char)){
        result[char] = ++result[char] || 1;
    } 
     }
   
     return result;
}

 console.log(countChars("Hello 112"));


  // count number of reptition in arr1 
  // search for that for the squered number  unt it 
  // if counter1 == counter2 passed 

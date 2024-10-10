/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    // creat to frequence arrays 
    let freq1= {};
    let freq2= {};
        // loop on each string and assign his frequency 

    for(let char of s) 
    {
        freq1[char] = (freq1[char] || 0) + 1;
    };
    for(let char of t) 
    {
        freq2[char] = (freq2[char] || 0) + 1;
    };
    // compare first array reptation with the second
    for(let key in freq1)
    {
        if(freq1[key] != freq2[key])
            {
            return false;
        }
    }
    return true;
};
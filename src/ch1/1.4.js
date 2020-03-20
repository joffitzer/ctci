//Palindrome Permutation: given a string, write a function to check if it is a permutation of a palindrome. 
// a palindrome is a word or phrase that is the same forwards and backwards. a permutation is a rearrangement of letters

function palperm(str){
    let freqCounter = {}
    let odds = 0
    for (let char of str){
        if (freqCounter[char]){
            freqCounter[char] += 1;
        } else {
            freqCounter[char] = 1;
        }
    }
    if (str.length % 2 === 0){
        for (let key in freqCounter){
            if ((freqCounter[key] % 2) !== 0){
                return false;
            }
        }
    } else {
        for (let key in freqCounter){
            if ((freqCounter[key] % 2) !== 0){
                odds += 1;
            }
        }
        if (odds > 1){
            return false;
        }
    }
    return true;
}
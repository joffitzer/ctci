//Given two strings, write a method to decide if one iis a permutation of the other

function isPerm(str1, str2){

    let freqCounter = {};

    for (let char of str1){
        if (!(freqCounter[char])){
            freqCounter[char] = 1;
        }
        else {
            freqCounter[char] += 1;
        }
    }

    for (let char of str2){
        if (freqCounter[char] === 0 || (!(freqCounter[char]))){
            return false;
        } else {
            freqCounter[char] -= 1
        }
    }

    return true;
}
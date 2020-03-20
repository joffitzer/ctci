//URLify: write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space
//at the end to hold the additional characters, and that you are given the "true" length of the string.

//example input:  "Mr John Smith    ", 13
//output: "Mr%20John%20Smith"

function urlify(str, num){
    result = []
    for (let i = 0; i < num; i++){
        let char = str[i]
        if (char === " "){
            result.push("%20");
        } else {
            result.push(char);
        }
    }
    return result.join('')
}
// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

function unique(str) {

    let counter = {}

    for (let char of str){

        if (counter[char] > 0){
            return false;
        } 
        
        counter[char] = 1;
        
    }

    return true;
    
}
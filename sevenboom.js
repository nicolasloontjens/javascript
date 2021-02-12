"use strict";
//https://edabit.com/challenge/6R6gReGTGwzpwuffD

function sevenBoom(arr){
    let boom = false;
    for(let number of arr){
        if(number === 7){
            boom = true;
        }
    }
    return boom;
}

console.log(sevenBoom([1,2,3,4,5,6,13]));


console.log(sevenBoom([1,2,3,7,5,6,13]));
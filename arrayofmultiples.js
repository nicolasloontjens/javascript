"use strict";
//https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

function arrayOfMultiples(num, length){
    const incr = num;
    let index = 0;
    let res = [num];
    while(index < length-1){
        num += incr;
        res.push(num);
        index ++;
    }
    return res;
}

console.log(arrayOfMultiples(12,10));
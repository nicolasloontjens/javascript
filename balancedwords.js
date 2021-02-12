"use strict";
//https://edabit.com/challenge/8QTBwLzAdaM8wkrXu

function balanced(word){
    let arr = splitwords(word);
    return getValue(arr[0]) === getValue(arr[1])
}

function splitwords(word){
    let res = [];
    if(word.length % 2 === 0){
        res[0] = word.substring(0,word.length/2);
        res[1] = word.substring(word.length/2, word.length);
    }
    else{
        res[0] = word.substring(0,word.length/2);
        res[1] = word.substring(word.length/2+1, word.length);
    }
    return res;
}

function getValue(text){
    let res = 0;
    let index = 0;
    while(index < text.length){
        res += text.charAt(index).charCodeAt(0)-96;
        index ++;
    }
    return res;
}

console.log(splitwords("spoon"));
console.log(splitwords("food"));

console.log(getValue("foo"));
console.log(getValue("bar"));

console.log(balanced("anna"));
console.log(balanced("Porsche"));
console.log(balanced("civic"));
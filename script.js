"use strict";

console.log("test");

let int = 6;
let string = "foobar";
let boolean = true;
let person = {name: "nicolas", age: 18, foo: "bar"};

function doSomething(){
    console.log("foo");
}


function checkAge(person){
    if(person.age < 18){
        console.log("under eighteen");
    }
    else{
        console.log("of age");
    }
}


doSomething();
checkAge(person);

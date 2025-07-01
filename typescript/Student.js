"use strict";

const d =5;
d=10;
class Student {
    getStudentName() {
        return 'Narayana';
    }
    getSname(studentObj) {
        return studentObj.name;
    }
}
const instance = new Student();
console.log(instance.getStudentName());
console.log(typeof '');

function Num(a) {
    d = 10;
    if (a) {
        console.log('value is ' + a);
    }
    else {
        console.log('value is not present');
    }
}

function getName(){
  
}

function getField(){
  
}
console.log(typeof null);
const a = (value) => `Hello Suraj ${value}`;
console.log(a('How are you'));



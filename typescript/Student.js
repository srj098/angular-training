"use strict";
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getStudentName = function () {
        return 'Narayana';
    };
    Student.prototype.getSname = function (studentObj) {
        return studentObj.name;
    };
    return Student;
}());
var instance = new Student();
console.log(instance.getStudentName());
console.log(typeof '');
function Num(a) {
    if (a) {
        console.log('value is ' + a);
    }
    else {
        console.log('value is not present');
    }
}
console.log(typeof null);
var a = function (value) { return 'Hi Suraj ' + value; };
console.log(a('Tripathi'));

import {h} from './hello';


class Student {
    getStudentName(): string {
       
        return 'Narayana';
    }
    

    getSname(studentObj: any): string {
        return studentObj.name;
    }
}

let x = 8;
x =10;

const d =5;


const instance = new Student();

console.log(instance.getStudentName());

console.log(typeof '');

function Num(a?:string):void {
   
    if (a) {
       
        console.log('value is ' +a);
    } else {
        console.log('value is not present');
    }
}

console.log(typeof null);


const a = (value:string)=> `Hello Suraj ${value}`;

console.log(a('How are you'));











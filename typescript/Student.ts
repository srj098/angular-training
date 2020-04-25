class Student {
    getStudentName(): string {
        return 'Narayana';
    }

    getSname(studentObj: any): string {
        return studentObj.name;
    }
}

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


const a = (value:string)=> 'Hi Suraj ' + value;

console.log(a('Tripathi'));











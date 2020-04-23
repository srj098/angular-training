export interface StudentsDetail {
    name: string;
    id?: number;
}

interface StudentDataInterface {
    salary: number;
    getSalary(): number;
}

class Student implements StudentsDetail {
    name = 'suraj';
    id = 6;
    private fatherName: string = 'ABC';

    getFather() {
        return this.fatherName
    }
}

class StudentData extends Student implements StudentDataInterface {

    s = new Student().getFather();

    salary = 5000;
    getSalary() {
        return this.salary
    }
}


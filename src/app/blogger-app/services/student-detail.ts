import { StudentsDetail } from './students-detail.interface';

export class StudentDetail implements StudentsDetail {
    name: string;
    id: number;
    constructor(sname:string, sid?:number) {
        this.name = sname;
        this.id = sid;
    }
}




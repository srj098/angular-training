import { StudentsDetail } from './students-detail.interface';

export class StudentDetail implements StudentsDetail {
    name: string;
    id: number;
    constructor(sname, sid) {
        this.name = sname;
        this.id = sid;
    }
}
import { Observable, of } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './model/student';

export class InMemoryDb implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {

    const api = {
      students: [
        {
          id: 1,
          name: 'John',
          dob: new Date(1998, 4, 1),
          email: 'j@gmail.com',
          grade: '1st',
          teacher: 'Mr. Mac',
          hourlyRate: 5
        },
        {
          id: 2,
          name: 'Jim',
          dob: new Date(2000, 5, 4),
          email: 'jimbo@yahoo.com',
          grade: '2nd',
          teacher: 'Mrs. Frizzle',
          hourlyRate: 10
        },
        {
          id: 3,
          name: 'Todd',
          dob: new Date(1997, 7, 22),
          email: 't@gmail.com',
          grade: '6th',
          teacher: 'Ms. Sierra',
          hourlyRate: 2.85
        }
      ]
    };
    return api;
  }
}

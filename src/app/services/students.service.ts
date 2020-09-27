import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students: Student[] = [
    {
      id: 1,
      name: 'John',
      email: 'j@gmail.com',
      grade: '1st',
      teacher: 'Mr. Mac',
    },
    {
      id: 2,
      name: 'Jimbo',
      email: 'jimbo@yahoo.com',
      grade: '2nd',
      teacher: 'Mrs. Frizzle'
    },
    {
      id: 3,
      name: 'Todd',
      email: 't@gmail.com',
      grade: '6th',
      teacher: 'Ms. Sierra'
    },
  ];
  constructor() { }

  getStudentById(id: number): Student {
    return this.students.find(student => student.id === id);
  }
}

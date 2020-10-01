import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( public http: HttpClient) { }

  getStudents(): any {
    return this.http.get('/api/students');
  }

  getStudentById(id: number): Observable<Student> {
    // return this.students.find(student => student.id === id);
    // return {
    //   id: 1,
    //   name: 'John',
    //   dob: new Date(1998, 4, 1),
    //   email: 'j@gmail.com',
    //   grade: '1st',
    //   teacher: 'Mr. Mac',
    //   hourlyRate: 5
    // };
    return this.http.get<Student>(`/api/students/${id}`);
  }
}

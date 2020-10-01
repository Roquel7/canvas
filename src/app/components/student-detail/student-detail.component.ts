import { ExponentPipe } from './../../pipes/exponent.pipe';
import { StudentsService } from './../../services/students.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../model/student';
import { concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  student: Student;


  get studentId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  // get student(): Student {
  //   return this.studentService.getStudentById(this.studentId);
  // }



  get exponentResult(): number {
    return this.exponentPipe.transform(2, 4);
  }

  constructor(
    public activatedRoute: ActivatedRoute,
    public studentService: StudentsService,
    public exponentPipe: ExponentPipe
    ) {
      console.log('constructor');
    }

  ngOnInit(): void {
    console.log(this.studentId);
    console.log('ngOnInit');

    this.activatedRoute.paramMap.pipe(
      concatMap(() => {
        this.student = undefined;
        return this.studentService.getStudentById(this.studentId)
          .pipe(
            catchError(error => {
              console.log(error);
              if (error.status === 404) {
                console.log(`Student id ${this.studentId} does not exist`);
                alert(`Student id ${this.studentId} does not exist`);
              }
              return of<Student>(undefined);
            })
          );
      })
    ).subscribe(student => this.student = student);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}

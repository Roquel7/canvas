import { StudentsService } from './../../services/students.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../model/student'

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {


  get studentId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  get student(): Student {
    return this.studentService.getStudentById(this.studentId);
  }

  constructor(
    public activatedRoute: ActivatedRoute,
    public studentService: StudentsService
    ) {
      console.log('contructor');
    }

  ngOnInit(): void {
    console.log(this.studentId);
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}

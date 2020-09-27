import { Router } from '@angular/router';
import { StudentsService } from './services/students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './model/student';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  students: Student[];

  constructor(
    public studentService: StudentsService,
    public router: Router,
    public location: Location,
    ) {

  }

  ngOnInit(): void {
    this.students = this.studentService.students;
  }

  goToStudent(id: number): void {
    this.router.navigate(['/students', id]);
  }

  goBack(): void {
    this.location.back();
  }

  goHome(): void {
    this.router.navigate(['/'])
  }
}

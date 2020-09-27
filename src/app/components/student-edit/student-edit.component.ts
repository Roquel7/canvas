import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  form: FormGroup;

  get student(): Student {

    const studentId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    return this.studentsService.getStudentById(studentId);
  }

  get phoneNumbers(): FormArray {
    return this.form.controls.phoneNumbers as FormArray;
  }

  constructor(
    public fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public studentsService: StudentsService
    ) {
    this.form = this.fb.group({
      name: [this.student.name, Validators.required],
      email: [this.student.email,
        Validators.compose([Validators.email, Validators.required])],
      phoneNumbers: this.fb.array([
        this.fb.group({
          alias: ['home'],
          number: ['555']
        }),
        this.fb.group({
          alias: ['cell'],
          number: ['123']
        })
      ])
    });
   }

  ngOnInit(): void {
  }

  reset(): void {
    // this.form.controls.name.setValue('');

    this.form.patchValue({
      email: 'something else'
    });
  }

  addPhone(): void {
    this.phoneNumbers.push(this.fb.group({
      alias: [''],
      number: [''],
    }));
  }

  submit(): void {
    console.log(this.form.value);
  }
}

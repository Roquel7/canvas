import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  students: Student[];

  // generic way to do the above code
  // students: Array<Student>

  @Output()
  filteredStudents = new EventEmitter<Student[]>();

  @ViewChild('reset')
  reset: ElementRef;

  searchByName: string;
  resetSub: Subscription;

  constructor() {
    console.log('students', this.students);
  }

  ngOnInit(): void {
    console.log('students', this.students);

  }

  submit(): void {
    this.filteredStudents.emit(this.students);
  }

  ngAfterViewInit(): void {
    const resetSub = fromEvent(this.reset.nativeElement, 'click')
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.resetSub.unsubscribe();
  }


}

export interface Search {
  searchByName: string;
  searchByEmail: string;
}

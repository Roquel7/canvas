import { Observer, Observable, of, Subscription, from, interval } from 'rxjs';
import { Router } from '@angular/router';
import { StudentsService } from './services/students.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from './model/student';
import { Location } from '@angular/common';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  students: Student[];
  filtered: Student[];
  sub: Subscription;

  constructor(
    public studentService: StudentsService,
    public router: Router,
    public location: Location,
  ) {
    //RxJS code snippets

    // example of Observer
    const observer: Observer<any> = {
      next: sushi => console.log(`*** Sushi was emitted: ${sushi}`),
      error: error => console.log(`*** Error occurred: ${error}`),
      complete: () => console.log(`*** No more sushi, pay & go home!`)
    };

    // example of observable
    // const sushiStream = new Observable( sushiObserver => {
    //     sushiObserver.next('Firecracker');
    //     sushiObserver.next('California Roll');
    //     sushiObserver.next('Spider');
    //     sushiObserver.complete();
    //   }
    // );


    // creating observable without the code above
    const sushiStream = of('Spider', 'Firecracker', 'California');
    // const sushiStream = from(['Spider', 'Firecracker', 'California']);


    // sushiStream.subscribe(observer);

    const subscription = sushiStream.subscribe(
      sushi => console.log(`*** Sushi was emitted: ${sushi}`),
      error => console.log(`*** Error occurred: ${error}`),
      () => console.log(`*** No more sushi, pay & go home!`)
    );

    const num = interval(1000).subscribe(console.log);

    subscription.unsubscribe();
    num.unsubscribe();

    of(2, 4, 6)
      .pipe(
        map(item => item * 2), // enables to do math operations
        tap(item => console.log(item)),
        take(2)  // only looks at the first two items
      ).subscribe().unsubscribe();
  }

  ngOnInit(): void {
    // this.students = this.studentService.getStudents();
    // async
    this.studentService.getStudents().subscribe(
      students => {
        this.students = students;
        this.filtered = this.students;
      }
    );
  }

  goToStudent(id: number): void {
    this.router.navigate(['/students', id]);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {

  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  onFilteredStudents($event: Student[]): void {
    console.log('$event', $event);
    this.filtered = $event;
  }
}

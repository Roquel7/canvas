import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  searchTerm: string;

  constructor() { }

  ngOnInit(): void {
  }


}

export interface Search {
  searchByName: string;
  searchByEmail: string;
}

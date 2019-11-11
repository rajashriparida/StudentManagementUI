import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: any;

  constructor() {
    this.students = [{
      "id": 1,
      "name": "Chinky"
    },
    {
      "id":2,
      "name":"Rajashree"
    }];
  }
}

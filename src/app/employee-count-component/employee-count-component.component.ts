import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: './employee-count-component.component.html',
  styleUrls: ['./employee-count-component.component.css']
})
export class EmployeeCountComponent implements OnInit {
   all: number = 10;
   male: number = 5;
   female: number = 5;
  constructor() { }

  ngOnInit() {
  }

}
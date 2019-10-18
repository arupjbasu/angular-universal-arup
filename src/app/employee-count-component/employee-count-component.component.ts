import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: './employee-count-component.component.html',
  styleUrls: ['./employee-count-component.component.css']
})
export class EmployeeCountComponent implements OnInit {
    @Input()  all: number ;//= 10;
    @Input() male: number ;//= 5;
    @Input() female: number ;//= 5;
     // Holds the selected value of the radio button
    selectedRadioButtonValue: string = 'All';
    @Output() countRadioButtonSelectionChanged: EventEmitter<string> =
                                        new EventEmitter<string>();

    
    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }
  constructor() { }

  ngOnInit() {
  }

}
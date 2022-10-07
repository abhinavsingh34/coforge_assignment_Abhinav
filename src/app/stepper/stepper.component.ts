import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

 @Input () nextStepe:any ='';
 @Input () nextPage:string ='';

  constructor() { }

  ngOnInit(): void {
  }


}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Output() messageEvent_step4_next = new EventEmitter<string>();
  @Output() messageEvent_step4_back = new EventEmitter<string>();
  steps:any =4;
  nextPages:string ='Next: Confirmation';


  constructor() { }

  ngOnInit(): void {
  }
  step4_next() {
    this.messageEvent_step4_next.emit('true')
  }
  step4_back() {
    this.messageEvent_step4_back.emit('true')
  }
}

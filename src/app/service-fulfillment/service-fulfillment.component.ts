import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-fulfillment',
  templateUrl: './service-fulfillment.component.html',
  styleUrls: ['./service-fulfillment.component.scss']
})
export class ServiceFulfillmentComponent implements OnInit {
  @Output() messageEvent_step3_next = new EventEmitter<string>();
  @Output() messageEvent_step3_back = new EventEmitter<string>();
  steps:any =3;
  nextPages:string ='Next: Summary';

  constructor() { }

  ngOnInit(): void {
  }
  step3_next() {
    this.messageEvent_step3_next.emit('true')
  }
  step3_back() {
    this.messageEvent_step3_back.emit('true')
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-options',
  templateUrl: './service-options.component.html',
  styleUrls: ['./service-options.component.scss']
})
export class ServiceOptionsComponent implements OnInit {
  @Output() messageEvent_step2_next = new EventEmitter<string>();
  @Output() messageEvent_step2_back = new EventEmitter<string>();

  steps:any =2;
  nextPages:string ='Next: Service Fullfillment';


  constructor() { }

  ngOnInit(): void {
  }
  step2_next() {
    this.messageEvent_step2_next.emit('true')
  }
  step2_back() {
    this.messageEvent_step2_back.emit('true')
  }
}

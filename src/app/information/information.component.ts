import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Output() messageEvent_step1_next = new EventEmitter<string>();
  constructor(private router: Router) { }
  steps:any =1;
  nextPages:string ='Next: Service Options';

  ngOnInit(): void {
  }
  step1_next() {
    this.messageEvent_step1_next.emit('true')
  }
  step_back() {
    this.router.navigateByUrl('/home');
  }
}

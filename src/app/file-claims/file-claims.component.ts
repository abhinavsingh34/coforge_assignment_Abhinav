import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-claims',
  templateUrl: './file-claims.component.html',
  styleUrls: ['./file-claims.component.scss']
})
export class FileClaimsComponent implements OnInit {
  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;

  constructor() { }

  ngOnInit(): void {
  }

  receive_step1_next(event:any) {
    this.step2 =event
    this.step1 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
  }

  receive_step2_next(event:any) {
    this.step3 =event
    this.step1 = false;
    this.step2 = false;
    this.step4 = false;
    this.step5 = false;
  }

  receive_step3_next(event:any) {
    this.step4 =event
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step5 = false;
  }

  receive_step4_next(event:any) {
    this.step5 =event
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
  }

  receive_step2_back(event:any) {
    this.step1 =event
    this.step3 = false;
    this.step2 = false;
    this.step4 = false;
    this.step5 = false;
  }

  receive_step3_back(event:any) {
    this.step2 =event
    this.step1 = false;
    this.step4 = false;
    this.step3 = false;
    this.step5 = false;
  }

  receive_step4_back(event:any) {
    this.step3 =event
    this.step1 = false;
    this.step2 = false;
    this.step5 = false;
    this.step4 = false;
  }

}

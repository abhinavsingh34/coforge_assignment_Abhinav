import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getRoute() {
    if (this.router.url === '/home') {
      return "hide-bar";
    } return "show-bar";
  }
}

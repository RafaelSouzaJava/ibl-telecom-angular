import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IBLTelecom';



  constructor(private router: Router){}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

  }

 }

import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor( private appComponent: AppComponent ) {
    this.appComponent.setTitle('Comic app | Home');
  }

  ngOnInit(): void {
  }

}

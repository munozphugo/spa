import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor( private appComponent: AppComponent ) {
    this.appComponent.setTitle('Comic app | About');
  }

  ngOnInit(): void { }

}

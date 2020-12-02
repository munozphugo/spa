import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Comic app';

  constructor( private titleService: Title ){ }

  getTitle(): void {
    this.titleService.getTitle();
  }
  setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }
}

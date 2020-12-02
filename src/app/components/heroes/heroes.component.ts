import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../sevicios/heroes.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService, private router: Router, private appComponent: AppComponent ) {
    this.appComponent.setTitle('Comic app | Heroes');
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    // console.log(this.heroes);
  }

  // PARA EL BOTÓN
  verHeroe( idx: number ): void {
    this.router.navigate( ['/heroe', idx] );
  }

}

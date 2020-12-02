import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../sevicios/heroes.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService,private appComponent: AppComponent ) {
    this.activatedRoute.params.subscribe( params => {
      // console.log( params.id );
      this.heroe = this.heroesService.getHeroe( params.id );
    } );
    this.appComponent.setTitle(`Comic app | ${ this.heroe.nombre }`);
  }

  ngOnInit(): void { }

}

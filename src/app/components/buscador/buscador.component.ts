import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { HeroesService } from '../../sevicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  parametros = '';

  constructor( private appComponent: AppComponent, private activatedRoute: ActivatedRoute, private heroesService: HeroesService ) {
    this.appComponent.setTitle('Comic app | Resultados');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.parametros = params.termino;
      this.heroes = this.heroesService.buscarHeroes( params.termino );
      // console.log(this.heroes);
    } );
  }

}

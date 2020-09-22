import { Component, OnInit ,Output, EventEmitter, Input, } from '@angular/core';
import { ActivatedRoute}    from '@angular/router';
import { HeroesService} from '../../servicios/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


    @Output() heroeSeleccionado: EventEmitter <number>;
    @Input() index: number;

    public heroes: any[] =[];
    public termino: string;
    constructor(
        private activatedRoute:ActivatedRoute,
        private _heroesService:HeroesService) {
            this.heroeSeleccionado = new EventEmitter();
        }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params =>{
            this.termino = params['termino'];
            this.heroes = this._heroesService.buscarHeroe(params['termino']);
      });
  }

    verHeroe(idx:string){
        this.activatedRoute.params.subscribe(params =>{
            this.heroes = this._heroesService.buscarHeroe(idx);
      });
    }

    verHeroe2(){
        this.heroeSeleccionado.emit(this.index);
    }

}

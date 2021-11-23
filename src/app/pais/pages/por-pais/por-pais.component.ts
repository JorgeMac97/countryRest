import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private PaisService: PaisService ) { }

  buscar( termino: string) {

    this.termino = termino;
    this.hayError = false;

    if (this.termino == "") {
      this.paises = [];
      return;
    }

    this.PaisService.buscarPais( this.termino )
    .subscribe( (paises) => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });

  }

  sugerencias( termino: string ) {
    this.hayError = false;

  }

}

import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean = false;
  capitales: Country[] = [];

  constructor( private PaisService: PaisService ) { }

  buscar ( termino: string ) {

    this.termino = termino;
    this.hayError = false;

    if (this.termino == "") {
      this.capitales = [];
      return;
    }

    this.PaisService.buscarCapital( this.termino )
    .subscribe( (capitales) => {
      this.capitales = capitales;
    }, (err) => {
      this.hayError = true;
      this.capitales = [];
    });
  }
}

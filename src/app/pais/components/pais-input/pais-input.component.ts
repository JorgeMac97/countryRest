import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = "";
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe( valor => {
        this.OnDebounce.emit( valor );
      });
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada () {
    this.debouncer.next( this.termino );
  }

}

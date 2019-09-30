import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('porcentaje', this.porcentaje);
  }

  ngOnInit() {

  }

  onChange(newValue: number) {

    

    if (newValue >= 100) {
      this.porcentaje = 100
    } else if (newValue <= 0) {
      this.porcentaje = 0
    } else {
      this.porcentaje = newValue
    }

    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(valor: number) {

    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);

  }

}

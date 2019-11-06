import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contartres().then(
      mensaje => console.log('Termino', mensaje)
    ).catch(error => console.log('fallo promesa', error));
  }

  ngOnInit() {
  }

  contartres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          // reject('hubo un error');
          clearInterval(intervalo);
        }
      }, 1000);
    });

  }

}

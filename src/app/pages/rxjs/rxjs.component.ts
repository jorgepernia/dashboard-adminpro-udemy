import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  susbcription: Subscription;

  constructor() {
    this.susbcription = this.regresaObservable()
      .subscribe(
        numero => console.log('Subs', numero),
        error => console.error('Erro en el obs', error),
        () => console.log('el Observador termino!')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('la Pagina va a cerrar');
    this.susbcription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {

      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   //clearInterval(intervalo);
        //   observer.error('Help');
        // }

      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {

        if ((valor % 2) === 1) {
          //impar
          return true
        } else {
          //par
          return false;
        }
      })
    );
  }

}

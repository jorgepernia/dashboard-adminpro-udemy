import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  title: string;

  constructor(private router: Router) {

    this.getDataRoute()
      .subscribe(data => {
        console.log(data);
        this.title = data.titulo;
        console.log('title page:', this.title)
      });
  }

  ngOnInit() {
  }


  getDataRoute() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data),
    )
  }
}

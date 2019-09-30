import { Component, OnInit, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('ChartLabels') doughnutChartLabels: Label[] = [];
  @Input('ChartData') doughnutChartData: SingleDataSet = [];
  @Input('ChartType') doughnutChartType: ChartType = 'doughnut';


  constructor() { }

  ngOnInit() {
  }

}

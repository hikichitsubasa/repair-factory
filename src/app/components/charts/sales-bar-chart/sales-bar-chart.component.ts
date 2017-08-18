import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../layouts/shared.service";

@Component({
  selector: 'sales-bar-chart',
  templateUrl: './sales-bar-chart.component.html',
  styleUrls: ['./sales-bar-chart.component.scss']
})
export class SalesBarChartComponent implements OnInit {
  pageTitle: string = '売上推移グラフ';

  // constructor( private _sharedService: SharedService) {
  //   this._sharedService.emitChange(this.pageTitle);
  // }

  ngOnInit() {
  }


  public barChartOptions: any = {
    scaleShowVerticalLInes: false,
    responsive: true,
    scales:{yAxes:[{ticks:{beginAtZero:true}}]} //charts.js 参照
  };

  public barChartLabels: string[] = [
      '1','2', '3', '4', '5', '6','7','8','9','10','11','12'
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {data: [10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000], label: '売上'}
  ];

  public chartClicked(e:any): void{
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'sales-bar-chart',
    templateUrl: './sales-bar-chart.component.html',
    styleUrls: ['./sales-bar-chart.component.scss']
})
export class SalesBarChartComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }


    public barChartOptions: any = {
        scaleShowVerticalLInes: true,
        responsive: true,
        scales: {yAxes: [{ticks: {beginAtZero: true}}]} //charts.js 参照
    };
    public barChartData = {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        datasets: [
            {
                label: '売上',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000]
            }
        ]
    };

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}

import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

import {
  ApexNonAxisChartSeries,
  ApexTheme,
  ApexTitleSubtitle,
  ApexStroke,
  ApexYAxis,
} from "ng-apexcharts";

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  fill: ApexFill,
  yaxis: ApexYAxis,
  stroke: ApexStroke,
  legend: ApexLegend,
  plotOptions: ApexPlotOptions
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions2: Partial<ChartOptions> | any;

  // public polarAreaChartLabels: Label[] = [];
  // public polarAreaChartData: SingleDataSet = [500, 500, 500];
  // public polarAreaLegend = true;

  // public polarAreaChartType: ChartType = 'polarArea';

  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public barChartLabels: Label[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG' , 'SEP' ,'OCT', 'NOV','DEC'];
  // public barChartType: ChartType = 'bar';

  // public barChartLegend = true;
  // public barChartPlugins = [];

  // public barChartData: ChartDataSets[] = [
  //   { data: [20, 25, 30, 35, 40, 45, 50, 65, 70 ,75,80 ,85],
  //     backgroundColor: '#000' },
  //   { data: [5, 10, 15, 20, 25, 30, 35, 40 ,45,50 ,55,60],
  //     backgroundColor: '#FAD706' }
  // ];
  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 17, 22, 43, 25, 32, 43, 29, 33, 39]
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 38, 13, 27, 44, 55, 41, 67, 22, 43,]
        }
      ],
      chart: {
        type: "bar",
        height: 400,
        stacked: true,
        toolbar: {
          show: false
        },
      
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1,
        colors: ['#fad706', '#000']
      }
    };



    this.chartOptions2 = {
      series: [2000, 2500, 2600],
        chart: {
          width: 800,
          type: 'polarArea'
        },
        labels: ['Rose A', 'Rose C', 'Rose E'],
        fill: {
          opacity: 1,
          colors: ['#FFE33E', '#14C5BC', '#6C2FC9']
        },
        
        stroke: {
          width: 0,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            }
          }
        },
        theme: {
          monochrome: {
            //    enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
          }
        }
    };
  }

  ngOnInit(): void {
  }
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
}

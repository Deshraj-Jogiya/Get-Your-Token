import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
};

@Component({
  selector: "app-user-dashboard",
  templateUrl: "user-dashboard.component.html"
})
export class UserdashboardComponent implements OnInit, OnDestroy {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  showDiv = {
    view_tab : ''
  }  

  constructor(private router: Router) {
    this.chartOptions = {
      series: [
        {
          data: [
            20.45,
            5.42,
            5.9,
            1.45,
            5.42,
            5.9,
            0.34,
            3.88,
            13.07,
            5.8,
            2,
            7.37,
            8.1,
            13.57,
            15.75,
            17.1,
            19.8,
            -27.03,
            -54.4,
            -47.2,
            -43.3,
            -18.6,
            -48.6,
            -41.1,
            -39.6,
            -37.6,
            -29.4,
            -21.4,
            -2.4
          ]
        }
      ],
      chart: {
        type: "bar",
        height: 300
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: 0,
                to: 30,
                color: "#1CEB82"
              },
              {
                from: 0,
                to: -45,
                color: "#FEB019"
              }
            ]
          },
          columnWidth: "30%"
        }

      },
      dataLabels: {
        enabled: false,
         
      },
      yaxis: {
        labels: {
          formatter: function (y: any) {
            return y.toFixed(0);
          },
          style: {
            colors: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff']
          }
        }
      },
      xaxis: {
        type: "categories",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        labels: {
          rotate: 0,
          style: {
            colors: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff']
          }
        }
      },
    };
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

  }

  onTabClick() {
    this.router.navigate(['/register']);
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
interface GenderDistribution {
  gender: string;
  count: number;
}

interface AgeDistribution {
  ageGroup: string;
  count: number;
}

@Component({
  selector: 'app-statistics-chart',
  templateUrl: './statistics-chart.component.html',
  styleUrls: ['./statistics-chart.component.css'],
})
export class StatisticsChartComponent implements OnInit {
  genderChart: any;
  ageChart: any;

  constructor(private statisticsService: DataService) {}

  ngOnInit() {
    this.initGenderChart();
    this.initAgeChart();
  }

  private initGenderChart() {
    this.genderChart = {
      chartType: 'PieChart',
      dataTable: [['Gender', 'Number of Patients']],
      options: {
        title: 'Gender Distribution of Patients',
        height: 400,
        pieHole: 0.4,
        legend: { position: 'top' },
      },
    };
    this.loadGenderDistribution();
  }

  private initAgeChart() {
    this.ageChart = {
      chartType: 'BarChart',
      dataTable: [['Age Group', 'Number of Patients']],
      options: {
        title: 'Age Distribution of Patients',
        height: 400,
        legend: { position: 'none' },
        hAxis: { title: 'Number of Patients' },
        vAxis: { title: 'Age Group' },
      },
    };
    this.loadAgeDistribution();
  }

  private loadGenderDistribution() {
    this.statisticsService
      .getGenderDistribution()
      .subscribe((data: GenderDistribution[]) => {
        data.forEach((item: GenderDistribution) => { 
          this.genderChart.dataTable.push([item.gender, item.count]);
        });
      });
  }

  private loadAgeDistribution() {
    this.statisticsService
      .getAgeDistribution()
      .subscribe((data: AgeDistribution[]) => {
        data.forEach((item: AgeDistribution) => {
          this.ageChart.dataTable.push([item.ageGroup, item.count]);
        });
      });
  }
}

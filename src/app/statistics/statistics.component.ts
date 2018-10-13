import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { QUESTIONS } from '../mock-question';
import { Sondage } from '../sondage';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;    
  chart: any;
  @Input() Respons: Sondage;
//chart = [];
  constructor() { 
  
    
    
  }

  ngOnInit() {
  }

}

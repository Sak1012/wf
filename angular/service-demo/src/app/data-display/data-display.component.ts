import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  mockData: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.mockData = this.dataService.getMockData();
  }
}

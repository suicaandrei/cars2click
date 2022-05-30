import { Component, Input, OnInit } from '@angular/core';
import { Airport } from 'src/app/models/airport.model';

@Component({
  selector: 'app-airports-table',
  templateUrl: './airports-table.component.html',
  styleUrls: ['./airports-table.component.scss']
})
export class AirportsTableComponent implements OnInit {
  @Input() airports: Airport[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}

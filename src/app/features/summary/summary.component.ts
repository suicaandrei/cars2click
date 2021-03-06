import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/models/airport.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public coinSearched: string | null;
  public airports: Airport[] = [];

  public loadPage: boolean = true;

  constructor() {
    this.coinSearched = sessionStorage.getItem("coinSearched");
    
    this.airports = JSON.parse(sessionStorage.getItem("airports")!);
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadPage = false;
    }, 3000);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAirportMap() {
    this.router.navigate(['/airport-map']);
  }

  goToCryptoSearch() {
    this.router.navigate(['/crypto-search']);
  }

  goToSummary() {
    this.router.navigate(['/summary']);
  }
}

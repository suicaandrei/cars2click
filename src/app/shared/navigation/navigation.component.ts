import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() pageNo: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goNext() {
    switch (this.pageNo + 1) {
      case 1:
        this.router.navigate(['/airport-map']);

        break;
      case 2:
        this.router.navigate(['/crypto-search']);
        break;
      case 3:
        this.router.navigate(['/summary']);
        break;

      default:
        break;
    }
  }

  goPrevious() {
    switch (this.pageNo - 1) {
      case 0:
        this.router.navigate(['/home']);

        break;
      case 1:
        this.router.navigate(['/airport-map']);

        break;
      case 2:
        this.router.navigate(['/crypto-search']);
        break;

      default:
        break;
    }
  }
}

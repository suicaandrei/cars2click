import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoinPriceHistory } from 'src/app/models/coin-price-history.model';
import { Coin } from 'src/app/models/coin.model';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto-search',
  templateUrl: './crypto-search.component.html',
  styleUrls: ['./crypto-search.component.scss']
})
export class CryptoSearchComponent implements OnInit {
  public searchControl: FormControl = new FormControl();
  public selectedCoin: Coin | undefined;
  public selectedFilter: string = "";

  public coins: Coin[] = [];
  public filteredCoins: Coin[] = [];
  public coinPriceHistory: CoinPriceHistory[] = [];

  public loadPage: boolean = false;
  public loadHistory: boolean = true;

  constructor(private cryptoService: CryptoService) { }

  async ngOnInit() {
    await this.loadCoins();

    this.loadPage = true;
  }

  async loadCoins() {
    let result = await this.cryptoService.getCoins();

    this.coins = result.data.coins;
    this.filteredCoins = this.coins;
  }

  async getCoinInfo(coin: Coin) {
    this.loadHistory = false;
    this.selectedCoin = coin;

    let result = await this.cryptoService.getCoinPriceHistory(coin.uuid);

    if (result.status == "success") {
      this.coinPriceHistory = result.data.history;
    }

    sessionStorage.setItem('coinSearched', coin.name);

    this.loadHistory = true;
  }

  onSearchChange(searchValue: any): void {
    if (searchValue.target.value != "") {
      this.filteredCoins = this.coins.filter(c => c.name.toLocaleLowerCase().includes(searchValue.target.value.toLocaleLowerCase()));
    } else {
      this.filteredCoins = this.coins;
    }
  }

  sortBy(filter: string) {
    this.selectedFilter = filter;

    if (filter == "price") {
      this.coinPriceHistory.sort(function (a, b) {
        return b.price - a.price;
      });
    } else {
      this.coinPriceHistory.sort(function (a, b) {
        return a.timestamp - b.timestamp;
      });
    }
  }
}
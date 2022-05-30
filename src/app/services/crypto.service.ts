import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

constructor(private http: HttpClient) { }
  private apiUrl: string = 'https://coinranking1.p.rapidapi.com';

  public getCoins(): Promise<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': 'a8577ff4e1msh2bbe3b03f9bda60p18ca1cjsn5b8f2bdc3a6a'
    });

    return this.http.get<any>(this.apiUrl + '/coins', { headers }).toPromise();
  }

  public getCoinPriceHistory(coinUuid: string): Promise<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': 'a8577ff4e1msh2bbe3b03f9bda60p18ca1cjsn5b8f2bdc3a6a'
    });

    let params = `/coin/${coinUuid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;

    return this.http.get<any>(this.apiUrl + params, { headers }).toPromise();
  }
}

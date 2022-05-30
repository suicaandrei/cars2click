import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Airport } from '../models/airport.model';

@Injectable({
  providedIn: 'root'
})

export class AirportsService {
  private apiUrl: string = 'https://aviation-reference-data.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  public getAirports(lat: number, lng: number, radius: number): Promise<Airport[]> {
    const headers = new HttpHeaders({
      "X-RapidAPI-Host": "aviation-reference-data.p.rapidapi.com",
      "X-RapidAPI-Key": "a8577ff4e1msh2bbe3b03f9bda60p18ca1cjsn5b8f2bdc3a6a"
    });

    let params = `?lat=${lat}&lon=${lng}&radius=${radius}`;

    return this.http.get<Airport[]>(this.apiUrl + '/airports/search' + params, { headers }).toPromise();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Airport } from 'src/app/models/airport.model';
import { AirportsService } from 'src/app/services/airports.service';

@Component({
  selector: 'app-airport-map',
  templateUrl: './airport-map.component.html',
  styleUrls: ['./airport-map.component.scss']
})
export class AirportMapComponent implements OnInit {
  public options: google.maps.MapOptions = {
    center: { lat: 44.428202, lng: 26.104085 },
    zoom: 10
  };

  public markerPosition: google.maps.LatLngLiteral = { lat: 44.428202, lng: 26.104085 };

  public markerOptions: google.maps.MarkerOptions = {
    icon: {
      url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    }
  }

  public airportsMarkerPositions: google.maps.LatLngLiteral[] = [];
  
  public airports: Airport[] = [];

  public radiusControl = new FormControl(100, [Validators.min(0)]);

  public loadAirports: boolean = false;
  public loadPage: boolean = true;
  public noAirportsFound: boolean = false;

  constructor(private airportsService: AirportsService) { }

  ngOnInit() {
    this.loadPage = false;
  }

  setSearchPosition(event: google.maps.MapMouseEvent) {
    this.markerPosition = { lat: event.latLng.lat(), lng: event.latLng.lng() };
  }

  async searchAirports() {
    this.loadAirports = true;
    this.airportsMarkerPositions = [];
    this.airports = [];

    let results = await this.airportsService.getAirports(this.markerPosition.lat, this.markerPosition.lng, this.radiusControl.value);
    
    results.forEach(airport => {
      this.airportsMarkerPositions.push({
        lat: airport.latitude!,
        lng: airport.longitude!
      });

      this.airports.push({
        name: airport.name,
        iataCode: airport.iataCode,
        icaoCode: airport.icaoCode
      })
    });

    this.noAirportsFound = this.airports.length == 0;
    this.loadAirports = false;
  }
}

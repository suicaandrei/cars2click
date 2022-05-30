import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportMapModule } from './features/airport-map/airport-map.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CryptoSearchModule } from './features/crypto-search/crypto-search.module';
import { SharedModule } from './shared/shared.module';
import { SummaryModule } from './features/summary/summary.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    AirportMapModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    CryptoSearchModule,
    SharedModule,
    SummaryModule,
    MatProgressSpinnerModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

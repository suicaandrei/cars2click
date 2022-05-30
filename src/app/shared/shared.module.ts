import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AirportsTableComponent } from './airports-table/airports-table.component';


@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    NavigationComponent,
    AirportsTableComponent
  ],
  exports: [
    NavigationComponent,
    AirportsTableComponent
  ]
})
export class SharedModule { }

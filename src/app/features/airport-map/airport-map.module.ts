import { NgModule } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";
import { AirportMapComponent } from "./airport-map.component";
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        GoogleMapsModule,
        MatInputModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        AirportMapComponent
    ],
    exports: [
    ]
  })
  
  export class AirportMapModule { }
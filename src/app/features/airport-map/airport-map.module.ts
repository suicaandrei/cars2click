import { NgModule } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";
import { AirportMapComponent } from "./airport-map.component";
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


@NgModule({
    imports: [
        GoogleMapsModule,
        MatInputModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        AirportMapComponent
    ],
    exports: [
    ]
  })
  
  export class AirportMapModule { }
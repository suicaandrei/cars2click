import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    SummaryComponent
  ]
})
export class SummaryModule { }

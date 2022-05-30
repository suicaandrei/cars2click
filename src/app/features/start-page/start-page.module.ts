import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StartPageComponent } from './start-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  declarations: [
      StartPageComponent
  ]
})

export class StartPageModule { }

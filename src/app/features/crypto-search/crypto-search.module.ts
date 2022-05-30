import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoSearchComponent } from './crypto-search.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  declarations: [CryptoSearchComponent]
})
export class CryptoSearchModule { }

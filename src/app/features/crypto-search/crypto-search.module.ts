import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoSearchComponent } from './crypto-search.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule
  ],
  declarations: [CryptoSearchComponent]
})
export class CryptoSearchModule { }

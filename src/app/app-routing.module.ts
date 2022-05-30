import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportMapComponent } from './features/airport-map/airport-map.component';
import { CryptoSearchComponent } from './features/crypto-search/crypto-search.component';
import { StartPageComponent } from './features/start-page/start-page.component';
import { SummaryComponent } from './features/summary/summary.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: StartPageComponent},
  { path: 'airport-map', component: AirportMapComponent},
  { path: 'crypto-search', component: CryptoSearchComponent},
  { path: 'summary', component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

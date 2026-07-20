import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' }
];
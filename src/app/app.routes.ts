import { Routes } from '@angular/router';
import { HomeComponent } from './components/sections/home.component';
import { ServicesComponent } from './components/sections/services.component';
import { StoreComponent } from './components/sections/store.component';
import { GalleryComponent } from './components/sections/gallery.component';
import { ContactComponent } from './components/sections/contact.component';
import { AboutComponent } from './components/sections/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'tienda', component: StoreComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
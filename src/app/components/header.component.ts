import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-2 text-2xl font-bold text-domus-primary">
          <i class="fas fa-home"></i>
          <span>DOMUS</span>
        </a>

        <!-- Menú Desktop -->
        <ul class="hidden md:flex gap-8 text-domus-primary font-medium">
          @for (item of menuItems; track item.path) {
            <li>
              <a [routerLink]="item.path" 
                 routerLinkActive="text-domus-accent" 
                 [routerLinkActiveOptions]="{exact: item.exact}">
                {{ item.label }}
              </a>
            </li>
          }
        </ul>

        <!-- Botón Hamburguesa Mobile -->
        <button (click)="toggleMenu()" class="md:hidden text-2xl text-domus-primary">
          <i [class]="menuOpen() ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </nav>

      <!-- Menú Mobile -->
      @if (menuOpen()) {
        <div class="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul class="flex flex-col p-4 gap-3 text-domus-primary font-medium">
            @for (item of menuItems; track item.path) {
              <li>
                <a [routerLink]="item.path" 
                   (click)="closeMenu()" 
                   routerLinkActive="text-domus-accent" 
                   [routerLinkActiveOptions]="{exact: item.exact}">
                  {{ item.label }}
                </a>
              </li>
            }
          </ul>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  menuOpen = signal(false);
  
  menuItems = [
    { path: '/', label: 'Inicio', exact: true },
    { path: '/nosotros', label: 'Nosotros', exact: false },
    { path: '/servicios', label: 'Servicios', exact: false },
    { path: '/tienda', label: 'Tienda', exact: false },
    { path: '/galeria', label: 'Galería', exact: false },
    { path: '/contacto', label: 'Contacto', exact: false }
  ];

  toggleMenu() {
    this.menuOpen.update(value => !value);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
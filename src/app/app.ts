import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { WhatsAppButtonComponent } from './components/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsAppButtonComponent],
  template: `
    <app-header />
    <main class="pt-16">
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-button />
  `
})
export class App {}
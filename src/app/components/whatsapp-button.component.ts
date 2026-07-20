import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  template: `
    <a [href]="whatsappLink()" 
       target="_blank"
       class="whatsapp-button fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50">
      <i class="fab fa-whatsapp text-3xl"></i>
    </a>
  `
})
export class WhatsAppButtonComponent {
  phoneNumber = signal('5211234567890');
  message = signal('Hola%20DOMUS!%20Quiero%20solicitar%20un%20presupuesto');
  
  whatsappLink = signal(`https://wa.me/${this.phoneNumber()}?text=${this.message()}`);
}
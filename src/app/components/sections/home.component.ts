import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// import heroImage from "../../../assets/hero-bg.jpg";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="relative h-screen flex items-center justify-center bg-domus-primary text-white">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">DOMUS</h1>
        <p class="text-xl md:text-2xl mb-8 font-light">Cuidamos tu hogar como si fuera nuestro</p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/5211234567890?text=Hola%20DOMUS!%20Quiero%20un%20presupuesto" 
             target="_blank"
             class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a routerLink="/contacto"
             class="bg-domus-accent hover:bg-yellow-500 text-domus-primary px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
            <i class="fas fa-file-invoice"></i> Solicitar presupuesto
          </a>
        </div>
      </div>

      <!-- Imagen de fondo -->
      <img src="assets/hero-bg.jpg" 
           alt="DOMUS Hero" 
           class="absolute inset-0 w-full h-full object-cover"
           loading="lazy">
    </section>
  `
})
export class HomeComponent {}
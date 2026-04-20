import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common'; // Importante para usar *ngFor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements AfterViewInit {
  
  // Listado de propiedades (Actualizado con mejores imágenes)
  viviendas = [
    {
      nombre: 'Villa Luxury Vista Mar Adeje',
      ciudad: 'Costa Adeje',
      habitaciones: 5,
      precio: 150,
      imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600' // <--- FOTO ARREGLADA
    },
    {
      nombre: 'Ático Moderno Centro Santa Cruz',
      ciudad: 'Santa Cruz',
      habitaciones: 2,
      precio: 75,
      imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600'
    },
    {
      nombre: 'Casa Rural con Encanto en Vilaflor',
      ciudad: 'Vilaflor',
      habitaciones: 3,
      precio: 110,
      imagen: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=600'
    }
  ];

  ngAfterViewInit(): void {
    // Esto es lo que activa el menú al hacer clic
    setTimeout(() => {
      initFlowbite();
    }, 1);
  }
}
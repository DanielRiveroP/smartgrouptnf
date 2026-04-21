import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements AfterViewInit {
  
  companyName = 'Olax'; // [cite: 1]

  // Datos de propiedades siguiendo el diseño del PDF [cite: 30, 31, 32, 33, 34, 35, 36, 37, 38]
  viviendas = [
    {
      nombre: 'Villa Horizon Adeje',
      ciudad: 'Costa Adeje',
      habitaciones: 5,
      huespedes: 10, 
      camas: 6,      
      banos: 3,      
      precio: 150,
      imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600'
    },
    {
      nombre: 'Ático Centro Santa Cruz',
      ciudad: 'Santa Cruz',
      habitaciones: 2,
      huespedes: 4,  
      camas: 2,      
      banos: 1,      
      precio: 75,
      imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600'
    }
  ];

  ngAfterViewInit(): void {
    // Subimos a 500ms para asegurar que el dropdown y el modal se enganchen bien
    setTimeout(() => {
      initFlowbite();
    }, 500);
  }
}
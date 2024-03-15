import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cards = [
    {
      title: 'Tarjeta 1',
      image: 'imagen1.jpg',
      content: 'Contenido de la tarjeta 1',
    },
    {
      title: 'Tarjeta 2',
      image: 'imagen2.jpg',
      content: 'Contenido de la tarjeta 2',
    },
  ];
}

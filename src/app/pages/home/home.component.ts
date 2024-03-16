import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cards = [
    {
      title: 'Chicago',
      image: '/assets/img/img-card1.jpg',
      description: 'From $600.00',
    },
    {
      title: 'Porto',
      image: '/assets/img/img-card2.jpg',
      description: 'From $600.00',
    },
    {
      title: 'Chicago',
      image: '/assets/img/img-card3.jpg',
      description: 'From $600.00',
    },
  ];
  showInformation = false;

  onToggleMenu(state: boolean): void {
    this.showInformation = state; // O cualquier lógica específica que desees realizar
  }
}

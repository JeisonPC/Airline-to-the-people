import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() image: string | undefined;
  @Input() content: string | undefined;

}

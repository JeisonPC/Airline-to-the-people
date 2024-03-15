import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.svg',
})
export class HamburgerComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}

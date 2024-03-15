import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-language',
  templateUrl: './language.component.svg',
})
export class LanguageComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}

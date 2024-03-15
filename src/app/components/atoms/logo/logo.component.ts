import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-logo',
  templateUrl: './logo.component.svg',
})
export class LogoComponent {
  fillColor = 'rgb(255, 0, 0)';
}
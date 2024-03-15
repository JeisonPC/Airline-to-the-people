import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  imports: [CommonModule]
})
export class HamburgerComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}

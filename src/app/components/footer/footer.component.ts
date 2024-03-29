import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../atoms/logo/logo.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  isMobile: boolean = false; // Initialize to false

  ngOnInit() {
    const isMobileMatch = window.matchMedia('(min-width: 180px)');
    this.isMobile = isMobileMatch.matches; // Set based on media query
  }
}

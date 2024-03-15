import { Component, input } from '@angular/core';
import { HamburgerComponent } from '../atoms/hamburger/hamburger.component';
import { LogoComponent } from '../atoms/logo/logo.component';
import { LanguageComponent } from '../atoms/language/language.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HamburgerComponent, LogoComponent, LanguageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}

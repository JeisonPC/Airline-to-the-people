import { Component, input } from '@angular/core';
import { HamburgerComponent } from '../atoms/hamburger/hamburger.component';
import { LogoComponent } from '../atoms/logo/logo.component';
import { LanguageComponent } from '../atoms/language/language.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    HamburgerComponent,
    LogoComponent,
    LanguageComponent,
    SidebarComponent,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}

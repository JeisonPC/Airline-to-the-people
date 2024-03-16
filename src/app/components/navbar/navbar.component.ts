import { Component, OnDestroy, OnInit, input } from '@angular/core';
import { HamburgerComponent } from '../atoms/hamburger/hamburger.component';
import { LogoComponent } from '../atoms/logo/logo.component';
import { LanguageComponent } from '../atoms/language/language.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../sidebar/sidebar.service';
import { Subscription } from 'rxjs';
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
export class NavbarComponent implements OnInit, OnDestroy {
  sidebarOpen = false;
  private subscription: Subscription | undefined;

  constructor(private sidebarService: SidebarService) {}

  handleToggle(): void {
    this.sidebarService.toggleSidebar();
  }

  ngOnInit() {
    this.subscription = this.sidebarService.sidebarOpen$.subscribe(open => {
      this.sidebarOpen = open;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

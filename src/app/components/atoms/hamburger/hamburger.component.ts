import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../sidebar/sidebar.service';

@Component({
  standalone: true,
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  imports: [CommonModule]
})
export class HamburgerComponent implements OnInit, OnDestroy {
  menuOpen = false;
  private subscription = new Subscription();

  @Output() toggle = new EventEmitter<boolean>();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.sidebarService.menuIconState$.subscribe((state: boolean) => {
        this.menuOpen = state;
      })
    );
  }

  toggleMenu(): void {
    this.sidebarService.toggleSidebar();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnDestroy {
  isOpen = false;
  private subscription: Subscription;

  constructor(private sidebarService: SidebarService) {
    this.subscription = this.sidebarService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

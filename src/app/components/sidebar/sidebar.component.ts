import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {
  showInformation = false;
  private subscription: Subscription | undefined;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.subscription = this.sidebarService.showInformation$.subscribe(show => {
      this.showInformation = show;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleInformation() {
    this.sidebarService.toggleInformation();
  }
}

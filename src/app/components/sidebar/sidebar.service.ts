import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isOpen = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpen.asObservable(); // Esto es lo que usarás en la plantilla

  toggleSidebar(): void {
    this.isOpen.next(!this.isOpen.value);
  }
}

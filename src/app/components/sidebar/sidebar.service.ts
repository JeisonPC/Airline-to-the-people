import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _sidebarOpen = new BehaviorSubject<boolean>(false);
  private _showInformation = new BehaviorSubject<boolean>(false);
  private _menuIconState = new BehaviorSubject<boolean>(false); // Inicialización correcta

  public sidebarOpen$ = this._sidebarOpen.asObservable();
  public showInformation$ = this._showInformation.asObservable();
  public menuIconState$ = this._menuIconState.asObservable(); // Exponer como Observable

  toggleSidebar() {
    if (this._showInformation.value) {
      this._showInformation.next(false);
      // Asegurarse de que el ícono del menú refleje el cambio de estado adecuadamente
      this._menuIconState.next(this._sidebarOpen.value); // Aún visible, actualiza si es necesario
    } else {
      this._sidebarOpen.next(!this._sidebarOpen.value);
      this._menuIconState.next(this._sidebarOpen.value); // Actualiza el estado del ícono
    }
  }

  toggleInformation() {
    this._showInformation.next(!this._showInformation.value);
    // Aquí también podrías querer actualizar el estado del ícono del menú
    // dependiendo de cómo quieras que funcione la lógica de tu UI
    this._menuIconState.next(this.isMenuIconX());
  }

  isMenuIconX(): boolean {
    return this._sidebarOpen.value || this._showInformation.value;
  }
}

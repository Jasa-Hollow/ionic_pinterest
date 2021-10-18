import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Búsqueda', url: 'search', icon: 'search' },
    { title: 'Mensajes', url: 'mensajes', icon: 'mail' },
    { title: 'Mi perfil', url: 'perfil', icon: 'moon' },
  ];
  constructor() {}
}

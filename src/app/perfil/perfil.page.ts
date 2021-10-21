import { Component, OnInit } from '@angular/core';

/* Interfaz para los tableros del menú de perfil */
interface Tableros {
  img: string,
  title: string,
  pin: string,
  time: string
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {

  constructor() { }

  /* Primer columna de tableros en el perfil */
  tablero1 : Tableros[] = [
    {
      title: 'Todos los Pines',
      time: '3 d',
      img: 'assets/009.jpg',
      pin: '20.554 Pines'
    }
  ]
  
  /* Segunda columna de tableros en el perfil */
  tablero2 : Tableros[] = [
    
  ]

  ngOnInit() {
  }

}

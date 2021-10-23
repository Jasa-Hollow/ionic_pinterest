import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

interface Slides {
  img: string,
  text: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {

  constructor() { }

  slide : Slides[] = [
    {
      img: 'assets/ideas/i1.png',
      text: 'Mensaje inspiradores'
    },
    {
      img: 'assets/ideas/i2.png',
      text: 'Recetas culinarias'
    },
    {
      img: 'assets/ideas/i3.png',
      text: 'Videojuegos de Epic Games'
    }
  ]

  ngOnInit() {
    // Se define al iniciar, debido a que si no se hace, da problemas con el "toggle".
    document.body.setAttribute('color-theme','light');
  }

}

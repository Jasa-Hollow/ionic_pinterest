import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

interface Items {
  name: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  constructor() { }

  items: Items[]=[
    {
      name: "Todos"
    },
    {
      name: "Siguiendo"
    },
    {
      name: "Genshin Impact"
    },
    {
      name: "Xenoblade 2"
    }
  ];

  ngOnInit() {
  }

}

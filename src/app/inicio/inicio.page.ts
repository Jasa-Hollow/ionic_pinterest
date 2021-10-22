import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { ActionSheetController } from '@ionic/angular';

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

/* ---------------------------------------------------------- */
/* Interfaz para los Pines */
interface Pines {
  img: string,
  text: string
}
/* ---------------------------------------------------------- */

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  menuBtn = false;

  onClick() {
    this.menuBtn = ! this.menuBtn;
  }

  /* ---------------------------------------------------------- */
  /* Pines de la opción "Todos" */
  todos: Pines[]=[
    {
      img: 'assets/pins/p1.jpg',
      text: ''
    },
    {
      img: 'assets/pins/p3.jpg',
      text: ''
    },
    {
      img: 'assets/pins/p5.jpg',
      text: 'The Legend of Zelda: Majoras Mask for 3DS'
    },
    {
      img: 'assets/pins/p7.jpg',
      text: 'Edelgard'
    },
    {
      img: 'assets/pins/p9.jpg',
      text: ''
    },
    {
      img: 'assets/pins/p11.jpg',
      text: ''
    }
  ];
  /* ---------------------------------------------------------- */

  /* ---------------------------------------------------------- */
  /* Pines de la opción "Siguiendo" */
  siguiendo: Pines[]=[
    {
      img: 'assets/pins/p2.png',
      text: ''
    },
    {
      img: 'assets/pins/p4.png',
      text: 'Donkey Kong'
    },
    {
      img: 'assets/pins/p6.png',
      text: ''
    },
    {
      img: 'assets/pins/p8.png',
      text: ''
    },
    {
      img: 'assets/pins/p10.png',
      text: 'Pandoria  Xenoblade 2'
    },
    {
      img: 'assets/pins/p12.png',
      text: ''
    }
  ];
  /* ---------------------------------------------------------- */

  /* .............................................................. */
  /* Action Sheet para las opciones */
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'action-sheet',
      animated: true,
      buttons: [{
        text: 'Descargar imagen',
        handler: () => {
          console.log('Imagen descargada');
        }
      }, {
        text: 'Ocultar Pin',
        handler: () => {
          console.log('Pin ocultado');
        }
      }, {
        text: 'Reportar Pin',
        handler: () => {
          console.log('Reportado el pin y el usuario');
        }
      }, {
        text: 'Cerrar',
        role: 'cancel'
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  pins() {
    this.presentActionSheet();
  }
  /* .............................................................. */

  ngOnInit() {
  }

}

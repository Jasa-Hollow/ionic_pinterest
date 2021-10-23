import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';

interface Messages {
  id: number,
  img: string,
  user: string,
  msg: string,
  date: string
}

interface News {
  title: string,
  date: string,
  img: string
}

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})

export class MensajesPage implements OnInit {

  constructor( public modalController: ModalController ) {

  }

  /* ---------------------------------------------------- */
  /* Actualizaciones */
  new: News[]=[
    {
      title: '15 pines que marcan tendencia sobre Videojuegos',
      date: '8h',
      img: 'assets/009.jpg'
    },
    {
      title: 'Se han guardado 5 Pines de Games',
      date: '17h',
      img: 'assets/014.jpg'
    },
    {
      title: 'Se han guardado 3 Pines de Fire Emblem',
      date: '18h',
      img: 'assets/er.jpg'
    },
    {
      title: 'Se han guardado 1 Pin de Super Smash Bros',
      date: '1 sem',
      img: 'assets/smbB.jpg'
    }
  ]
  /* ---------------------------------------------------- */

  /* ---------------------------------------------------- */
  /* Mensajes */
  message: Messages[]=[
    {
      id: 1,
      img: 'assets/pfp/cm.png',
      user: 'Cristian Mejía',
      msg: 'Mira man, fíjate que encontré donde farmear...',
      date: '9 meses'
    },
    {
      id: 2,
      img: 'assets/pfp/hdf.png',
      user: 'Alejandro Sorto Torres',
      msg: 'Grande bro, aunque Naruto me gusta más por...',
      date: '1 año'
    },
    {
      id: 3,
      img: 'assets/pfp/nc.png',
      user: 'Hikari Éden',
      msg: 'Looks like they thinking about all of Alrest childrens...',
      date: '1 año'
    },
    {
      id: 4,
      img: 'assets/pfp/cgg.png',
      user: 'Daniela Hernlook',
      msg: 'Nice pin! No esperaba conocer a alguien que...',
      date: '1 año'
    }
  ];
  /* ---------------------------------------------------- */

  state=false

  onClick(state){
    this.state = !this.state
  }

  async openModal(img, user, msg, date) {
    const modal = await this.modalController.create({
      component: MyModalPage,
      cssClass: 'my-custom-class',
      /* Se exportan por medio del modal, los datos del mensaje y usuario en cuestión */ 
      componentProps: {
        'img': img,
        'user': user,
        'msg': msg,
        'date': date
      }
    });

    return await modal.present();
  }

  ngOnInit() {
    // Se define al iniciar, debido a que si no se hace, da problemas con el "toggle".
    document.body.setAttribute('color-theme','light');
  }

}

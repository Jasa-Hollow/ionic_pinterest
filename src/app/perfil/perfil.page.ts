import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

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

  constructor(private actionSheetController: ActionSheetController) { }

  /* .............................................................. */
  /* Action Sheet para las opciones */
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Perfil',
      cssClass: 'action-sheet',
      animated: true,
      buttons: [{
        text: 'Configuración',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Copiar el enlace del perfil',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cerrar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  options() {
    this.presentActionSheet();
  }
  /* .............................................................. */

  /* Primer columna de tableros en el perfil */
  tablero1 : Tableros[] = [
    {
      title: 'Todos los Pines',
      time: '3 d',
      img: 'assets/009.jpg',
      pin: '20.554 Pines'
    },
    {
      title: 'Genshin Impact',
      time: '4 d',
      img: 'assets/tableros/genshin.png',
      pin: '265 Pines'
    }

  ]
  
  /* Segunda columna de tableros en el perfil */
  tablero2 : Tableros[] = [
    {
      title: 'Octopath Traveler',
      time: '3 d',
      img: 'assets/tableros/octopath.jpg',
      pin: '10 Pines'
    },
    {
      title: 'Xenoblade Chronicles',
      time: '1 mes',
      img: 'assets/tableros/xc2.png',
      pin: '1.972 Pines'
    }
  ]

  ngOnInit() {
    // Se define al iniciar, debido a que si no se hace, da problemas con el "toggle".
    document.body.setAttribute('color-theme','light');
  }

}

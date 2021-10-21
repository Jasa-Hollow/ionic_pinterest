import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AutosizeModule} from 'ngx-autosize';



@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})

export class MyModalPage{

  constructor( public modalController: ModalController ) {

  }

  /* Se importan por medio del modal, los datos del mensaje y el usuario */
  @Input() img = '';
  @Input() user = '';
  @Input() msg = '';
  @Input() date = '';

  closeModal() {
    this.modalController.dismiss();
  }

  messages = [
    /*
    Se deja vacío el array, para que se simule una conversación en cada chat.
    {
      c_img: 'assets/pfp/mythra.png',
      c_user: 'Jasa',
      c_msg: 'Hello!!',
      c_date: '6 meses'
    }
    */
  ]

  currentUser = 'Jasa';
  newMsg = '';

  sendMessage(){
    this.messages.push({
      c_img: 'assets/pfp/mythra.png',
      c_user: 'Jasa',
      c_msg: this.newMsg,
      c_date: '10/17/2021  5:56p.m.'
    })

    this.newMsg = '';
  }

  ngOnInit() {
  }

}

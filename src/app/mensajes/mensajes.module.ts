import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesPageRoutingModule } from './mensajes-routing.module';

import { MensajesPage } from './mensajes.page';

import { MyModalPage } from '../my-modal/my-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesPageRoutingModule
  ],
  declarations: [
    MensajesPage,
    MyModalPage
  ],
  entryComponents: [MyModalPage]
})
export class MensajesPageModule {}

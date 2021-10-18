import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyModalPageRoutingModule } from './my-modal-routing.module';

import { MyModalPage } from './my-modal.page';
import {AutosizeModule} from 'ngx-autosize';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyModalPageRoutingModule,
    AutosizeModule
  ],
  declarations: [MyModalPage]
})
export class MyModalPageModule {}

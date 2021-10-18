import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SwiperModule } from 'swiper/angular';

import { InicioPage } from './inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    ScrollingModule,
    SwiperModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}

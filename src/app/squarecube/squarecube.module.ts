import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SquarecubePageRoutingModule } from './squarecube-routing.module';

import { SquarecubePage } from './squarecube.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SquarecubePageRoutingModule
  ],
  declarations: [SquarecubePage]
})
export class SquarecubePageModule {}

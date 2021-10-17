import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumbersystemPageRoutingModule } from './numbersystem-routing.module';

import { NumbersystemPage } from './numbersystem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumbersystemPageRoutingModule
  ],
  declarations: [NumbersystemPage]
})
export class NumbersystemPageModule {}

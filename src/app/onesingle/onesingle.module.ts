import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnesinglePageRoutingModule } from './onesingle-routing.module';

import { OnesinglePage } from './onesingle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnesinglePageRoutingModule
  ],
  declarations: [OnesinglePage]
})
export class OnesinglePageModule {}

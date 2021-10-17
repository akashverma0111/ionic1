import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecimalfractionPageRoutingModule } from './decimalfraction-routing.module';

import { DecimalfractionPage } from './decimalfraction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecimalfractionPageRoutingModule
  ],
  declarations: [DecimalfractionPage]
})
export class DecimalfractionPageModule {}

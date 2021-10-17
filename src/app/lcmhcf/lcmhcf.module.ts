import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LcmhcfPageRoutingModule } from './lcmhcf-routing.module';

import { LcmhcfPage } from './lcmhcf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LcmhcfPageRoutingModule
  ],
  declarations: [LcmhcfPage]
})
export class LcmhcfPageModule {}

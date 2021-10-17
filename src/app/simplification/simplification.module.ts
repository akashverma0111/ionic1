import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimplificationPageRoutingModule } from './simplification-routing.module';

import { SimplificationPage } from './simplification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimplificationPageRoutingModule
  ],
  declarations: [SimplificationPage]
})
export class SimplificationPageModule {}

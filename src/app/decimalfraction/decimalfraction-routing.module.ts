import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecimalfractionPage } from './decimalfraction.page';

const routes: Routes = [
  {
    path: '',
    component: DecimalfractionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecimalfractionPageRoutingModule {}

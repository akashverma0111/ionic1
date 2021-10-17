import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SquarecubePage } from './squarecube.page';

const routes: Routes = [
  {
    path: '',
    component: SquarecubePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SquarecubePageRoutingModule {}

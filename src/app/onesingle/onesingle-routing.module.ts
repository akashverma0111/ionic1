import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnesinglePage } from './onesingle.page';

const routes: Routes = [
  {
    path: '',
    component: OnesinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnesinglePageRoutingModule {}

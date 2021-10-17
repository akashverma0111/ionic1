import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LcmhcfPage } from './lcmhcf.page';

const routes: Routes = [
  {
    path: '',
    component: LcmhcfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LcmhcfPageRoutingModule {}

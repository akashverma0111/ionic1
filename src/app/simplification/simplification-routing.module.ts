import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimplificationPage } from './simplification.page';

const routes: Routes = [
  {
    path: '',
    component: SimplificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimplificationPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumbersystemPage } from './numbersystem.page';

const routes: Routes = [
  {
    path: '',
    component: NumbersystemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumbersystemPageRoutingModule {}

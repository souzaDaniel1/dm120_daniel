import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorLedPage } from './cor-led.page';

const routes: Routes = [
  {
    path: '',
    component: CorLedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorLedPageRoutingModule {}

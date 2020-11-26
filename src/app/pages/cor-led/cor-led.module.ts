import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorLedPageRoutingModule } from './cor-led-routing.module';

import { CorLedPage } from './cor-led.page';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorLedPageRoutingModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [CorLedPage]
})
export class CorLedPageModule {}

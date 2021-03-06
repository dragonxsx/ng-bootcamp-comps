import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StatisticsComponent,
    ItemListComponent,
    ViewsHomeComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }

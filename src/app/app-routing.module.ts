import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';

const routes: Routes = [
  { path: 'elements', component: ElementsHomeComponent },
  { path: 'collections', component: CollectionsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

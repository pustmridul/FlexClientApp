import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item.component';
import { ItemService } from './item.service';

const routes: Routes = [
   {
    path: 'item-list',
    component: ItemComponent,
    resolve: {
      uls: ItemService
    },
    data: { animation: 'ItemComponent' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }

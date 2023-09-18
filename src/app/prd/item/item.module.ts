import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreSidebarModule } from '@core/components';
import { NewItemUnitComponent } from './new-item-unit/new-item-unit.component';
import { FormsModule } from '@angular/forms';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InvoiceModule } from 'app/main/apps/invoice/invoice.module';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';


@NgModule({
  declarations: [
    ItemComponent,
    NewItemUnitComponent
  ],
  imports: [ItemRoutingModule,
     CommonModule,
    CoreCommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,
    CorePipesModule,
    CoreDirectivesModule,
    InvoiceModule,
    CoreSidebarModule]
})

export class ItemModule { }

    
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
 
import { AdminComponent }           from './admin/admin.component';

import { AdminRoutingModule }       from './admin-routing.module';
import { ManageProductsComponent } from './manage-products/manage-products.component';
 
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
    ManageProductsComponent,
  ]
})
export class AdminModule {}
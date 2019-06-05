import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../auth/auth.guard';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children: [
      {
        path: '',
        canActivateChild:[AuthGuard],
        children: [
          {path: 'detail/:id', component: ProductDetailComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
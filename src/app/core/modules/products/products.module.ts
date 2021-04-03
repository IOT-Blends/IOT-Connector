import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ProductsComponent, DashboardComponent],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}

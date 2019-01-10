import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductItemPage } from './product-item';

@NgModule({
  declarations: [
    ProductItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductItemPage),
  ],
})
export class ProductItemPageModule {}

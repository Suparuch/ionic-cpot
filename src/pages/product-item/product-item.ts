import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-item',
  templateUrl: 'product-item.html',
})
export class ProductItemPage {

  nameItem = "";
  imgPath = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.nameItem = this.navParams.get('name');
    this.imgPath = this.navParams.get('imgPath');
  }
}

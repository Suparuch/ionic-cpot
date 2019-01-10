import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductItemPage } from '../product-item/product-item';

@IonicPage({
  name: 'home-page',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  items = [
    { name: 'ผ้าและผลิตภัณฑ์จากผ้า', img: "http://thailandshoppingparadise.com/uploads/images/SA_11_silk.png" },
    { name: 'ของใช้ตกแต่ง', img: "https://www.forfur.com/img/I56/l_5526_14582223291155301584.jpg" },
    { name: 'เครื่องประดับ', img: "http://www.weddingsquare.com/uploads/68294/%E0%B8%9E%E0%B8%B8%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B8%E0%B8%A8%E0%B8%A2%E0%B9%8C1.jpg" },
    { name: 'อาหาร', img: "https://mpics.mgronline.com/pics/Images/560000003537902.JPEG" },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  onClick(item) {
    this.navCtrl.push(ProductItemPage, {
      name: item.name,
      imgPath: item.img
    });
  }
}

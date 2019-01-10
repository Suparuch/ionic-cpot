import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public actionSheetCtrl: ActionSheetController) { }

  openMenu() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('xxx');
          }
        }
      ]
    });
    actionSheet.present();
  }

}

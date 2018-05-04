import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string}>;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    
  }

//   openUrl() {

//     this.platform.ready().then(() => {
//         let browser = new InAppBrowser("http://thegalleonrestaurant.ie/", '_blank');

//     });
// }   

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RestaurantsPage, {
      item: item
    });
  }
}


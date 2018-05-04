import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Cordova } from '@ionic-native/core';

@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  openGalleon() {
    window.open('http://www.thegalleonrestaurant.ie/', '_system', 'location=yes'); return false;
  }

  openDaRobertas() {
    window.open('http://www.darobertas.ie/', '_system', 'location=yes'); return false;
  }

  openLaCollina() {
    window.open('http://la-collina.business.site/', '_system', 'location=yes'); return false;
  }

  openFisherman() {
    window.open('http://www.fisherman.ie/', '_system', 'location=yes'); return false;
  }

  openAniar() {
    window.open('http://aniarrestaurant.ie/', '_system', 'location=yes'); return false;
  }

  openKirwans() {
    window.open('http://kirwanslane.com/', '_system', 'location=yes'); return false;
  }

  openKai() {
    window.open('http://kaicaferestaurant.com/', '_system', 'location=yes'); return false;
  }

  openLanaAsian() {
    window.open('http://lanathai.ie/', '_system', 'location=yes'); return false;
  }

  openArdBia() {
    window.open('http://www.ardbia.com/', '_system', 'location=yes'); return false;
  }

  openCavaBodega() {
    window.open('http://www.cavarestaurant.ie/', '_system', 'location=yes'); return false;
  }

  openDock() {
    window.open('https://www.facebook.com/Dock1Seafood/', '_system', 'location=yes'); return false;
  }

  openBlackCat() {
    window.open('http://blackcat.ie/', '_system', 'location=yes'); return false;
  }

  openThaiGarden() {
    window.open('http://thaigarden.ie/', '_system', 'location=yes'); return false;
  }

}


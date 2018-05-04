import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openRoisin() {
    window.open('http://www.roisindubh.net/', '_system', 'location=yes'); return false;
  }

  openTigCoili() {
    window.open('http://www.tigcoiligalway.com/home.html', '_system', 'location=yes'); return false;
  }

  openSevenBridgestreet() {
    window.open('http://sevenbridgestreet.ie/', '_system', 'location=yes'); return false;
  }

  openAnPucan() {
    window.open('http://anpucan.ie/', '_system', 'location=yes'); return false;
  }

  openMcGettigans() {
    window.open('http://www.mcgettigans.com/galway/', '_system', 'location=yes'); return false;
  }

  openMonroes() {
    window.open('http://www.monroes.ie/', '_system', 'location=yes'); return false;
  }

  openCoyotes() {
    window.open('http://coyotes.ie/', '_system', 'location=yes'); return false;
  }

  openBlueNote() {
    window.open('https://www.facebook.com/groups/62055890475/about/', '_system', 'location=yes'); return false;
  }

  openBlackGate() {
    window.open('http://www.blackgate.ie/', '_system', 'location=yes'); return false;
  }

  openOConnors() {
    window.open('http://www.oconnorsbar.com/', '_system', 'location=yes'); return false;
  }

  openBarAnChaladh() {
    window.open('http://barr-an-chaladh.business.site/', '_system', 'location=yes'); return false;
  }

  openDailBar() {
    window.open('http://thedailbar.com/', '_system', 'location=yes'); return false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');
  }

}

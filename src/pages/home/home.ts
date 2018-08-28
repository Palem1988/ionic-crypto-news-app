import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
//Import cryptocontrol api
import CryptoNewsAPI from 'crypto-news-api';
// Import pages to allow links to the page
import { CategoryPage } from '../../pages/category/category';

// Service import for items
import { ItemApi } from '../../services/service';

// Connect to the CryptoControl API
const Api = new CryptoNewsAPI('API_KEY_HERE'); 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {
  // The items array to populate with data is created
  items: any;
  news : any;



  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {
      Api.getTopNews()
      .then((articles) => { this.news = articles; })
      .catch(function (error) { console.log(error) })
      }

  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  // CategoryTapped($event, category) {
  //   this.navCtrl.push(CategoryPage, {
  //       category: 'Fantasticness'
  //   });
  // }
  //
  // CategoryTapped_2($event, category) {
  //   this.navCtrl.push(CategoryPage, {
  //       category: 'Short'
  //   });
  // }
  //
  // CategoryTapped_3($event, category) {
  //   this.navCtrl.push(CategoryPage, {
  //       category: 'Booperness'
  //   });
  // }

}

import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home', 
    },
    {
      title: 'profile',
      url: '/profile',
      icon: 'person', 
    },
    {
      title: 'my favorite',
      url: '/favorite',
      icon: 'heart', 
    },
   
    {
      title: 'my-recipies',
      url: '/add-news',
      icon: 'document', 
    },
    {
      title: 'settings',
      url: '/settings',
      icon: 'settings', 
    },
    {
      title: 'logout',
      url: '/sign-in',
      icon: 'compass', 
    }
   
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuController:MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  backSide(){
     this.menuController.close();
  }
}

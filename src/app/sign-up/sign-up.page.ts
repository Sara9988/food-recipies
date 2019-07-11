import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

}

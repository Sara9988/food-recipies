import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 public cards =[

  {
    url:'../../assets/imgs/n2.png',
    title:'BBQ Recipe',
    name:'time',
    name2:'heart'
},

{
  url:'../../assets/imgs/n.png',
  title:'BBQ Recipe',
  name:'time',
  name2:'heart'
},
{
  url:'../../assets/imgs/n2.png',
  title:'BBQ Recipe',
  name:'time',
  name2:'heart'
},
 ];
  constructor(private menu: MenuController) {}

  onRateChange(event){
    event.stopPropagation();
    this.menu.enable(true);
  }

}

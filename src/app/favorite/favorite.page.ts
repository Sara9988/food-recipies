import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
   
  public cards =[

    {
      url:'../../assets/imgs/n2.png',
      title:'BBQ Recipe',
      name:'time',
      name2:'heart',
      
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





  constructor() { }

  ngOnInit() {
  }

}

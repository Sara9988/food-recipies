import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.page.html',
  styleUrls: ['./detailes.page.scss'],
})
export class DetailesPage implements OnInit {
  public collectItem=[
    {
      title_list:'Pokémon Yellow'
    },

    {
      title_list:'Mega Man X'
    },
    {
      title_list:'The Legend of Zelda'
    },
    {
      title_list:'Pac-Man'
    },
    {
      title_list:'Super Mario World'
    },
  ];

  public sponsers=[
   {
      picDetail:'../../assets/imgs/profile.png',
      titleSpons:'sara jossief',
      timeSponser:'3h ago'


   },
   {
    picDetail:'../../assets/imgs/profile.png',
    titleSpons:'sara jossief',
    timeSponser:'3h ago'


 },
 {
  picDetail:'../../assets/imgs/profile.png',
  titleSpons:'sara jossief',
  timeSponser:'3h ago'


},
  ];
  like_active: boolean = false;
  showTextArea: boolean  = false;
 
  constructor() { }

  ngOnInit() {
  }
  like(){
    if(this.like_active ==false){
      this.like_active= true;
    }
    else{
      this.like_active= false;
    }
  }
  add(){
    this.showTextArea = !this.showTextArea;
  }

  changeImage(event, cardImage){
    cardImage.src = event.target.src;
  }
}   

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailesPage } from './detailes.page';
import { IonicRatingModule} from 'ionic4-rating/dist/index';

const routes: Routes = [
  {
    path: '',
    component: DetailesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicRatingModule
  ],
  declarations: [DetailesPage]
})
export class DetailesPageModule {}

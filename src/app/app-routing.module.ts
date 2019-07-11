import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInPageModule' },
 
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'favorite', loadChildren: './favorite/favorite.module#FavoritePageModule' },
  { path: 'detailes', loadChildren: './detailes/detailes.module#DetailesPageModule' },
  { path: 'add-news', loadChildren: './add-news/add-news.module#AddNewsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

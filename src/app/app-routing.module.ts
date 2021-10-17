import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'numbersystem',
    loadChildren: () => import('./numbersystem/numbersystem.module').then( m => m.NumbersystemPageModule)
  },
  {
    path: 'lcmhcf',
    loadChildren: () => import('./lcmhcf/lcmhcf.module').then( m => m.LcmhcfPageModule)
  },
  {
    path: 'decimalfraction',
    loadChildren: () => import('./decimalfraction/decimalfraction.module').then( m => m.DecimalfractionPageModule)
  },
  {
    path: 'simplification',
    loadChildren: () => import('./simplification/simplification.module').then( m => m.SimplificationPageModule)
  },
  {
    path: 'squarecube',
    loadChildren: () => import('./squarecube/squarecube.module').then( m => m.SquarecubePageModule)
  },
  {
    path: 'average',
    loadChildren: () => import('./average/average.module').then( m => m.AveragePageModule)
  },
  {
    path: 'gallary',
    loadChildren: () => import('./gallary/gallary.module').then( m => m.GallaryPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then( m => m.PhotoPageModule)
  },
  {
    path: 'onesingle',
    loadChildren: () => import('./onesingle/onesingle.module').then( m => m.OnesinglePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

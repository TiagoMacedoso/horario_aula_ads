import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  }
];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'roles', loadChildren: () => import('./role/role.module').then(m => m.RoleModule) },
  { path: 'departements', loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule) },
  { path: 'decrets', loadChildren: () => import('./decret/decret.module').then(m => m.DecretModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametresRoutingModule { }

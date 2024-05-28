import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecretComponent } from './decret.component';

const routes: Routes = [
    {
        path:'',
        component: DecretComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecretRoutingModule { }

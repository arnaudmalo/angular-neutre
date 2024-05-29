import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { MajComponent } from "./maj/maj.component";
import { AjoutComponent } from "./ajout/ajout.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
    {
        path:'', component:ListeComponent},
  //      path: 'agents', loadChildren: () => import('./agent.module').then(m => m.AgentModule) },
  //  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
 //   {path: 'agents', component: ListeComponent},
    {path: 'ajout-agent', component: AjoutComponent},
    {path: '', redirectTo: 'agents', pathMatch: 'full'},
    {path: 'maj-agent/:id', component: MajComponent},
    {path: 'details-agent/:id', component: DetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgentRoutingModule { }

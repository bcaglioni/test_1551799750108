import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SircleListComponent } from './sircle-list.component';

const routes: Routes = [
  {
    path: '',
    component: SircleListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SircleListRoutingModule { }

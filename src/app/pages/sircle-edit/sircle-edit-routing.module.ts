import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SircleEditComponent } from './sircle-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SircleEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SircleEditRoutingModule { }

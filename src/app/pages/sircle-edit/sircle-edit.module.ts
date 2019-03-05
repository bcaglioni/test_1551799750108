import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SircleEditComponent } from './sircle-edit.component';
import { SircleEditRoutingModule } from './sircle-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SircleEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SircleEditComponent
  ]
})
export class SircleEditModule { }

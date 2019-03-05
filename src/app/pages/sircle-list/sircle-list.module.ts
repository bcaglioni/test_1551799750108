import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SircleListComponent } from './sircle-list.component';
import { SircleListRoutingModule } from './sircle-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SircleListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SircleListComponent
  ]
})
export class SircleListModule { }

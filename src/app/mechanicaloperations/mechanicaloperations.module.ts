import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechanicaloperationsRoutingModule } from './mechanicaloperations-routing.module';
import { MechanicaloperationsComponent } from './mechanicaloperations.component';
import { MaterialModule } from '../material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    MechanicaloperationsComponent
  ],
  imports: [
    CommonModule,
    MechanicaloperationsRoutingModule,
    MaterialModule,
    MatToolbarModule
  ]
})
export class MechanicaloperationsModule { }

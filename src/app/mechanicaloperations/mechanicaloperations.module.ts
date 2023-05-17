import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechanicaloperationsRoutingModule } from './mechanicaloperations-routing.module';
import { MechanicaloperationsComponent } from './mechanicaloperations.component';
import { MaterialModule } from '../material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    MechanicaloperationsComponent
  ],
  imports: [
    CommonModule,
    MechanicaloperationsRoutingModule,
    MaterialModule,MatToolbarModule,FormsModule,
    ReactiveFormsModule,MatTabsModule,
  ]
})
export class MechanicaloperationsModule { }

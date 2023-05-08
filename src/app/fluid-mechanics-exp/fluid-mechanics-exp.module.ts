import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluidMechanicsExpRoutingModule } from './fluid-mechanics-exp-routing.module';
import { FluidMechanicsExpComponent } from './fluid-mechanics-exp.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    FluidMechanicsExpComponent
  ],
  imports: [
    CommonModule,
    FluidMechanicsExpRoutingModule,
    MatToolbarModule, MaterialModule,MatToolbarModule,FormsModule,
    ReactiveFormsModule,MatTabsModule,
  ]
})
export class FluidMechanicsExpModule { }

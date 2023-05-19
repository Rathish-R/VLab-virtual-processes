import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MassTransferExpRoutingModule } from './mass-transfer-exp-routing.module';
import { MassTransferExpComponent } from './mass-transfer-exp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from '../material/material.module';
import { RotaryDryerComponent } from '../rotary-dryer/rotary-dryer.component';


@NgModule({
  declarations: [
    MassTransferExpComponent, RotaryDryerComponent
  ],
  imports: [
    CommonModule,
    MassTransferExpRoutingModule,
    MatToolbarModule, MaterialModule,MatToolbarModule,FormsModule,
    ReactiveFormsModule,MatTabsModule,
   
  ]
})
export class MassTransferExpModule { }

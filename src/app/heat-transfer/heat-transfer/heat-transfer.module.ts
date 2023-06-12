import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { HeatTransferRoutingModule } from './heat-transfer-routing.module';
import { HeatTransferComponent } from '../heat-transfer.component';
import { HelicalCoilHExComponent } from '../../helical-coil-hex/helical-coil-hex.component'
import { ShellAndTubeComponent } from 'src/app/shell-and-tube/shell-and-tube.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTab, MatTabsModule } from '@angular/material/tabs';

@NgModule({


  declarations: [
    HeatTransferComponent, 
    HelicalCoilHExComponent,
    ShellAndTubeComponent,
  ],
  imports: [
    CommonModule,
    HeatTransferRoutingModule,
    MaterialModule,MatToolbarModule,FormsModule,
    ReactiveFormsModule,MatTabsModule,
 
  ],
  exports:[HeatTransferRoutingModule, HeatTransferComponent,
    HelicalCoilHExComponent,ShellAndTubeComponent]
})
export class HeatTransferModule { }

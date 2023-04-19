import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { HeatTransferRoutingModule } from './heat-transfer-routing.module';
import { HeatTransferComponent } from '../../heat-transfer/heat-transfer.component';
import { SimpleDistillationComponent } from '../../simple-distillation/simple-distillation.component';
import { HelicalCoilHExComponent } from '../../helical-coil-hex/helical-coil-hex.component'
import { ShellAndTubeComponent } from 'src/app/shell-and-tube/shell-and-tube.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTab, MatTabsModule } from '@angular/material/tabs';
import { OpenPanEvaporatorComponent } from 'src/app/open-pan-evaporator/open-pan-evaporator.component';
import { BatchKineticsComponent } from 'src/app/batch-kinetics/batch-kinetics.component';

@NgModule({


  declarations: [
    HeatTransferComponent,   SimpleDistillationComponent,
    HelicalCoilHExComponent,ShellAndTubeComponent,OpenPanEvaporatorComponent,BatchKineticsComponent
  ],
  imports: [
    CommonModule,
    HeatTransferRoutingModule,
    MaterialModule,MatToolbarModule,FormsModule,
    ReactiveFormsModule,MatTabsModule,
 
  ],
  exports:[HeatTransferRoutingModule, HeatTransferComponent, SimpleDistillationComponent,
    HelicalCoilHExComponent,ShellAndTubeComponent]
})
export class HeatTransferModule { }

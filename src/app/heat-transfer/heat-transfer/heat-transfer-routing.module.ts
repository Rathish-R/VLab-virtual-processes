import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeatTransferComponent } from '../heat-transfer.component';
import { ShellAndTubeComponent } from 'src/app/shell-and-tube/shell-and-tube.component';
import { HelicalCoilHExComponent } from 'src/app/helical-coil-hex/helical-coil-hex.component';

import { VerticalCondenserComponent } from 'src/app/vertical-condenser/vertical-condenser.component';
const routes: Routes = [{ path: '', component: HeatTransferComponent ,children:[
  { path: "ShellAndTubeHeatExchanger", component: ShellAndTubeComponent },
  { path: "HelicalCoilHeatExchanger", component: HelicalCoilHExComponent },
  {path:'VerticalCondenser' , component:VerticalCondenserComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeatTransferRoutingModule { }

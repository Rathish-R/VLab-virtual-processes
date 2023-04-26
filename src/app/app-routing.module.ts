import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotaryDryerComponent } from './mass-transfer/rotary-dryer/rotary-dryer.component';
import { ChemicalRectionEngineeringComponent } from './chemical-rection-engineering/chemical-rection-engineering.component';
import { FluidMechanicsComponent } from './fluid-mechanics/fluid-mechanics.component';
import { HeatTransferComponent } from './heat-transfer/heat-transfer.component';
import { MassTransferComponent } from './mass-transfer/mass-transfer.component';
import { MechanicalOperationsComponent } from './mechanical-operations/mechanical-operations.component';
import { ShellAndTubeComponent } from './shell-and-tube/shell-and-tube.component';
import { HelicalCoilHEx } from './helical-coil-hex/HelicalCoilHEx';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'Home', component: HomeComponent, children: [
      { path: 'HeatTransfer', loadChildren: () => import('./heat-transfer/heat-transfer/heat-transfer.module').then(m => m.HeatTransferModule) },
      { path: "MechanicalOperations", component: MechanicalOperationsComponent },
      { path: "FluidMechanics", component: FluidMechanicsComponent },
      { path: "MassTransfer", component: MassTransferComponent },
      { path: "ChemicalReactionEngineering", component: ChemicalRectionEngineeringComponent },
    ]
  },
  { path: "RotaryDryer", component: RotaryDryerComponent },
  { path: "", redirectTo:'/Home', pathMatch:'full' },
  { path: "**", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
